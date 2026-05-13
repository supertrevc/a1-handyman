import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const schemaItems = all.map((it) => ({
    name: it.name,
    url: `${SITE.url}${it.href === "/" ? "" : it.href}`,
  }));
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        {all.map((it, i) => {
          const last = i === all.length - 1;
          return (
            <li key={it.href} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-ink">{it.name}</span>
              ) : (
                <Link
                  href={it.href}
                  className="hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded"
                >
                  {it.name}
                </Link>
              )}
              {!last ? (
                <ChevronRight className="h-3.5 w-3.5 text-muted/60" aria-hidden="true" />
              ) : null}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
    </nav>
  );
}
