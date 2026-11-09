import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
import { courses } from "@/data/courses";
import { faqs, features, site, steps, whatsappLink } from "@/data/site";

export default function Home() {
  const options = courses.map(({ slug, title }) => ({ slug, title }));

  return (
    <>
      {/* Hero + registration form */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              The AI program that makes you{" "}
              <span className="text-sky-400">industry-ready.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Live, mentor-led AI courses built around real projects. Pick a course, register in a
              minute, and we will take it from there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#apply"
                className="rounded-md bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-600"
              >
                Register now
              </Link>
              <Link
                href="#courses"
                className="rounded-md border border-slate-500 px-6 py-3 font-medium hover:border-white"
              >
                Browse courses
              </Link>
            </div>
          </div>

          <div id="apply" className="scroll-mt-24 rounded-xl bg-white p-6 text-slate-900 shadow-xl">
            <h2 className="text-2xl font-bold">Register your interest</h2>
            <p className="mb-5 mt-1 text-sm text-slate-600">
              Takes about a minute. No payment needed. We'll get in touch with next steps.
            </p>
            <RegisterForm courses={options} />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-16">
        <h2 className="text-3xl font-bold">Our programs</h2>
        <p className="mt-2 text-slate-600">Choose the program that fits where you want to go.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Link
              key={c.slug}
              href={`/courses/${c.slug}`}
              className="flex flex-col rounded-lg border border-slate-200 p-5 transition hover:border-sky-600 hover:shadow"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {c.level} · {c.duration}
              </p>
              <p className="mt-3 flex-1 text-slate-700">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-sky-50 px-2 py-0.5 text-xs text-sky-800">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-4 text-sm font-medium text-sky-700">View program details →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-20">
        <h2 className="text-3xl font-bold">Why learn with {site.name}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg bg-slate-50 p-5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="text-3xl font-bold">How it works</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-slate-200 p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-700 font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 pt-20">
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-md border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="rounded-xl bg-sky-700 px-6 py-10 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to start learning AI?</h2>
          <p className="mt-2 text-sky-100">Register in a minute, or talk to us on WhatsApp.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="#apply" className="rounded-md bg-white px-6 py-3 font-medium text-sky-800 hover:bg-sky-50">
              Register now
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white px-6 py-3 font-medium hover:bg-sky-800"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
