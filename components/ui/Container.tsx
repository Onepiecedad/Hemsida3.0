"use client";

import { cn } from "@/lib/utils";
import { spacing, transition } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";
import { GlassLayer } from "./GlassLayer";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  padding?: keyof typeof spacing.padding;
}

function ContainerBase({ 
  children, 
  className, 
  glass: useGlass = true,
  padding = "none"
}: ContainerProps) {
  const containerClasses = cn(
    spacing.container,
    spacing.padding[padding],
    transition.base,
    className
  );

  if (useGlass) {
    return (
      <GlassLayer 
        className={containerClasses}
        data-theme-debug="Container-Glass"
      >
        {children}
      </GlassLayer>
    );
  }

  return (
    <div 
      className={containerClasses}
      data-theme-debug="Container"
    >
      {children}
    </div>
  );
}

export const Container = withThemeValidation(
  ContainerBase,
  "Container",
  ["typography", "spacing", "radius", "colors", "effects", "border", "shadow", "transition"] as ThemeSection[]
); 