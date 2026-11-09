import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { notify } from "@/lib/mail";
import { registrationSchema } from "@/lib/validate";
import { getCourse } from "@/data/courses";

export const runtime = "nodejs";

// Simple in-memory limiter: 5 submissions per IP per 10 minutes (per server instance).
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = registrationSchema.safeParse(body);
  if (!parsed.success) {
    // A filled honeypot gets a fake success so bots don't learn to adapt.
    if (typeof (body as { website?: unknown })?.website === "string" && (body as { website: string }).website) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const { name, email, phone, college, course } = parsed.data;
  await query(
    "INSERT INTO registrations (name, email, phone, college, course_slug) VALUES ($1,$2,$3,$4,$5)",
    [name, email, phone, college || null, course],
  );

  // Email failure must not lose the registration or fail the request.
  try {
    await notify({
      subject: `New registration: ${name} for ${getCourse(course)?.title ?? course}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `College: ${college || "-"}`,
        `Course: ${getCourse(course)?.title ?? course}`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("notify failed", err);
  }

  return NextResponse.json({ ok: true });
}
