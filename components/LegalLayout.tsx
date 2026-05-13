import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function LegalLayout({
  title,
  updated,
  breadcrumb,
  children,
}: {
  title: string;
  updated: string;
  breadcrumb: { name: string; href: string };
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto w-full max-w-4xl px-6 pt-12 pb-12 md:pt-16 md:pb-14">
          <Breadcrumbs items={[breadcrumb]} />
          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            {title}
          </h1>
          <p className="mt-3 text-sm text-white/70">Last updated: {updated}</p>
        </div>
      </section>
      <article className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="prose-post">{children}</div>
        </div>
      </article>
    </>
  );
}
