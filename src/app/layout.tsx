import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: { default: `${site.name} - AI training courses`, template: `%s | ${site.name}` },
  description: "Practical AI training courses. Browse the catalog and register.",
};

const nav = [
  { href: "/#courses", label: "Courses" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-sky-800">
              {site.name}
            </Link>
            <div className="flex items-center gap-5 text-sm">
              <div className="hidden gap-5 sm:flex">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className="text-slate-600 hover:text-sky-800">
                    {n.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/#apply"
                className="rounded-md bg-sky-700 px-4 py-2 font-medium text-white hover:bg-sky-800"
              >
                Register
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 bg-slate-900 text-slate-300">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-white">{site.name}</p>
              <p className="mt-2 text-sm">Practical AI training, taught by practitioners.</p>
              <a href={whatsappLink()} className="mt-3 inline-block text-sm text-sky-300 hover:underline">
                WhatsApp: {site.whatsappDisplay}
              </a>
            </div>
            {site.addresses.map((a) => (
              <div key={a.label}>
                <p className="font-semibold text-white">{a.label}</p>
                <address className="mt-2 text-sm not-italic">
                  {a.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {site.name} ·{" "}
            <Link href="/privacy" className="underline">
              Privacy
            </Link>
          </div>
        </footer>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-medium text-white shadow-lg hover:bg-green-600"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M12 2C6.5 2 2 6.2 2 11.5c0 2.2.8 4.200 2.100 5.800L3 22l5-1.800c1.200.5 2.600.8 4 .8 5.500 0 10-4.200 10-9.500S17.500 2 12 2z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp us</span>
        </a>
      </body>
    </html>
  );
}
