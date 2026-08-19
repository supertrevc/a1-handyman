import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How A-1 Handyman Services LLC collects, uses, and protects your personal information when you contact us or browse our website.",
  alternates: { canonical: "/privacy" },
  // Inherits the root layout's robots, which is driven by SITE_SEARCH_VISIBILITY.
  // Hardcoding index here overrode it and made this page claim to be indexable
  // while the rest of the prospect demo was noindex.
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="January 1, 2026"
      breadcrumb={{ name: "Privacy", href: "/privacy" }}
    >
      <p>
        {SITE.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
        privacy. This Privacy Policy explains what information we collect, how we use it, and
        the choices you have. By using this website or contacting us, you agree to the practices
        described below.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect information you give us directly — for example, your name, phone number,
        email address, the service area you live in, and details about a job — when you
        complete a contact form, call us, text us, or email us. We may also collect basic
        technical information automatically, such as your IP address, browser type, pages
        visited, and the date and time of your visit.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to estimate requests, schedule work, and complete jobs.</li>
        <li>To communicate with you about service appointments, follow-ups, and invoices.</li>
        <li>To comply with applicable law and to protect our legitimate business interests.</li>
        <li>To improve our website, marketing, and customer service.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell or rent your personal information. We may share information with trusted
        service providers who help us operate our business (for example, our website host,
        email provider, or invoicing software) under reasonable confidentiality protections.
        We may also disclose information when required by law, court order, or to protect our
        rights, property, or safety, or the rights, property, or safety of others.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        Our website may use cookies and similar technologies to remember preferences and
        understand how visitors use the site. You can disable cookies in your browser
        settings. See our <a href="/cookies">Cookie Notice</a> for more detail.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your information only as long as we reasonably need it for the purposes
        described above, to comply with our legal and accounting obligations, and to resolve
        disputes.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect the personal information we collect, but no method
        of transmission over the internet or method of electronic storage is 100% secure.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        This website is not directed at children under 13, and we do not knowingly collect
        personal information from children under 13. If you believe a child has provided us
        with personal information, please contact us so we can remove it.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to confirm what personal information we have about you, correct it, or
        delete it. To make a request, email us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        &quot;Last updated&quot; date above. Continued use of the site after a change indicates
        acceptance of the updated policy.
      </p>

      <h2>Governing law</h2>
      <p>
        This Privacy Policy is governed by the laws of the State of Oklahoma, United States,
        without regard to its conflict of law principles.
      </p>

      <h2>Contact us</h2>
      <p>
        {SITE.legalName}
        <br />
        {SITE.city}, {SITE.region} {SITE.postalCode}
        <br />
        <a href={SITE.phoneHref}>{SITE.phone}</a>
        <br />
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </LegalLayout>
  );
}
