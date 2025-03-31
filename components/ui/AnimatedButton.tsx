import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  typography, 
  spacing, 
  radius, 
  colors, 
  effects,
  shadow,
  transition
} from '@/lib/theme';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children"> {
  children: React.ReactNode;
  className?: string;
}

function AnimatedButtonBase({ 
  children, 
  className,
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.button
      data-theme-debug="AnimatedButton"
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export const AnimatedButton = withThemeValidation(
  AnimatedButtonBase,
  "AnimatedButton",
  ["typography", "spacing", "radius", "colors", "effects", "shadow", "transition"]
); 