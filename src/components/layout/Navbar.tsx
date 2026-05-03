"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavigation, navCta } from "@/config/siteNavigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-linen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold text-espresso tracking-tight">
              Nature of Art
            </span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-charcoal font-sans">
              Montessori Art Education
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-charcoal hover:text-terracotta transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-paper border border-linen rounded-card-sm shadow-card p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-charcoal hover:text-terracotta hover:bg-canvas rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href={navCta.href}
              className="hidden sm:inline-flex items-center justify-center rounded-button bg-terracotta px-5 py-2.5 text-sm font-semibold text-paper hover:bg-terracotta-dark transition-colors duration-200"
            >
              {navCta.label}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-espresso"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-linen bg-ivory">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-medium text-charcoal hover:text-terracotta"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-charcoal/80 hover:text-terracotta"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={navCta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-4 block w-full text-center rounded-button bg-terracotta px-5 py-3 text-sm font-semibold text-paper"
            >
              {navCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
