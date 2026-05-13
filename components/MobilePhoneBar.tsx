import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobilePhoneBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur shadow-[0_-2px_12px_rgba(15,31,51,0.08)] lg:hidden">
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-red hover:bg-red-700 active:translate-y-px transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-inset"
        aria-label={`Call ${SITE.name} at ${SITE.phone}`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span>Tap to Call {SITE.phone}</span>
      </a>
    </div>
  );
}
