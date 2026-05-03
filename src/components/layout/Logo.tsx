"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export type LogoVariant = "full" | "wordmark" | "iconOnly";
export type LogoSize = "sm" | "md" | "lg";
export type LogoTheme = "light" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  theme?: LogoTheme;
  linked?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { width: 120, height: 40 },
  md: { width: 160, height: 54 },
  lg: { width: 200, height: 68 },
};

/**
 * Logo — Reusable brand logo component.
 *
 * Supports full-color logo image, wordmark fallback, and responsive sizing.
 * The uploaded logo has a transparent background and works on both light and dark.
 *
 * Usage:
 *   <Logo variant="full" size="md" theme="light" linked />
 */
export function Logo({
  variant = "full",
  size = "md",
  theme = "light",
  linked = false,
  className = "",
}: LogoProps) {
  const { width, height } = sizeMap[size];
  const altText = BRAND.logo.altText;

  // For now, only the full logo asset exists.
  // Future: add wordmark-only and icon-only variants.
  const showImage = variant === "full" || variant === "iconOnly";
  const showWordmark = variant === "full" || variant === "wordmark";

  const content = (
    <div
      className={`flex items-center gap-2 ${className}`}
      style={{ height }}
    >
      {showImage && (
        <Image
          src={BRAND.logo.path}
          alt={altText}
          width={variant === "iconOnly" ? height : width}
          height={height}
          className="object-contain"
          priority
        />
      )}

      {showWordmark && !showImage && (
        <span
          className={`font-serif font-semibold tracking-tight ${
            theme === "dark" ? "text-paper" : "text-ink"
          }`}
          style={{ fontSize: height * 0.45 }}
        >
          {BRAND.logo.wordmarkFallback}
        </span>
      )}
    </div>
  );

  if (linked) {
    return (
      <Link href="/" aria-label="Go to homepage" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
