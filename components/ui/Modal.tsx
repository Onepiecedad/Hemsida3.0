'use client'

import { Dialog } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { spacing, radius, colors, effects, shadow, transition } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

function ModalBase({ isOpen, onClose, children, className }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={cn(
        spacing.position.relative,
        spacing.z.modal,
        effects.transition.base,
        className
      )}
      data-theme-debug={`Modal:isOpen=${isOpen}`}
    >
      {/* Backdrop */}
      <div 
        className={cn(
          spacing.position.fixed,
          colors.background.glass,
          effects.glass.light
        )} 
        aria-hidden="true" 
      />

      {/* Full-screen container */}
      <div className={cn(
        spacing.position.fixed,
        spacing.flex.center,
        spacing.padding.card
      )}>
        <Dialog.Panel
          className={cn(
            effects.glass.light,
            radius.xl,
            spacing.padding.modal,
            spacing.width.full,
            spacing.maxWidth.xl,
            spacing.height.modal,
            spacing.flex.col,
            shadow.modal,
            transition.base
          )}
        >
          <div className={cn(
            spacing.flex.one,
            spacing.overflow.y.auto,
            spacing.elementSpacing
          )}>
            {children}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export const Modal = withThemeValidation(
  ModalBase,
  "Modal",
  ["typography", "spacing", "radius", "colors", "effects", "border", "shadow", "transition"] as ThemeSection[]
); 