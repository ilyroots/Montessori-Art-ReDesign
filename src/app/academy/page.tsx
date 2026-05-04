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

export const metadata = createMetadata({
  title: "Nature of Art Academy",
  description:
    "A guided art learning path for children, families, homeschoolers, and Montessori educators. Start free, follow step-by-step lessons, save progress, and unlock deeper curriculum.",
});

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <AcademyHowItWorks />
      <AcademyAudienceCards />
      <AcademyFeaturedPaths />
      <AcademyPricingPreview />
      <AcademyArtBoxPreview />
      <CertificationUpsell />
      <AcademyFAQ />
      <FinalCTA
        title="Start your family's art journey today"
        description="Create a free account and begin the Color Mixing Starter Path. No credit card required."
        primaryCta={{ label: "Start Free Academy", href: "/academy/start" }}
        secondaryCta={{ label: "Preview Dashboard", href: "/academy/dashboard" }}
      />
    </>
  );
}
