import type { Metadata } from "next";
import { User, Users } from "lucide-react";
import { SITE, VALUES } from "@/lib/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FadeIn } from "@/components/FadeIn";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Justin & A-1 Handyman",
  description:
    "Meet Justin, the owner of A-1 Handyman Services LLC. Locally owned, fully insured, and working out of Sapulpa for homeowners across Tulsa and Green Country.",
  alternates: { canonical: "/about" },
  openGraph: { url: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              Locally owned · Fully insured
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              A small shop that takes pride in showing up.
            </h1>
            <p className="mt-6 text-lg text-white/85">
              A-1 Handyman Services LLC is a family-rooted, Sapulpa-based business. Justin started
              it after years of doing other people&apos;s callbacks — and decided to do it right
              instead.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 grid gap-14 lg:grid-cols-12 items-start">
          <FadeIn className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Built on the kind of work neighbors recommend.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-body leading-relaxed">
              <p>
                A-1 Handyman Services started for a simple reason: too many homeowners in
                Sapulpa, Tulsa, and the surrounding towns were getting jerked around by no-shows,
                bait-and-switch quotes, and contractors who didn&apos;t want to be bothered with
                anything &quot;too small.&quot;
              </p>
              <p>
                Justin had been doing repair work for years before he decided to make it his own
                thing. The plan was straightforward — answer the phone, show up when promised,
                quote fairly, and do the work like it&apos;s your own house. Word of mouth
                handled the rest.
              </p>
              <p>
                Today we cover ten cities across Green Country, from Sapulpa to Broken Arrow.
                Most weeks we&apos;re booked from referrals alone. Every job — big or small — gets
                the same care, because that&apos;s the only kind of work we know how to do.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="grid gap-5">
              <div className="rounded-2xl overflow-hidden border border-line bg-gradient-to-br from-navy via-navy-700 to-navy-900 aspect-[4/5] grid place-items-center text-white p-10 shadow-md">
                <div className="text-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber text-navy-900">
                    <User className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-display text-2xl font-bold">Justin</p>
                  <p className="text-sm text-white/70">Owner · Lead Handyman</p>
                  <p className="mt-4 text-sm text-white/80 max-w-xs mx-auto leading-relaxed">
                    Born and raised in Oklahoma. Carries a notepad, not a clipboard. Will tell you
                    if your idea is a bad one.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-line bg-soft aspect-[4/3] grid place-items-center p-8 shadow-sm">
                <div className="text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red/10 text-red">
                    <Users className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <p className="mt-3 font-display text-lg font-bold text-ink">
                    The Crew
                  </p>
                  <p className="text-sm text-muted">A small, trusted team — same standard as the boss.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              How we work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              Four values we don&apos;t bend on.
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <FadeIn as="li" key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-line bg-white p-8 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                    <ServiceIcon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-body">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Why local */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              Why hire local
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              Your neighbors. Not a call center.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-body leading-relaxed">
              <p>
                When you call A-1, you reach Justin or someone he trained. There&apos;s no
                dispatch queue, no franchise scripts, no upsell quota. We live here. Our kids go
                to school here. We see you at the grocery store.
              </p>
              <p>
                Hiring local means the person quoting your job is the person doing it. If
                something isn&apos;t right, we&apos;re a five-minute drive away — not a 1-800
                number that takes two days to call back.
              </p>
              <p>
                Every dollar you spend with us stays in Sapulpa, Tulsa, and the surrounding
                towns. That matters to us. We hope it matters to you too.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-line bg-navy-50 p-10 shadow-sm">
              <p className="font-display text-2xl font-bold text-navy-900 leading-snug">
                &ldquo;The reason most folks who call us once call us back is simple — we treat
                their house the way we&apos;d want someone to treat ours.&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-navy">— Justin, Owner</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
