import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { ServiceAreasMap } from "@/components/ServiceAreasMap";
import { FadeIn } from "@/components/FadeIn";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service Areas: Sapulpa, Tulsa & Green Country",
  description:
    "We serve Sapulpa, Tulsa, Broken Arrow, Bixby, Jenks, Glenpool, Sand Springs, Kiefer, Mounds, and Bristow. A real handyman covering Green Country.",
  alternates: { canonical: "/service-areas" },
  openGraph: { url: `${SITE.url}/service-areas` },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              Where we work
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              Serving Sapulpa, Tulsa & all of Green Country.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              We&apos;re based in Sapulpa and book jobs across ten cities in the Tulsa metro.
              If you&apos;re close to one of these — call. We&apos;ll come take a look.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 grid gap-12 lg:grid-cols-12 items-start">
          <FadeIn className="lg:col-span-7">
            <ServiceAreasMap />
            <p className="mt-3 text-xs text-muted">
              Map is for illustration only and isn&apos;t a strict service boundary — call us if
              you&apos;re near these towns and we&apos;ll let you know.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Same handyman. Same standard. Ten cities.
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              We don&apos;t farm work out to subcontractors and we don&apos;t pad miles into the
              bill. Travel is built into honest, flat-rate pricing — so wherever you are on the
              map below, you get the same Sapulpa-grown handyman service.
            </p>
            <ul className="mt-6 space-y-3 text-body">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red shrink-0" aria-hidden="true" />
                <span>Based in Sapulpa, Oklahoma — most jobs scheduled same week.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red shrink-0" aria-hidden="true" />
                <span>Covering ten cities across the Tulsa metro and Creek County.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red shrink-0" aria-hidden="true" />
                <span>Just outside our list? Give a call — we say yes when we can.</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Cities we serve
          </h2>
          <p className="mt-3 text-body max-w-2xl">
            A quick note on each town — what we usually book, and how to think about scheduling.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area, i) => (
              <FadeIn as="li" key={area.slug} delay={i * 0.04}>
                <article className="h-full rounded-xl border border-line bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {area.name}, OK
                    </h3>
                  </div>
                  <p className="mt-4 text-body leading-relaxed">{area.blurb}</p>
                </article>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Live nearby? Let's talk."
        body="We're a quick drive from most of Tulsa, Creek, and Wagoner counties. Call (918) 949-8890 — Justin or someone he trained will pick up."
      />
    </>
  );
}
