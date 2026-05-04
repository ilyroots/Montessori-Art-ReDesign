"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavigation, navCta } from "@/config/siteNavigation";
import { Logo } from "./Logo";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { getMockUser } from "@/lib/mockAuth";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setHasUser(!!getMockUser());
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-soft border-b border-linen/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-[68px] items-center justify-between">
          {/* Logo */}
          <Logo variant="full" size="md" theme="light" linked />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-honey transition-colors duration-200 rounded-md hover:bg-canvas/50"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-paper border border-linen rounded-card shadow-dramatic p-2 min-w-[240px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 text-sm text-charcoal hover:text-honey hover:bg-canvas/60 rounded-md transition-colors"
                          >
                            <span className="font-medium">{child.label}</span>
                            {child.description && (
                              <span className="block text-xs text-charcoal/50 mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Login + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {hasUser ? (
              <Link
                href="/academy/dashboard"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal hover:text-honey transition-colors rounded-md hover:bg-canvas/50"
              >
                <User size={15} />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium text-charcoal hover:text-honey transition-colors rounded-md hover:bg-canvas/50"
              >
                Log in
              </Link>
            )}
            <Link
              href={navCta.href}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200"
            >
              {navCta.label}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ink rounded-md hover:bg-canvas transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-linen bg-paper/95 backdrop-blur-md overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-base font-medium text-charcoal hover:text-honey"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 pb-2">
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
                  className="block w-full text-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
                >
                  {navCta.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
