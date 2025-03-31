import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from '@/components/ui/Card';
import { Container } from "@/components/ui/Container";
import { Lightbulb, Settings2, Zap, Globe } from "lucide-react";
import { spacing, typography, colors, effects, radius, shadow, transition } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

function AboutSectionBase() {
  return (
    <SectionWrapper 
      id="about"
      data-theme-debug="AboutSection"
    >
      <Container
        glass={false}
        padding="none"
        className={cn(
          spacing.flex.center,
          "py-8 md:py-6 lg:py-4"
        )}
      >
        <div
          className={cn(
            spacing.width.full,
            spacing.maxWidth.container,
            spacing.flex.col,
            "items-center"
          )}
        >
          {/* Section Heading */}
          <div className={cn(spacing.alignment.center)}>
            <h2 className={cn(
              typography.heading.h2,
              colors.text.primary,
              "font-light leading-[1.1] tracking-tight"
            )}>
              What's Really Holding Your Business Back?
            </h2>
            <div className={cn(spacing.stack.sm, "mt-6")}>
              <p className={cn(
                typography.text.base,
                colors.text.secondary,
                "max-w-[44rem] mx-auto"
              )}>
                It's not a lack of leads—it's the silent drain of repetitive tasks, manual work, and slow response times.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full"
          )}>
            <Card
              icon={<Lightbulb className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Why Skyland AI Was Built – The Future of Work Starts Here"
              description="AI isn't just the future—it's the great equalizer. Discover the vision behind Skyland AI and how it helps businesses of any size do more with less."
              cta={
                <>
                  <p>The Vision Behind Skyland AI</p>
                  <p>AI isn't just for tech giants. It's a revolution for the rest of us.</p>
                  <p>Skyland was born from a simple belief: small teams shouldn't be held back by manual work, burnout, or limited resources. We saw how time and energy were being wasted—and how automation could change everything.</p>
                  <p>So we built a smarter path forward—where AI doesn't just save time, it gives you freedom. Freedom to grow. To compete. To build something bigger than your bandwidth.</p>
                  <p>And this is only the beginning.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                transition.base,
                shadow.card,
                effects.hover.scale,
                "min-h-[160px]"
              )}
            />

            <Card
              icon={<Settings2 className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Your Team Isn't the Problem—Your Systems Are"
              description="It's not about working harder. It's about removing what's slowing you down."
              cta={
                <>
                  <p>The Cost of Chaos You've Learned to Live With</p>
                  <p>Most teams aren't falling short—they're buried in broken systems.</p>
                  <p>Manual tasks. Constant interruptions. Endless admin.</p>
                  <p>It's the silent chaos you've learned to live with.</p>
                  <p>And it's draining time, money, and energy every single day.</p>
                  <p>Skyland AI replaces that chaos with flow:</p>
                  <p>Automated workflows. Clean handoffs. No friction.</p>
                  <p>Your team gets to focus. Your business gets to move.</p>
                  <p>No burnout. No bottlenecks. Just growth without drag.</p>
                  <p>👉 Talk to Dana to see what you could stop doing—starting today.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                transition.base,
                shadow.card,
                effects.hover.scale,
                "min-h-[160px]"
              )}
            />

            <Card
              icon={<Zap className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="From Chaos to Control—In Days, Not Months"
              description="Get your time, team, and sanity back—without adding complexity."
              cta={
                <>
                  <p>This Is What It Feels Like When Business Just Works</p>
                  <p>No more firefighting. No more missed messages. No more lost opportunities.</p>
                  <p>Skyland AI replaces chaos with calm—automating repetitive tasks, syncing systems, and making everything run exactly the way it should.</p>
                  <p>The result?</p>
                  <p>Your team moves faster. Your clients get answers.</p>
                  <p>And you finally get to run your business—not chase it.</p>
                  <p>👉 Talk to Dana to see how fast clarity can replace chaos.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                transition.base,
                shadow.card,
                effects.hover.scale,
                "min-h-[160px]"
              )}
            />

            <Card
              icon={<Globe className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="There Was Before AI—And Then the World Changed"
              description="The only thing we know for sure is that change is the only constant. This is the revolution—and those who act will lead it."
              cta={
                <>
                  <p>This Shift Is Bigger Than Any One Tool—It's a New Era</p>
                  <p>Change is never easy—but it's always inevitable.</p>
                  <p>We're entering a new era of business—faster, smarter, more automated.</p>
                  <p>And the gap is growing between those who embrace it and those who resist it.</p>
                  <p>AI isn't just about saving time. It's about staying relevant.</p>
                  <p>About building systems that scale without stress.</p>
                  <p>Skyland helps you step confidently into what's next—without overwhelm, without guesswork.</p>
                  <p>Because the future doesn't wait.</p>
                  <p>But with the right systems in place, neither do you.</p>
                  <p>👉 Talk to Dana and take your first step into the after-AI era.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                transition.base,
                shadow.card,
                effects.hover.scale,
                "min-h-[160px]"
              )}
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export const AboutSection = withThemeValidation(
  AboutSectionBase,
  "AboutSection",
  ["typography", "spacing", "radius", "colors", "effects", "shadow", "transition"] as ThemeSection[]
); 