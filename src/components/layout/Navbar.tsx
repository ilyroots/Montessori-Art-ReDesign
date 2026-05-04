"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavigation, navCta } from "@/config/siteNavigation";
import { Logo } from "./Logo";
import { Menu, X, User } from "lucide-react";
import { getMockUser } from "@/lib/mockAuth";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    setHasUser(!!getMockUser());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-linen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-[72px] items-center justify-between">
          {/* Logo */}
          <Logo variant="full" size="md" theme="light" linked />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-charcoal hover:text-honey transition-colors duration-200 relative"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bee-yellow group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-paper border border-linen rounded-card-sm shadow-card p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-charcoal hover:text-honey hover:bg-canvas rounded-md transition-colors"
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

          {/* CTA + Login + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {hasUser ? (
              <Link
                href="/academy/dashboard"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-charcoal hover:text-honey transition-colors"
              >
                <User size={16} />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center text-sm font-medium text-charcoal hover:text-honey transition-colors"
              >
                Log in
              </Link>
            )}
            <Link
              href={navCta.href}
              className="hidden sm:inline-flex items-center justify-center rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200"
            >
              {navCta.label}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ink rounded-md hover:bg-canvas transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-linen bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-medium text-charcoal hover:text-honey"
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
                        className="block py-1.5 text-sm text-charcoal/60 hover:text-honey"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-linen mt-3 space-y-2">
              {hasUser ? (
                <Link
                  href="/academy/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-charcoal hover:text-honey"
                >
                  <User size={16} />
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-charcoal hover:text-honey"
                >
                  Log in
                </Link>
              )}
              <Link
                href={navCta.href}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-button bg-ink px-5 py-3 text-sm font-semibold text-paper"
              >
                {navCta.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
