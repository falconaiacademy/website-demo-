import { query } from "@/lib/db";
import { getCourse } from "@/data/courses";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin", robots: { index: false } };

type Row = {
  id: number;
  name: string;
  email: string;
  phone: string;
  college: string | null;
  course_slug: string;
  created_at: string;
};

export default async function Admin() {
  const rows = (await query(
    "SELECT id, name, email, phone, college, course_slug, created_at FROM registrations ORDER BY created_at DESC LIMIT 500",
  )) as Row[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-4 text-2xl font-bold">Registrations ({rows.length})</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-300 text-slate-600">
            <tr>
              {["When", "Name", "Email", "Phone", "College", "Course"].map((h) => (
                <th key={h} className="px-2 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-slate-100">
                <td className="px-2 py-2 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                <td className="px-2 py-2">{r.name}</td>
                <td className="px-2 py-2">{r.email}</td>
                <td className="px-2 py-2">{r.phone}</td>
                <td className="px-2 py-2">{r.college ?? "-"}</td>
                <td className="px-2 py-2">{getCourse(r.course_slug)?.title ?? r.course_slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="py-6 text-slate-500">No registrations yet.</p>}
      </div>
    </div>
  );
}
