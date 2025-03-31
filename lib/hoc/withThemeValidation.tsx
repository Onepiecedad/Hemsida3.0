import React from 'react';
import { validateThemeUsage } from '../utils/theme-validator';
import type { ThemeSection } from '../utils/theme-validator';

type WithClassName = {
  className?: string;
};

// Utility to extract theme tokens from JSX
function extractThemeTokens(element: React.ReactElement): string[] {
  const tokens: string[] = [];
  
  // Check className prop
  if (element.props.className) {
    // Look for theme token patterns (e.g. typography.text.base)
    const matches = element.props.className.match(/[a-z]+\.[a-z]+(\.[a-z]+)+/g);
    if (matches) {
      tokens.push(...matches);
    }
  }
  
  // Recursively check children
  React.Children.forEach(element.props.children, (child) => {
    if (React.isValidElement(child)) {
      tokens.push(...extractThemeTokens(child));
    }
  });
  
  return tokens;
}

export function withThemeValidation<P extends WithClassName>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string,
  requiredThemeSections: ThemeSection[]
) {
  return function ThemeValidatedComponent(props: P) {
    const componentRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      if (componentRef.current) {
        const tokens = extractThemeTokens(
          <WrappedComponent {...props} ref={componentRef} />
        );
        validateThemeUsage(componentName, tokens, requiredThemeSections);
      }
    }, [props]);

    return <WrappedComponent {...props} ref={componentRef} />;
  };
} 