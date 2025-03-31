import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { spacing, typography, colors } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

function AboutSectionBase() {
  return (
    <SectionWrapper 
      id="about"
      data-theme-debug="AboutSection"
    >
      <SectionHeading
        title="What's Really Holding Your Business Back?"
        subtitle="It's not a lack of leads—it's the silent drain of repetitive tasks, manual work, and slow response times."
      />

      <div className={spacing.container}>
        <div className={cn(
          spacing.elementSpacing,
          typography.text.base,
          colors.text.secondary
        )}>
          <div className={cn(
            spacing.elementSpacing,
            spacing.maxWidth.lg,
            "mx-auto"
          )}>
            <h3 className={cn(
              typography.heading.h3,
              spacing.elementSpacing,
              colors.text.primary
            )}>
              Our Vision
            </h3>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              We believe in a future where service businesses can focus on what they do best—delivering exceptional value to their clients.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Our AI solutions handle the repetitive tasks, complex scheduling, and routine communications that eat up your valuable time.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              This isn't just about automation—it's about transformation. About giving you back control of your business and your time.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Freedom to grow. To compete. To build something bigger than your bandwidth. And this is only the beginning.
            </p>
          </div>

          <div className={cn(
            spacing.elementSpacing,
            spacing.maxWidth.lg,
            "mx-auto"
          )}>
            <h3 className={cn(
              typography.heading.h3,
              spacing.elementSpacing,
              colors.text.primary
            )}>
              The Problem We Solve
            </h3>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              It's not about working harder. It's about removing what's slowing you down.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Service businesses are drowning in administrative tasks. Hours spent on scheduling, follow-ups, and client communication.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Your expertise should be focused on delivering value, not managing calendars and inbox zero.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Traditional solutions add more complexity—more tools, more training, more things to manage.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              What if there was a better way?
            </p>
          </div>

          <div className={cn(
            spacing.elementSpacing,
            spacing.maxWidth.lg,
            "mx-auto"
          )}>
            <h3 className={cn(
              typography.heading.h3,
              spacing.elementSpacing,
              colors.text.primary
            )}>
              Our Solution
            </h3>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Get your time, team, and sanity back—without adding complexity.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Skyland AI integrates seamlessly with your existing workflow. No new systems to learn. No complex setups.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Our AI understands your business context, handles client interactions naturally, and manages the details automatically.
            </p>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              You stay in control while we handle the routine tasks that slow you down.
            </p>
          </div>

          <div className={cn(
            spacing.elementSpacing,
            spacing.maxWidth.lg,
            "mx-auto"
          )}>
            <h3 className={cn(
              typography.heading.h3,
              spacing.elementSpacing,
              colors.text.primary
            )}>
              The Future of Service Business
            </h3>
            <p className={cn(
              spacing.elementSpacing,
              typography.paragraph
            )}>
              Join us in building a future where service businesses can scale without sacrificing quality or burning out their teams.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const AboutSection = withThemeValidation(
  AboutSectionBase,
  "AboutSection",
  ["typography", "spacing", "radius", "colors", "effects", "shadow", "transition"] as ThemeSection[]
); 