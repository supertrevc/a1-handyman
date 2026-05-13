import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { SITE, BLOG_POSTS } from "@/lib/site";
import { POST_BODIES, POST_DESCRIPTIONS } from "@/lib/blog-content";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema } from "@/lib/schema";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const description = POST_DESCRIPTIONS[post.slug] ?? post.excerpt;
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      publishedTime: post.date,
      authors: [`${SITE.name} Team`],
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = POST_BODIES[post.slug];
  const description = POST_DESCRIPTIONS[post.slug] ?? post.excerpt;
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description,
          slug: post.slug,
          date: post.date,
        })}
        id="blogposting-schema"
      />

      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-4xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <div className="mt-8">
            <span className="inline-flex items-center rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy-900">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
              <span>By A-1 Handyman Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-3xl px-6">
          <p className="text-lg text-body font-medium leading-relaxed">{post.excerpt}</p>
          <div className="prose-post mt-10 max-w-prose">{body}</div>

          <div className="mt-14 rounded-2xl border border-line bg-soft p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-red">
              From a real Sapulpa shop
            </p>
            <p className="mt-2 font-display text-xl font-bold text-ink">
              Want this done instead of done yourself?
            </p>
            <p className="mt-2 text-body">
              We&apos;ll quote it free and usually have you on the schedule within the week.
              Call {SITE.phone} or send us a note.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
              >
                Request a Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-navy/20 bg-white px-5 py-3 text-base font-semibold text-navy hover:border-navy/40 transition"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-red transition"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-soft py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="font-display text-2xl font-bold text-ink">More from the shop</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {otherPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-red">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-red transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-body">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
