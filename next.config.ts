import type { NextConfig } from "next";
import { ROBOTS_TAG } from "./lib/search-visibility.mjs";

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];


/**
 * Sent on every response while this is a private prospect demo — see
 * src/lib/search-visibility.mjs. The <meta name="robots"> tag in the root
 * layout only covers rendered HTML; this covers the rest of the origin (API
 * routes, sitemap.xml, optimized images, anything in /public).
 * Empty once SITE_SEARCH_VISIBILITY=public.
 */
const robotsHeaders = ROBOTS_TAG
  ? [{ key: "X-Robots-Tag", value: ROBOTS_TAG }]
  : [];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
