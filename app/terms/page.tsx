import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for A-1 Handyman Services LLC, an Oklahoma-licensed handyman business. By using our website, you agree to these terms.",
  alternates: { canonical: "/terms" },
  // Inherits the root layout's robots, which is driven by SITE_SEARCH_VISIBILITY.
  // Hardcoding index here overrode it and made this page claim to be indexable
  // while the rest of the prospect demo was noindex.
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="January 1, 2026"
      breadcrumb={{ name: "Terms", href: "/terms" }}
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the {SITE.legalName}{" "}
        website and any services provided by {SITE.legalName} (&quot;we,&quot; &quot;us,&quot;
        or &quot;our&quot;). By accessing this website or engaging our services, you agree to
        be bound by these Terms.
      </p>

      <h2>Use of the website</h2>
      <p>
        You agree to use this website for lawful purposes only and in a way that does not
        infringe the rights of, restrict, or inhibit anyone else&apos;s use of the website.
        Prohibited behavior includes harassment, posting unlawful content, and disrupting the
        normal operation of the site.
      </p>

      <h2>Estimates and quotes</h2>
      <p>
        Any estimates we provide are good-faith approximations based on the information you
        give us. Final pricing may vary based on conditions discovered on-site, scope changes
        you request, or materials chosen. We will not perform additional work that materially
        increases the cost without your prior approval.
      </p>

      <h2>Scheduling and cancellation</h2>
      <p>
        We do our best to arrive at the agreed-upon time. If a job needs to be rescheduled by
        either party, we ask for as much notice as possible. Cancellations with less than 24
        hours&apos; notice may be subject to a trip fee covering travel and lost scheduling.
      </p>

      <h2>Payment</h2>
      <p>
        Payment is due upon completion of the work unless other arrangements have been made in
        writing. We accept cash, check, and major debit/credit cards. Returned checks are
        subject to applicable fees. Past-due balances may accrue interest at the maximum rate
        permitted by Oklahoma law.
      </p>

      <h2>Warranty and limitation of liability</h2>
      <p>
        We stand behind our workmanship for a period of 30 days following completion of the
        work, except where superseded by a manufacturer&apos;s warranty or a separate written
        agreement. To the fullest extent permitted by law, our total liability for any claim
        arising out of or related to our services is limited to the amount you paid us for the
        specific work that gave rise to the claim. We are not liable for indirect, incidental,
        consequential, or punitive damages.
      </p>

      <h2>Insurance</h2>
      <p>
        {SITE.legalName} carries general liability insurance. A certificate of insurance is
        available upon request before work begins.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this website — including text, graphics, logos, and images — is the
        property of {SITE.legalName} or its licensors and is protected by United States
        copyright and trademark law. You may not reproduce, distribute, or create derivative
        works without our prior written consent.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our website may contain links to third-party websites that we do not control. We are
        not responsible for the content, privacy practices, or terms of any third-party site.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This website and its content are provided &quot;as is&quot; without warranty of any
        kind, express or implied, including but not limited to warranties of merchantability,
        fitness for a particular purpose, or non-infringement.
      </p>

      <h2>Governing law and venue</h2>
      <p>
        These Terms are governed by the laws of the State of Oklahoma, without regard to its
        conflict of law principles. Any dispute arising under these Terms must be brought in
        the state or federal courts located in Creek County or Tulsa County, Oklahoma, and you
        consent to the personal jurisdiction of those courts.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The &quot;Last updated&quot; date above
        will reflect the most recent revision. Your continued use of the website constitutes
        acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </LegalLayout>
  );
}
