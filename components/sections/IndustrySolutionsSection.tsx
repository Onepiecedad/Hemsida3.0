'use client';

import { Card } from '@/components/ui/Card';
import { Building2, Headphones, Hotel, Settings2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { typography, effects, radius, spacing, colors, shadow, transition } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

function IndustrySolutionsSectionBase() {
  return (
    <SectionWrapper 
      id="industry-solutions"
      data-theme-debug="IndustrySolutionsSection"
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
              Real AI, Solving Real Problems—Across Industries
            </h2>
            <div className={cn(spacing.stack.sm, "mt-6")}>
              <p className={cn(
                typography.text.base,
                colors.text.secondary,
                "max-w-[44rem] mx-auto"
              )}>
                From real estate to hospitality to customer support—AI is already handling the work that slows businesses down.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full"
          )}>
            <Card
              icon={<Building2 className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="AI for Real Estate"
              description="Capture leads, book viewings, and follow up—automatically, 24/7. Never miss a buyer again."
              cta={
                <>
                  <p>Turn Missed Calls Into Closed Deals—While You Sleep</p>
                  <p>Real estate doesn't stop at 5 PM—but you do.</p>
                  <p>Missed calls, unqualified leads, and non-stop questions pull you away from what really matters: closing deals.</p>
                  <p>Your AI agent answers instantly—day or night—knows every listing in real time, and handles follow-ups without missing a beat.</p>
                  <p>No more chasing. No more stress. Just more showings, more sleep, and more deals.</p>
                  <p>👉 Curious what this could look like in your agency? Talk to Dana to find out.</p>
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
              icon={<Headphones className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="AI for Customer Support"
              description="Answer instantly, resolve faster, and scale support—without adding headcount."
              cta={
                <>
                  <p>Your AI Support Agent—Working 24/7, So Your Team Doesn't Have To</p>
                  <p>Support teams are stretched thin—and customers don't wait.</p>
                  <p>Your AI support agent handles up to 80% of incoming questions instantly, 24/7—by voice or chat.</p>
                  <p>It works across channels, speaks multiple languages, and integrates directly into your CRM or helpdesk.</p>
                  <p>No more ticket backlogs. No more missed calls. Just faster answers, happier customers, and a team that can finally breathe.</p>
                  <p>👉 Want to see what this looks like for your business? Talk to Dana now.</p>
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
              icon={<Hotel className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="AI for Hospitality"
              description="Answer guest questions, handle bookings, and increase upsells—day or night, no staff needed."
              cta={
                <>
                  <p>Give Guests Instant Answers—Without Adding to Your Team</p>
                  <p>Guests expect fast, helpful service—no matter the hour.</p>
                  <p>Your AI concierge responds instantly by voice or chat, handles bookings, FAQs, and even upsells room upgrades or services automatically.</p>
                  <p>It works 24/7, speaks multiple languages, and connects with your existing booking system or CRM.</p>
                  <p>Fewer delays. Happier guests. More revenue—without hiring more staff.</p>
                  <p>👉 Wondering how this could work at your front desk? Talk to Dana to find out.</p>
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
              title="AI for Admin & Workflow Automation"
              description="Free up your time by automating repetitive tasks, reminders, and follow-ups—without hiring or micromanaging."
              cta={
                <>
                  <p>Handle the Busywork—Without Lifting a Finger</p>
                  <p>Emails, reminders, scheduling, updates, follow-ups… admin never ends.</p>
                  <p>Your AI assistant handles repetitive tasks automatically—so you can focus on work that actually moves the needle.</p>
                  <p>It updates systems, sends messages, reminds clients, tracks progress, and more—without dropping the ball.</p>
                  <p>Save hours, prevent mistakes, and finally get your time back.</p>
                  <p>👉 Wondering how much of your admin could disappear? Talk to Dana to find out.</p>
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

export const IndustrySolutionsSection = withThemeValidation(
  IndustrySolutionsSectionBase, 
  "IndustrySolutionsSection", 
  ["typography", "spacing", "radius", "colors", "effects", "shadow", "transition"] as ThemeSection[]
); 