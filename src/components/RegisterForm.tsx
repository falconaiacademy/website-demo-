"use client";

import { useState } from "react";

type Option = { slug: string; title: string };

export default function RegisterForm({
  courses,
  defaultCourse,
}: {
  courses: Option[];
  defaultCourse?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus("done");
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-900">
        Thanks for registering! We'll be in touch soon.
      </div>
    );
  }

  const field = "w-full rounded-md border border-slate-300 px-3 py-2 focus:border-sky-600 focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Full name *</label>
        <input name="name" required minLength={2} className={field} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Email *</label>
        <input name="email" type="email" required className={field} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Phone *</label>
        <input name="phone" type="tel" required className={field} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">College / company</label>
        <input name="college" className={field} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Course *</label>
        <select name="course" required defaultValue={defaultCourse ?? ""} className={field}>
          <option value="" disabled>
            Select a course
          </option>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </div>
      {/* Honeypot: hidden from humans */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-sky-700 px-5 py-2 font-medium text-white hover:bg-sky-800 disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}
