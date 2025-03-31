"use client";

import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";
import { typography, spacing, colors } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

function HeroSectionBase() {
  return (
    <SectionWrapper
      id="hero"
      className="relative"
      data-theme-debug="HeroSection"
    >
      {/* Logo positioned absolutely */}
      <Logo className="absolute top-8 left-8 md:left-12" />
      
      {/* Main content centered */}
      <Container
        glass={false}
        padding="none"
        className={cn(
          spacing.flex.center,
          "flex-1"
        )}
      >
        <div
          className={cn(
            spacing.width.full,
            spacing.maxWidth.container,
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          )}
        >
          {/* Left column */}
          <div
            className={cn(
              spacing.flex.col,
              "justify-center",
              spacing.alignment.left,
              spacing.maxWidth.xl
            )}
          >
            <h1 
              className={cn(
                typography.heading.h1,
                colors.text.primary,
                "font-light tracking-normal leading-tight mt-6 mb-4"
              )}
            >
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            <div className={cn(spacing.stack.lg)}>
              <h2 
                className={cn(
                  typography.heading.h2,
                  colors.text.secondary
                )}
              >
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 
                className={cn(
                  typography.text.base,
                  colors.text.secondary
                )}
              >
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Right column: empty for now but prepared for future content */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </SectionWrapper>
  );
}

const HeroSection = withThemeValidation(
  HeroSectionBase, 
  "HeroSection", 
  ["typography", "spacing", "radius", "colors", "effects", "shadow", "transition"] as ThemeSection[]
);

export default HeroSection; 