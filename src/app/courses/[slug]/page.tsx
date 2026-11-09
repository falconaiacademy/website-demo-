import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";
import { courses, getCourse } from "@/data/courses";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourse((await params).slug);
  return course ? { title: course.title, description: course.summary } : {};
}

export default async function CoursePage({ params }: Props) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[1fr_360px]">
      <article>
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-1 text-slate-500">
          {course.level} · {course.duration}
        </p>
        <p className="mt-4 text-lg text-slate-700">{course.summary}</p>

        {course.audience && (
          <>
            <h2 className="mt-8 text-xl font-semibold">Who it's for</h2>
            <p className="mt-3 text-slate-700">{course.audience}</p>
          </>
        )}
        {course.prerequisites && (
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {course.prerequisites.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}

        <h2 className="mt-8 text-xl font-semibold">What you'll learn</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {course.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Curriculum</h2>
        {course.modules ? (
          <div className="mt-3 space-y-3">
            {course.modules.map((m, i) => (
              <details key={m.title} className="rounded-md border border-slate-200 p-3" open={i === 0}>
                <summary className="cursor-pointer font-medium">
                  {i + 1}. {m.title}
                </summary>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
                  {m.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        ) : (
          <ol className="mt-3 list-decimal space-y-1 pl-5">
            {course.curriculum.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ol>
        )}
      </article>

      <aside className="h-fit rounded-lg border border-slate-200 p-5">
        <h2 className="mb-4 text-lg font-semibold">Register</h2>
        <RegisterForm
          courses={courses.map(({ slug, title }) => ({ slug, title }))}
          defaultCourse={course.slug}
        />
      </aside>
    </div>
  );
}
