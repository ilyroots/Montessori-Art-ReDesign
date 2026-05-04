"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Package, Bell, ShoppingBag } from "lucide-react";
import { academyBundles } from "@/config/academyBundles";

export function BundlePlanner() {
  const [notifyList, setNotifyList] = useState<string[]>([]);

  const toggleNotify = (id: string) => {
    setNotifyList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {academyBundles.map((bundle) => {
        const notified = notifyList.includes(bundle.id);
        return (
          <div
            key={bundle.id}
            className="bg-paper border border-linen rounded-card overflow-hidden hover:shadow-card-hover transition-shadow duration-200"
          >
            {bundle.image ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-canvas">
                <Image
                  src={bundle.image}
                  alt={bundle.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-[16/9] w-full bg-canvas flex items-center justify-center">
                <Package size={32} className="text-charcoal/20" />
              </div>
            )}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider text-charcoal/50 font-medium">
                  {bundle.status === "concept" ? "Coming Soon" : bundle.status === "notify-me" ? "Notify Me" : "Available"}
                </span>
                <span className="text-xs text-charcoal/40">{bundle.priceNote}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">{bundle.title}</h3>
              <p className="text-sm text-charcoal/70 mb-4">{bundle.description}</p>

              <ul className="space-y-1.5 mb-5">
                {bundle.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-charcoal/60">
                    <Check size={12} className="mt-0.5 text-sage shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {bundle.status === "available" ? (
                  <a
                    href="/art-supplies"
                    className="inline-flex items-center gap-1.5 rounded-button bg-ink px-4 py-2.5 text-xs font-semibold text-paper hover:bg-charcoal transition-colors"
                  >
                    <ShoppingBag size={12} />
                    {bundle.ctaLabel}
                  </a>
                ) : (
                  <button
                    onClick={() => toggleNotify(bundle.id)}
                    className={`inline-flex items-center gap-1.5 rounded-button px-4 py-2.5 text-xs font-semibold transition-colors ${
                      notified
                        ? "bg-sage/10 text-sage border border-sage/30"
                        : "border border-ink text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    <Bell size={12} />
                    {notified ? "Notified" : bundle.ctaLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
