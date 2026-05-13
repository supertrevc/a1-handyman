import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact A-1 Handyman — Sapulpa & Tulsa, OK",
  description:
    "Call (918) 949-8890 for a free handyman estimate in Sapulpa, Tulsa, BA, Bixby, Jenks, Glenpool, Sand Springs, Kiefer, Mounds, or Bristow.",
  alternates: { canonical: "/contact" },
  openGraph: { url: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              Get in touch
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              Let&apos;s get your project on the calendar.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              The fastest way to reach us is the phone. Or send a few details below and
              we&apos;ll get back to you within one business day.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-amber px-7 py-5 text-2xl font-extrabold text-navy-900 shadow-lg hover:brightness-95 active:translate-y-px transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              <Phone className="h-7 w-7" aria-hidden="true" />
              {SITE.phone}
            </a>
            <p className="mt-3 text-sm text-white/70">{SITE.hoursHuman}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Request a free estimate
            </h2>
            <p className="mt-2 text-body">
              No commitment, no high-pressure follow-ups. Just a real quote from a real person.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-line bg-soft p-7">
              <h2 className="font-display text-xl font-bold text-ink">Reach us directly</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red text-white shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Call or text
                    </p>
                    <a href={SITE.phoneHref} className="text-lg font-bold text-navy hover:text-red transition">
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-lg font-bold text-navy hover:text-red transition break-all"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-navy-900 shrink-0">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Hours
                    </p>
                    <p className="text-base text-ink">Mon–Sat · 9:00 AM – 5:00 PM</p>
                    <p className="text-sm text-muted">Closed Sundays</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Based in
                    </p>
                    <p className="text-base text-ink">Sapulpa, Oklahoma</p>
                    <p className="text-sm text-muted">
                      Serving Tulsa, Broken Arrow, Bixby, Jenks, Glenpool, Sand Springs,
                      Kiefer, Mounds, and Bristow.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber/40 bg-amber-50 p-7">
              <p className="font-display text-lg font-bold text-navy-900">
                Got a leak or no power right now?
              </p>
              <p className="mt-2 text-body">
                Don&apos;t wait on the form — pick up the phone. Same-day calls always get
                priority when we can swing it.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-red-700 transition"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
