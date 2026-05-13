import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SITE, BLOG_POSTS } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Handyman Tips & Guides for Oklahoma Homes",
  description:
    "Practical advice from a Sapulpa handyman: water heaters, electrical issues, sprinkler winterization, and other things that keep your house running.",
  alternates: { canonical: "/blog" },
  openGraph: { url: `${SITE.url}/blog` },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  Plumbing: "bg-navy text-white",
  Electrical: "bg-amber text-navy-900",
  Sprinklers: "bg-red text-white",
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              From the shop
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              Handyman tips for Oklahoma homes.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              Straight-talk advice on the things we get called about most. No fluff, no
              affiliate links — just what we tell our neighbors when they ask.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn as="li" key={post.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-xl"
                  >
                    <div className="aspect-[16/9] w-full bg-gradient-to-br from-navy via-navy-700 to-navy-900 relative">
                      <span
                        className={`absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                          CATEGORY_COLORS[post.category] ?? "bg-navy text-white"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="absolute inset-0 grid place-items-center text-white/30 text-sm font-semibold">
                        A-1 Handyman
                      </span>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold text-ink leading-snug">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-red transition-colors focus-visible:outline-none"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-body leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-muted">A-1 Handyman Team</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-red hover:gap-2 transition-all"
                      >
                        Read post
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Skip the DIY and call us instead."
        body="Reading is great. Sometimes you just want someone to come do it right. We're here when you're ready."
      />
    </>
  );
}
