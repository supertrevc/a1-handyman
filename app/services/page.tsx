import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FadeIn } from "@/components/FadeIn";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Handyman Services in Sapulpa & Tulsa",
  description:
    "From general repairs and electrical to plumbing, drywall, sprinklers, and assembly — see what A-1 Handyman handles for homeowners across Green Country.",
  alternates: { canonical: "/services" },
  openGraph: { url: `${SITE.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              Services
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              Everything on your honey-do list — and most of what isn&apos;t.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              A real-deal handyman covers a lot of ground. Here&apos;s what we book most weeks,
              with a few real examples of how the work goes. Not seeing your project? Call us —
              we&apos;ve probably done it.
            </p>
          </div>
        </div>
      </section>

      {/* Anchor nav */}
      <section className="border-b border-line bg-white sticky top-16 lg:top-20 z-20 backdrop-blur bg-white/90">
        <div className="mx-auto w-full max-w-7xl px-6 py-3 overflow-x-auto">
          <ul className="flex items-center gap-2 whitespace-nowrap">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-body hover:bg-navy-50 hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  <ServiceIcon name={s.icon} className="h-4 w-4 text-red" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service sections */}
      <div className="py-16 md:py-24">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.slug} as="section" className="scroll-mt-32">
            <article
              id={s.slug}
              className={`py-14 md:py-20 ${i % 2 === 1 ? "bg-soft" : ""}`}
            >
              <div className="mx-auto w-full max-w-7xl px-6 grid gap-12 lg:grid-cols-12 items-start">
                <div className="lg:col-span-5">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-red text-white shadow-sm">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-bold text-ink sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-body">{s.long}</p>
                  <div className="mt-6 rounded-xl border border-line bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-red">
                      From a real call
                    </p>
                    <p className="mt-2 text-body leading-relaxed">{s.caseStudy}</p>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="font-display text-xl font-bold text-ink">
                    Typical jobs in this category
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.jobs.map((j) => (
                      <li key={j} className="flex items-start gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-red mt-0.5" aria-hidden="true" />
                        <span className="text-body">{j}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-red px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call about {s.title.toLowerCase()}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-red transition"
                    >
                      Or request a quote
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <CtaBand
        title="Got a project you're not sure about?"
        body="If you can describe it, we can usually quote it. Call Justin and we'll talk it through — no commitment, no pressure."
      />
    </>
  );
}
