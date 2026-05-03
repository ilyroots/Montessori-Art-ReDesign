"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface StickyCTAProps {
  label: string;
  href: string;
  visibleAfter?: number;
}

export function StickyCTA({ label, href, visibleAfter = 400 }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > visibleAfter);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleAfter]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-md border-t border-linen p-4 transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href={href}
        className="block w-full text-center rounded-button bg-terracotta px-6 py-3 text-sm font-semibold text-paper hover:bg-terracotta-dark transition-colors"
      >
        {label}
      </Link>
    </div>
  );
}
