import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Sapulpa & Tulsa Handyman`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.shortDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  keywords: [
    "handyman Sapulpa",
    "handyman Tulsa",
    "Broken Arrow handyman",
    "Bixby handyman",
    "Jenks handyman",
    "Glenpool handyman",
    "Sand Springs handyman",
    "home repair Oklahoma",
    "electrical plumbing drywall painting",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | Sapulpa & Tulsa Handyman`,
    description: SITE.shortDescription,
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — locally owned, fully insured handyman in Sapulpa, OK`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Sapulpa & Tulsa Handyman`,
    description: SITE.shortDescription,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: "home services",
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-body flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <JsonLd data={organizationSchema()} id="org-schema" />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobilePhoneBar />
      </body>
    </html>
  );
}
