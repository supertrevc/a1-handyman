import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/site";

// Approximate visual positions for a stylized Green Country map placeholder.
// Coordinates are percentages on a 100x100 grid — values picked to roughly
// reflect the relative location of each city around Sapulpa.
const POSITIONS: Record<string, { x: number; y: number }> = {
  sapulpa: { x: 32, y: 60 },
  tulsa: { x: 52, y: 42 },
  "broken-arrow": { x: 70, y: 58 },
  bixby: { x: 62, y: 72 },
  jenks: { x: 50, y: 64 },
  glenpool: { x: 42, y: 74 },
  kiefer: { x: 30, y: 78 },
  mounds: { x: 36, y: 86 },
  "sand-springs": { x: 32, y: 34 },
  bristow: { x: 14, y: 76 },
};

export function ServiceAreasMap() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-navy-50 via-white to-amber-50 shadow-sm">
      <div className="aspect-[16/10] relative">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full text-navy/15"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
            <path
              id="river"
              d="M -2 22 Q 18 30 32 38 T 64 50 T 102 62"
              fill="none"
            />
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          <use href="#river" stroke="#1e3a5f" strokeOpacity="0.18" strokeWidth="2" fill="none" />
          <use href="#river" stroke="#c9442c" strokeOpacity="0.12" strokeWidth="0.6" fill="none" strokeDasharray="2 2" />
        </svg>

        <ul className="absolute inset-0">
          {SERVICE_AREAS.map((a) => {
            const pos = POSITIONS[a.slug] ?? { x: 50, y: 50 };
            const isHome = a.slug === "sapulpa";
            return (
              <li
                key={a.slug}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div className="group flex flex-col items-center">
                  <div
                    className={`rounded-lg px-2 py-1 text-[11px] font-bold shadow-sm border ${
                      isHome
                        ? "bg-amber text-navy-900 border-amber/60"
                        : "bg-white text-navy border-line"
                    }`}
                  >
                    {a.name}
                    {isHome ? " · HQ" : ""}
                  </div>
                  <MapPin
                    className={`mt-1 h-5 w-5 ${isHome ? "text-amber" : "text-red"}`}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-3 right-4 rounded-md bg-white/80 px-2 py-1 text-[10px] font-semibold text-navy backdrop-blur">
          Green Country, OK
        </div>
      </div>
    </div>
  );
}
