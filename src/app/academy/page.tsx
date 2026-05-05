import { createMetadata } from "@/lib/seo";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyHowItWorks } from "@/components/academy/AcademyHowItWorks";
import { AcademyAudienceCards } from "@/components/academy/AcademyAudienceCards";
import { AcademyFeaturedPaths } from "@/components/academy/AcademyFeaturedPaths";
import { AcademyPricingPreview } from "@/components/academy/AcademyPricingPreview";
import { AcademyArtBoxPreview } from "@/components/academy/AcademyArtBoxPreview";
import { CertificationUpsell } from "@/components/academy/CertificationUpsell";
import { AcademyFAQ } from "@/components/academy/AcademyFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionTransition } from "@/components/visual/SectionTransition";

export const metadata = createMetadata({
  title: "Nature of Art Academy — Preview",
  description:
    "A work-in-progress preview of the future Academy concept. Not part of the current public launch.",
});

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <SectionTransition variant="swatches" height="md" />

      <AcademyHowItWorks />
      <SectionTransition variant="swatches" height="md" />

      <AcademyAudienceCards />
      <SectionTransition variant="swatches" height="lg" />

      <AcademyFeaturedPaths />
      <SectionTransition variant="honeycomb" height="md" />

      <AcademyPricingPreview />
      <SectionTransition variant="swatches" height="md" />

      <AcademyArtBoxPreview />
      <SectionTransition variant="swatches" height="lg" />

      <CertificationUpsell />
      <SectionTransition variant="swatches" height="md" />

      <AcademyFAQ />
      <SectionTransition variant="swatches" height="lg" />

      <FinalCTA
        title="Start your family's art journey today"
        description="Create a free account and begin the Color Mixing Starter Path. No credit card required."
        primaryCta={{ label: "Start Free Academy", href: "/academy/start" }}
        secondaryCta={{ label: "Preview Dashboard", href: "/academy/dashboard" }}
      />
    </>
  );
}
