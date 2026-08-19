import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SEARCH_VISIBILITY } from "@/lib/search-visibility.mjs";

/**
 * robots.txt, driven by SITE_SEARCH_VISIBILITY — see
 * src/lib/search-visibility.mjs for the three modes.
 *
 * Note that robots.txt is deliberately NOT the thing keeping this site out of
 * search. Blocking the crawl and asking to be de-indexed are opposite requests:
 * a crawler that is refused the page can never read the noindex on it, so a URL
 * Google already knows about stays listed. The noindex meta tag plus the
 * X-Robots-Tag header do the real work; robots.txt only stops the crawl traffic
 * once there is nothing left to remove.
 */
export default function robots(): MetadataRoute.Robots {
  // Launched, client-purchased site: crawl and index normally.
  if (SEARCH_VISIBILITY === "public") {
    return {
      rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
      sitemap: `${SITE.url}/sitemap.xml`,
      host: SITE.url,
    };
  }

  // Hard lockdown. Correct only once Google has already dropped the site —
  // see the warning in src/lib/search-visibility.mjs before switching to this.
  if (SEARCH_VISIBILITY === "blocked") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  // Default: let crawlers fetch, so they read the noindex and drop us. No
  // sitemap is advertised — a sitemap is an explicit invitation to index.
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }] };
}
