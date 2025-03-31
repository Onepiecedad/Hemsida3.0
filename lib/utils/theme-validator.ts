import { 
  typography, 
  spacing, 
  radius, 
  colors,
  effects,
  shadow,
  transition
} from '../theme';

export type ThemeSection = 
  | 'typography'
  | 'spacing'
  | 'radius'
  | 'colors'
  | 'effects'
  | 'shadow'
  | 'transition';

type ThemeValue = string | number | { [key: string]: ThemeValue };
type ThemePath = string;

const themeTokens = {
  typography,
  spacing,
  radius,
  colors,
  effects,
  shadow,
  transition
} as const;

type ThemeTokenKey = keyof typeof themeTokens;

function getAllThemeValues(obj: Record<string, ThemeValue>, section: string): Map<string, string> {
  const values = new Map<ThemePath, string>();

  function traverse(current: ThemeValue, path: string[]) {
    if (typeof current === 'string') {
      values.set(path.join('.'), current);
    } else if (typeof current === 'object' && current !== null) {
      Object.entries(current).forEach(([key, value]) => {
        traverse(value, [...path, key]);
      });
    }
  }

  traverse(obj, [section]);
  return values;
}

// Hjälpfunktion för att validera att en komponent använder theme-värden
export function validateThemeUsage(
  componentName: string,
  usedTokens: string[],
  allowedTokens: ThemeSection[]
): boolean {
  console.log(`[Theme Debug] Validating ${componentName}`);
  console.log(`[Theme Debug] Used tokens:`, usedTokens);

  const missingThemeValues: string[] = [];

  allowedTokens.forEach(section => {
    const themeValues = getAllThemeValues(themeTokens[section], section);
    console.log(`[Theme Debug] ${section} values:`, Array.from(themeValues.keys()));

    const matches = usedTokens.filter(token => 
      Array.from(themeValues.keys()).some(themePath => token.startsWith(themePath))
    );
    console.log(`[Theme Debug] Matches found for ${section}:`, matches);

    if (matches.length === 0) {
      missingThemeValues.push(section);
    }
  });

  if (missingThemeValues.length > 0) {
    console.warn(
      `[Theme Warning] Component "${componentName}" is not using any values from these theme sections: ${missingThemeValues.join(', ')}.\n` +
      'Please ensure all styles come from the theme file.'
    );
    return false;
  } else {
    console.log('[Theme Debug] All theme sections validated successfully!');
    return true;
  }
}

export interface ThemeValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateTheme(theme: Record<string, unknown>): ThemeValidationResult {
  const errors: string[] = [];
  
  // Add your theme validation logic here
  // Example:
  if (!theme.colors) {
    errors.push('Theme must include colors');
  }
  
  if (!theme.spacing) {
    errors.push('Theme must include spacing');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateThemeProperty<T extends ThemeTokenKey>(
  theme: Record<string, unknown>,
  property: T,
  requiredKeys: string[]
): ThemeValidationResult {
  const errors: string[] = [];
  
  if (!theme[property]) {
    errors.push(`Theme must include ${String(property)}`);
    return { isValid: false, errors };
  }
  
  const propertyValue = theme[property] as Record<string, unknown>;
  const missingKeys = requiredKeys.filter(key => !propertyValue[key]);
  
  if (missingKeys.length > 0) {
    errors.push(`Missing required ${String(property)} keys: ${missingKeys.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
} 