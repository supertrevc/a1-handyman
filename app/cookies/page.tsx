import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "How A-1 Handyman Services LLC uses cookies and similar technologies on this website, and how you can control them.",
  alternates: { canonical: "/cookies" },
  // Inherits the root layout's robots, which is driven by SITE_SEARCH_VISIBILITY.
  // Hardcoding index here overrode it and made this page claim to be indexable
  // while the rest of the prospect demo was noindex.
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Notice"
      updated="January 1, 2026"
      breadcrumb={{ name: "Cookies", href: "/cookies" }}
    >
      <p>
        This Cookie Notice explains how {SITE.legalName} uses cookies and similar technologies
        on this website. Read together with our <a href="/privacy">Privacy Policy</a>, it lets
        you understand what we collect through cookies and how you can control it.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files that a website saves on your computer, phone, or tablet
        when you visit. They&apos;re used to remember information about you and your visit —
        for example, your preferred language or whether you&apos;ve closed a banner.
      </p>

      <h2>Types of cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies.</strong> These are required for the website to
          function correctly — for example, to remember items in a contact form during your
          visit.
        </li>
        <li>
          <strong>Performance and analytics cookies.</strong> These help us understand how
          visitors use the site (which pages are popular, where errors occur). The information
          is aggregated and does not identify you personally.
        </li>
        <li>
          <strong>Functionality cookies.</strong> These remember preferences you set, like
          your service area or the last form you started.
        </li>
      </ul>

      <h2>Third-party services</h2>
      <p>
        We do not currently run third-party advertising on this site. If we add analytics
        tools in the future (such as Google Analytics or a privacy-friendly alternative), this
        notice will be updated to reflect the change and the cookies they set.
      </p>

      <h2>How to control cookies</h2>
      <p>
        Most browsers let you refuse or delete cookies through their settings. Helpful guides:
      </p>
      <ul>
        <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
        <li>Safari: Preferences → Privacy</li>
        <li>Firefox: Settings → Privacy &amp; Security</li>
        <li>Edge: Settings → Cookies and site permissions</li>
      </ul>
      <p>
        Note that blocking some cookies may affect how the website works. Strictly necessary
        cookies cannot be turned off because the site depends on them.
      </p>

      <h2>Do Not Track</h2>
      <p>
        We honor &quot;Do Not Track&quot; signals from your browser by not loading analytics
        or non-essential cookies when those signals are present.
      </p>

      <h2>Updates to this notice</h2>
      <p>
        We may update this Cookie Notice from time to time. The &quot;Last updated&quot; date
        at the top of the page reflects the most recent revision.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about how we use cookies, contact us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>. {SITE.legalName} is based in {SITE.city},
        Oklahoma.
      </p>
    </LegalLayout>
  );
}
