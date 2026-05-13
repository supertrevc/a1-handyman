import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  CalendarCheck,
  CheckCircle2,
  PhoneCall,
  ClipboardCheck,
  Hammer,
  Quote,
  Sparkles,
} from "lucide-react";
import { SITE, SERVICES, FAQS, TESTIMONIALS, STATS } from "@/lib/site";
import { Accordion } from "@/components/Accordion";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FadeIn } from "@/components/FadeIn";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sapulpa & Tulsa Handyman | Insured, Local, On Time",
  description:
    "A-1 Handyman Services LLC: locally owned, fully insured Sapulpa handyman serving Tulsa, BA, Bixby, Jenks & more. Free estimates. Call (918) 949-8890.",
  alternates: { canonical: "/" },
};

const TRUST_BAR = [
  { icon: MapPin, label: "Locally Owned" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "5★ Reviews" },
  { icon: CheckCircle2, label: "Free Estimates" },
  { icon: CalendarCheck, label: "Same-Week Service" },
];

const STEPS = [
  {
    icon: PhoneCall,
    title: "Call or Text",
    body: "Tell us what's going on. We'll either give you a price on the phone or set a time to come look.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Estimate",
    body: "Flat, honest pricing in plain English. No pressure to decide on the spot — take your time.",
  },
  {
    icon: Hammer,
    title: "Done Right",
    body: "We show up when we said we would, clean up when we're finished, and stand behind the work.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} id="localbusiness-schema" />
      <JsonLd data={faqSchema()} id="faq-schema" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_right,_var(--color-navy)_0,_transparent_55%)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber-50 px-3 py-1 text-xs font-semibold text-navy-900">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Booking same-week in Sapulpa, Tulsa & Green Country
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                The handyman who actually <span className="text-red">shows up</span> when he says
                he will.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-body">
                A-1 Handyman Services LLC is locally owned and fully insured. From a sticking door
                to a new water heater, Justin and the crew handle the work most contractors
                won&apos;t — quickly, cleanly, and at a fair price.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red px-7 py-4 text-lg font-bold text-white shadow-md hover:bg-red-700 active:translate-y-px transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/20 bg-white px-6 py-4 text-base font-semibold text-navy shadow-sm hover:border-navy/50 hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  Request Free Estimate
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {SITE.hoursHuman}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-amber/20"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
                  <div className="aspect-[4/5] w-full bg-gradient-to-br from-navy via-navy-700 to-navy-900 grid place-items-center text-white p-10">
                    <div className="text-center">
                      <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber text-navy-900 shadow-lg">
                        <Hammer className="h-10 w-10" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-2xl font-bold font-display leading-snug">
                        Justin&apos;s on the way.
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        Real text updates · No four-hour windows
                      </p>
                      <dl className="mt-8 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-lg bg-white/10 px-3 py-3">
                          <dt className="text-[10px] uppercase tracking-wider text-white/70">Rating</dt>
                          <dd className="mt-1 text-xl font-bold">5.0★</dd>
                        </div>
                        <div className="rounded-lg bg-white/10 px-3 py-3">
                          <dt className="text-[10px] uppercase tracking-wider text-white/70">Insured</dt>
                          <dd className="mt-1 text-xl font-bold">Yes</dd>
                        </div>
                        <div className="rounded-lg bg-white/10 px-3 py-3">
                          <dt className="text-[10px] uppercase tracking-wider text-white/70">Local</dt>
                          <dd className="mt-1 text-xl font-bold">100%</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section aria-label="Why homeowners trust us" className="border-y border-line bg-soft">
        <div className="mx-auto w-full max-w-7xl px-6 py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-navy">
            {TRUST_BAR.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-red" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem / solution */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-red">
                Tired of the runaround?
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
                No-show contractors are exhausting. We&apos;re the opposite of that.
              </h2>
              <p className="mt-5 text-lg text-body">
                You shouldn&apos;t have to leave three voicemails to get someone out to tighten a
                handrail. A-1 Handyman picks up the phone, gives you a real quote, and shows up
                with the right tools — usually within a few days, not a few weeks.
              </p>
              <ul className="mt-7 space-y-3 text-body">
                {[
                  "A real person answers — usually Justin himself.",
                  "Quotes you can actually rely on. No “starting at” bait.",
                  "A clean worksite when we leave. Always.",
                  "Honest about what we don't do, and who to call if we can't.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red mt-0.5" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-line bg-soft p-8 md:p-10 shadow-sm">
                <div className="flex items-start gap-4">
                  <Quote className="h-10 w-10 text-amber shrink-0" aria-hidden="true" />
                  <blockquote className="text-xl md:text-2xl font-display text-ink leading-snug">
                    “The first guy ghosted. The second guy quoted me three times what Justin did.
                    He came the same week, did the work for the price he said, and even fixed two
                    other little things while he was here.”
                  </blockquote>
                </div>
                <p className="mt-6 text-sm font-semibold text-navy">— Christine H., Broken Arrow</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-soft py-20 md:py-28" id="services">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              One call covers most of your honey-do list.
            </h2>
            <p className="mt-5 text-lg text-body">
              Real handyman work — done by experienced hands. Not sure if your job fits? Call us.
              We&apos;ll tell you straight.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeIn as="li" key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-navy/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-body">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red">
                    See typical jobs
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              Three steps. No surprises.
            </h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeIn as="li" key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-xl border border-line bg-white p-8 shadow-sm">
                  <span className="absolute -top-4 left-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber text-navy-900 font-display font-bold text-base shadow-sm">
                    {i + 1}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red/10 text-red">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-body">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-900 py-20 md:py-28 text-white">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              What neighbors say
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl text-white">
              Word of mouth is how we&apos;ve grown.
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn as="li" key={t.name} delay={i * 0.08}>
                <article className="h-full rounded-xl bg-white/5 border border-white/10 p-7 backdrop-blur">
                  <div className="flex items-center gap-1 text-amber" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-white/90 leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <footer className="mt-5 text-sm font-semibold text-amber">
                    {t.name} <span className="font-normal text-white/60">— {t.city}</span>
                  </footer>
                </article>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-soft py-14">
        <div className="mx-auto w-full max-w-7xl px-6">
          <dl className="grid grid-cols-2 gap-y-8 sm:gap-y-0 sm:grid-cols-4 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="px-4">
                <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-navy">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              Frequently asked
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              Honest answers, up front.
            </h2>
            <p className="mt-5 text-lg text-body">
              Still wondering about something? Just call — we don&apos;t mind questions.
            </p>
          </div>
          <div className="mt-12">
            <Accordion items={[...FAQS]} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
