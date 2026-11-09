import { site, whatsappLink } from "@/data/site";

export const metadata = { title: "Contact us" };

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Get in touch</h1>
      <p className="mt-2 text-slate-600">The fastest way to reach us is WhatsApp.</p>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-md bg-green-500 px-6 py-3 font-medium text-white hover:bg-green-600"
      >
        Chat on WhatsApp · {site.whatsappDisplay}
      </a>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {site.addresses.map((a) => (
          <div key={a.label} className="rounded-lg border border-slate-200 p-5">
            <h2 className="font-semibold">{a.label}</h2>
            <address className="mt-2 text-slate-700 not-italic">
              {a.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
        ))}
      </div>
    </div>
  );
}
