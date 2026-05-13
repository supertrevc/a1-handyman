import Link from "next/link";
import { Phone, Mail, Clock, MessageCircle, Camera, Star, Wrench } from "lucide-react";
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white pb-24 lg:pb-0">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white"
              aria-label={`${SITE.name} home`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-navy-900">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">A-1 Handyman</span>
            </Link>
            <p className="mt-4 text-sm text-white/75 max-w-xs">
              Locally owned, fully insured handyman serving Sapulpa, Tulsa, and all of Green
              Country. Showing up on time and doing it right since {SITE.founded}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SITE.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SITE.social.google}
                aria-label="Google Business"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                <Star className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Service Areas
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-white/75">
              {SERVICE_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href="/service-areas"
                    className="hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-start gap-2 hover:text-amber transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-start gap-2 hover:text-amber transition-colors break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-white/75">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{SITE.hoursHuman}</span>
              </li>
            </ul>
            <h3 className="mt-7 text-sm font-bold uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/about" className="hover:text-amber transition-colors">About</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p>
            © {year} {SITE.legalName}. All rights reserved. Fully insured · Sapulpa, Oklahoma.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li><Link href="/privacy" className="hover:text-amber transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-amber transition-colors">Terms</Link></li>
            <li><Link href="/cookies" className="hover:text-amber transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
