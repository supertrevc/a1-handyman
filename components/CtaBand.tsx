import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaBand({
  title = "Need something fixed this week?",
  body = "Call Justin direct or send a quick note about the job. Free estimates, locally insured, and you'll talk to a real person every time.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative bg-navy-900 text-white">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--color-amber)_0%,_transparent_55%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-white">{title}</h2>
          <p className="mt-5 text-lg text-white/85">{body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-7 py-4 text-lg font-bold text-navy-900 shadow-md hover:brightness-95 active:translate-y-px transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-base font-semibold text-white hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Request Free Estimate
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/70">{SITE.hoursHuman}</p>
        </div>
      </div>
    </section>
  );
}
