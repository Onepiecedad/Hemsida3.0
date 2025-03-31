import { cn } from "@/lib/utils";
import { typography, spacing, radius, colors, effects, shadow, transition } from "@/lib/theme";
import { showDanaWidget } from "@/components/DanaWidget";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface DanaButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

function DanaButtonBase({ 
  onClick = showDanaWidget,
  className,
  children = "Chat with Dana"
}: DanaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        typography.buttonText,
        spacing.padding.card,
        radius.lg,
        colors.text.primary,
        effects.glass.light,
        effects.hover.scale,
        shadow.button,
        transition.base,
        effects.interaction.cursor.pointer,
        "focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      data-theme-debug="DanaButton"
    >
      {children}
    </button>
  );
}

export const DanaButton = withThemeValidation(
  DanaButtonBase,
  "DanaButton",
  ["typography", "spacing", "radius", "colors", "effects", "border", "shadow", "transition"] as ThemeSection[]
); 