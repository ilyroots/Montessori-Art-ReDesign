"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsPayload } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: AnalyticsEvent;
  eventPayload?: AnalyticsPayload;
  target?: string;
  rel?: string;
}

export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventPayload,
  target,
  rel,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => trackEvent(eventName, eventPayload)}
    >
      {children}
    </Link>
  );
}
