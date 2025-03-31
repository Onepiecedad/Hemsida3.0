declare module '@/lib/theme' {
  export const effects: {
    interaction: {
      cursor: {
        pointer: string;
        wait: string;
        notAllowed: string;
      };
    };
    hover: {
      scale: string;
    };
    transition: {
      base: string;
    };
    glass: {
      light: string;
      medium: string;
      heavy: string;
      lighter: string;
    };
  };

  export const spacing: {
    padding: {
      card: string;
      section: string;
      none: string;
      modal: string;
      top: {
        md: string;
      };
    };
    width: {
      full: string;
      screen: string;
      auto: string;
    };
    height: {
      full: string;
      screen: string;
      auto: string;
      modal: string;
    };
    position: {
      fixed: string;
      relative: string;
    };
    z: {
      modal: string;
    };
    alignment: {
      left: string;
      center: string;
      right: string;
      start: string;
    };
    container: string;
    stack: {
      sm: string;
      md: string;
      lg: string;
    };
    flex: {
      center: string;
      between: string;
      col: string;
      none: string;
      one: string;
      row: string;
      responsive: string;
    };
    gap: {
      sm: string;
      md: string;
      lg: string;
    };
    icon: {
      sm: string;
      md: string;
      lg: string;
    };
    section: {
      base: string;
      padding: string;
    };
    elementSpacing: string;
    overflow: {
      y: {
        auto: string;
      };
    };
    maxWidth: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      container: string;
    };
  };

  export const colors: {
    text: {
      primary: string;
      secondary: string;
      accent: string;
      tertiary: string;
      logo: {
        icon: string;
        text: string;
      };
    };
    background: {
      card: string;
      glass: string;
      glassHover: string;
      dark: string;
    };
    primary: string;
    primaryHover: string;
  };

  export const typography: {
    text: {
      base: string;
      secondary: string;
      sm: string;
      lg: string;
    };
    heading: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
    };
    icon: string;
    paragraph: string;
    buttonText: string;
    label: string;
    logo: string;
  };

  export const radius: {
    xl: string;
    lg: string;
    md: string;
  };

  export const shadow: {
    card: string;
    button: string;
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    modal: string;
  };

  export const transition: {
    base: string;
    fast: string;
  };
} 