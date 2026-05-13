import {
  Wrench,
  Plug,
  Droplets,
  PaintRoller,
  Sprout,
  Hammer,
  Clock,
  BadgeDollarSign,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Wrench,
  Plug,
  Droplets,
  PaintRoller,
  Sprout,
  Hammer,
  Clock,
  BadgeDollarSign,
  ShieldCheck,
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
