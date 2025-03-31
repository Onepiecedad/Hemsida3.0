'use client';

import { Card } from '@/components/ui/Card';
import { PhoneCall, Inbox, Clock, Settings2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";
import { typography, effects, radius, spacing, colors, shadow, transition } from "@/lib/theme";

function PainPointSectionBase() {
  return (
    <SectionWrapper 
      id="pain-points"
      data-theme-debug="PainPointSection"
    >
      <Container
        glass={false}
        padding="none"
        className={cn(
          spacing.flex.center,
          "flex-1 py-8 md:py-6 lg:py-4"
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
              colors.text.primary
            )}>
              Which of These Problems Is Costing You the Most Right Now?
            </h2>
            <div className={cn(spacing.stack.sm, "mt-6")}>
              <p className={cn(
                typography.text.base,
                colors.text.secondary,
                "max-w-[44rem] mx-auto"
              )}>
                These issues don't just slow you down—they quietly drain your time, energy, and profit.
              </p>
              <p className={cn(
                typography.text.base,
                colors.text.secondary,
                "italic max-w-xl mx-auto"
              )}>
                AI can start fixing them in days—not months.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full"
          )}>
            <Card
              icon={<PhoneCall className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Every missed call could be a lost client."
              description="What if your business could respond instantly—even when you can't?"
              cta={
                <>
                  <p>How many did you miss today?</p>
                  <p>You're deep in work—then the phone rings. Again. And again.</p>
                  <p>Same questions. Same interruptions. Same stress.</p>
                  <p>And every missed call? That's a cold lead. A lost sale.</p>
                  <p>How much is one client worth to you? Now multiply that by ten.</p>
                  <p>Now imagine this:</p>
                  <p>An AI voice assistant that answers instantly—24/7.</p>
                  <p>It books appointments. Handles FAQs. Qualifies leads—without you lifting a finger.</p>
                  <p>This isn't about replacing you.</p>
                  <p>It's about reclaiming your time and sealing the cracks in your growth.</p>
                  <p>Now your customers get answers. You stay in control.</p>
                  <p>And growth stops leaking through the cracks.</p>
                  <p>💬 Talk to Dana to see what that could look like in your business.</p>
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
              icon={<Inbox className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Still buried in admin that doesn't grow your business?"
              description="What if your daily busywork ran itself—without extra staff?"
              cta={
                <>
                  <p>What if you could free up hours and finally focus on real growth?</p>
                  <p>You didn't start your business to spend your days filling out forms, updating spreadsheets, or chasing paperwork.</p>
                  <p>But somehow, all that "small stuff" eats up your time—and pulls your focus away from the work that actually moves the needle.</p>
                  <p>It's not just exhausting. It's expensive.</p>
                  <p>Because every hour spent on admin is an hour not spent on growth.</p>
                  <p>Now imagine this:</p>
                  <p>AI systems that quietly run your backend operations—automating reports, scheduling, client intake, follow-ups, and more.</p>
                  <p>No new hires. No complicated tech.</p>
                  <p>Just your workflows—streamlined and self-managing.</p>
                  <p>This isn't about doing more.</p>
                  <p>It's about finally doing what matters most.</p>
                  <p>💬 Talk to Dana to find out what your business could automate first.</p>
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
              icon={<Clock className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Losing leads because you didn't respond fast enough?"
              description="What if your leads got a reply in seconds—not hours?"
              cta={
                <>
                  <p>What if your leads never went cold again?</p>
                  <p>You had their attention—but you didn't reply fast enough.</p>
                  <p>They moved on. Or worse—your competitor beat you to it.</p>
                  <p>In today's world, leads expect instant answers.</p>
                  <p>If you're not responding within minutes, you're losing deals you never even knew you had.</p>
                  <p>Now imagine this:</p>
                  <p>AI-powered assistants that engage new leads the moment they reach out—via chat, voice, or form.</p>
                  <p>They qualify, respond, and even book meetings while you focus on the work that matters.</p>
                  <p>No missed messages. No cold leads.</p>
                  <p>Just warm conversations happening on autopilot.</p>
                  <p>💬 Talk to Dana to see how fast you could start winning back lost leads.</p>
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
              title="Scaling feels impossible without hiring more staff?"
              description="What if your operations scaled automatically as your business grew?"
              cta={
                <>
                  <p>What if you could serve more clients—without growing your team?</p>
                  <p>Growth should feel exciting—not exhausting.</p>
                  <p>But when every new client means more staff, more training, and more overhead… scaling starts to feel like a trap.</p>
                  <p>What if your business could handle more leads, more clients, and more complexity—without growing your team?</p>
                  <p>That's what AI automation delivers.</p>
                  <p>It replaces manual busywork with intelligent systems that work behind the scenes—handling onboarding, follow-ups, scheduling, reporting, and more.</p>
                  <p>No burnout. No bloated payroll.</p>
                  <p>Just a lean, scalable business that grows without friction.</p>
                  <p>💬 Talk to Dana to see how your business could scale faster—with less stress.</p>
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

const PainPointSection = withThemeValidation(
  PainPointSectionBase, 
  "PainPointSection", 
  ["typography", "spacing", "radius", "colors", "effects", "shadow", "transition"] as ThemeSection[]
);

export default PainPointSection; 