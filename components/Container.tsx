import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
}) {
  return <As className={cn("mx-auto w-full max-w-7xl px-6", className)}>{children}</As>;
}
