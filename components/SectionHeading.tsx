import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red">
          {eyebrow}
        </p>
      ) : null}
      <As className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">{title}</As>
      {description ? (
        <p className="mt-5 text-lg text-body">{description}</p>
      ) : null}
    </div>
  );
}
