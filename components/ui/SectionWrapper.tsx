"use client";

import { cn } from "@/lib/utils";
import { spacing, transition } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "data-theme-debug"?: string;
}

function SectionWrapperBase({
  children,
  className,
  id,
  "data-theme-debug": dataThemeDebug,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing.width.full,
        spacing.height.full,
        spacing.flex.col,
        spacing.flex.center,
        spacing.section.base,
        transition.base,
        className
      )}
      data-theme-debug={dataThemeDebug || "SectionWrapper"}
    >
      {children}
    </section>
  );
}

export const SectionWrapper = withThemeValidation(
  SectionWrapperBase,
  "SectionWrapper",
  ["typography", "spacing", "radius", "colors", "effects", "border", "shadow", "transition"] as ThemeSection[]
); 