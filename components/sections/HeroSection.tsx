"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { spacing, typography, colors, effects, layout } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import { ThemeSection } from "@/types/theme-sections";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

// Dynamically import Card component since it's below the fold
const Card = dynamic(() => import("@/components/ui/Card"), {
  loading: () => <div className={cn(effects.loading.pulse, colors.background.glass, spacing.rounded.xl, "h-64")} />,
  ssr: true
});

const HeroSectionBase: React.FC = () => {
  return (
    <SectionWrapper id="hero" className={cn(spacing.section.base)}>
      <div className={cn(layout.position.topLeft)}>
        <Logo priority={true} />
      </div>

      <div className={cn(spacing.maxWidth.container, spacing.padding.section)}>
        <div className={cn(
          spacing.flex.row,
          spacing.gap.lg,
          layout.align.center
        )}>
          {/* Left Column - Text Content */}
          <div className={cn(spacing.flex.col, spacing.gap.md, layout.flex.grow)}>
            <div className={cn(
              spacing.flex.col,
              spacing.gap.lg,
              spacing.maxWidth["2xl"]
            )}>
              <h1 className={cn(
                typography.heading.display,
                colors.text.primary,
                effects.transition.base,
                typography.spacing.mb4,
                typography.leading.tight
              )}>
                What if growing your business didn't mean more work?
              </h1>
              
              <div className={cn(
                spacing.flex.col,
                spacing.gap.custom["1.4"]
              )}>
                <p className={cn(
                  typography.text.xl,
                  colors.text.secondary,
                  effects.transition.base
                )}>
                  What If AI Could Handle 80% of Your Work—Effortlessly?
                </p>
                
                <p className={cn(
                  typography.text.xl,
                  colors.text.secondary,
                  effects.transition.base
                )}>
                  What If You Had an Employee That Worked 24/7—For Free?
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Card */}
          <div className={cn(
            layout.flex.grow,
            layout.flex.center,
            spacing.padding.top4,
            layout.size.minH28
          )}>
            <Suspense fallback={<div className={cn(effects.loading.pulse, colors.background.glass, spacing.rounded.xl, "h-64")} />}>
              <Card
                icon={<MessageCircle className={cn(typography.icon, colors.text.accent)} />}
                title="Want to save 10+ hours a week—without changing how you work?"
                description="What's the one task you'd automate today if you could?"
                cta="Talk to Dana to find out how"
                showModal={true}
                modalActionLabel="Chat with Dana"
                onModalAction={() => console.log('Chat with Dana clicked')}
                data-theme-debug="Card"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default withThemeValidation(
  HeroSectionBase,
  "HeroSection",
  ["spacing", "typography", "colors", "effects", "layout"] as ThemeSection[]
);