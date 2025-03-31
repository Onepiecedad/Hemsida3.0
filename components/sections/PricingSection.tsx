import { spacing, typography, colors } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";

function PricingSectionBase() {
  return (
    <SectionWrapper 
      id="pricing"
      data-theme-debug="PricingSection"
    >
      <SectionHeading
        title="Pricing"
        subtitle="Flexible pricing that scales with your needs."
      />

      <div className={spacing.container}>
        <div className={cn(
          spacing.maxWidth.xl,
          spacing.elementSpacing,
          typography.text.base,
          colors.text.secondary,
          spacing.alignment.center
        )}>
          <p className={cn(
            typography.heading.h2,
            colors.text.primary,
            "font-light"
          )}>
            AI That Scales with Your Business, Delivering Tangible Results
          </p>
          <p className={typography.paragraph}>
            Skyland AI adapts to your business needs, helping you grow faster and more efficiently.
            Book a call to discover how we can unlock real value for you.
          </p>
          <p className={typography.paragraph}>
            Skyland AI isn't just about automating tasks—it's about delivering measurable impact that helps your business grow.
            Whether it's increasing efficiency, accelerating growth, or unlocking new revenue streams,
            our solutions are designed to work for you.
          </p>
          <p className={typography.paragraph}>
            Try AI risk-free for two weeks and see how it can start driving results immediately.
            The question isn't the price—it's how much value we can create.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const PricingSection = withThemeValidation(
  PricingSectionBase,
  "PricingSection",
  ["typography", "spacing", "colors"]
); 