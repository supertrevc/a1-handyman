"use client";

import { ChevronDown } from "lucide-react";
import { useState, useId } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line rounded-xl border border-line bg-white shadow-sm">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </ul>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <li>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-inset"
      >
        <span className="font-display text-lg font-semibold text-ink">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-navy transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!isOpen}
        className="px-6 pb-6 text-body leading-relaxed"
      >
        {item.a}
      </div>
    </li>
  );
}
