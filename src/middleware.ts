import { NextRequest, NextResponse } from "next/server";

// HTTP Basic auth for /admin. Fails closed if no password is configured in production.
export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER ?? "admin";
  const pass = process.env.ADMIN_PASSWORD;

  if (!pass) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Admin disabled: ADMIN_PASSWORD not set", { status: 503 });
    }
    return NextResponse.next();
  }

  const header = req.headers.get("authorization") ?? "";
  const [scheme, encoded] = header.split(" ");
  if (scheme === "Basic" && encoded) {
    const [u, ...rest] = atob(encoded).split(":");
    if (u === user && rest.join(":") === pass) return NextResponse.next();
  }
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="FalconAI Admin"' },
  });
}

export const config = { matcher: ["/admin/:path*"] };
