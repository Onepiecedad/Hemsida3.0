import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  typography, 
  spacing, 
  radius, 
  colors, 
  effects,
  transition
} from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import { Modal } from "@/components/ui/Modal";
import type { ThemeSection } from "@/lib/utils/theme-validator";

export interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  cta?: React.ReactNode;
  showDanaButton?: boolean;
  onDanaClick?: () => void;
  className?: string;
}

function CardBase({
  title,
  description,
  icon,
  cta,
  showDanaButton,
  onDanaClick,
  className,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        className={cn(
          effects.glass.light,
          effects.hover.scale,
          radius.xl,
          spacing.padding.card,
          transition.base,
          spacing.width.full,
          spacing.height.full,
          typography.text.base,
          spacing.alignment.left,
          effects.interaction.cursor.pointer,
          className
        )}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOpen();
          }
        }}
        tabIndex={0}
        data-theme-debug={`Card:title=${title},hasIcon=${!!icon},hasDescription=${!!description}`}
      >
        <div className={cn(spacing.flex.col, spacing.stack.md)}>
          {icon && (
            <div className={cn(spacing.flex.center, spacing.alignment.start)}>
              {icon}
            </div>
          )}
          <div className={cn(spacing.flex.col, spacing.stack.sm)}>
            <h3 className={cn(typography.heading.h3, colors.text.primary)}>
              {title}
            </h3>
            {description && (
              <p className={cn(typography.text.sm, colors.text.secondary)}>
                {description}
              </p>
            )}
          </div>
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className={cn(spacing.flex.col, spacing.height.full)}>
          <div className={cn(spacing.flex.none)}>
            <div className={cn(spacing.flex.between, spacing.stack.md)}>
              <div>
                {icon && <div className={cn(typography.text.sm, spacing.stack.md)}>{icon}</div>}
                <h3 className={typography.heading.h3}>{title}</h3>
                {description && <p className={cn(typography.text.sm, colors.text.secondary, spacing.stack.sm)}>{description}</p>}
              </div>
            </div>
          </div>
          
          <div className={cn(spacing.flex.one, spacing.overflow.y.auto, spacing.padding.card)}>
            {cta && <div className={cn(typography.text.sm, colors.text.secondary)}>{cta}</div>}
          </div>

          <div className={cn(spacing.flex.none, spacing.padding.top.md)}>
            {showDanaButton && (
              <button
                onClick={onDanaClick}
                className={cn(
                  typography.buttonText,
                  colors.text.primary,
                  effects.glass.light,
                  effects.hover.scale,
                  radius.lg,
                  spacing.padding.card,
                  spacing.stack.md,
                  transition.base
                )}
                data-theme-debug={`Card-Button:onClick=${!!onDanaClick}`}
              >
                Talk to Dana
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export const Card = withThemeValidation(
  CardBase,
  "Card",
  ["typography", "spacing", "radius", "colors", "effects", "transition"] as ThemeSection[]
); 