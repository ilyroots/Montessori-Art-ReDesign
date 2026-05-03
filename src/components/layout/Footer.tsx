import Link from "next/link";
import { Logo } from "./Logo";
import { footerNavigation } from "@/config/siteNavigation";
import { BRAND } from "@/config/brand";

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="full" size="lg" theme="dark" linked />
            <p className="mt-4 text-sm text-canvas/70 leading-relaxed">
              {BRAND.positioning}
            </p>
          </div>

          {/* Offers */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-paper/50 font-semibold mb-4">
              Offers
            </h3>
            <ul className="space-y-3">
              {footerNavigation.offers.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-canvas/80 hover:text-bee-yellow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-paper/50 font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-canvas/80 hover:text-bee-yellow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-paper/50 font-semibold mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-canvas/80 hover:text-bee-yellow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-canvas/50">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-canvas/50">
            Designed for Montessori guides, homeschool families, and educators.
          </p>
        </div>
      </div>
    </footer>
  );
}
