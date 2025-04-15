// styles/theme.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Main colors
      primary: string;
      secondary: string;
      accent: string;
      hover: string;
      
      // Background colors
      background: string;
      lightBackground: string;
      darkBackground: string;
      
      // Text colors
      text: string;
      textLight: string;
      textDark: string;
      textInverted: string;
      
      // State colors
      success: string;
      warning: string;
      error: string;
      info: string;
      
      // Grayscale
      white: string;
      lightGray: string;
      gray: string;
      darkGray: string;
      black: string;
      
      // RGBA versions for transparency
      primaryRGB: string;
      secondaryRGB: string;
      accentRGB: string;
    };
    
    spacing: {
      // Base units
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      
      // Layout spacing
      containerPadding: string;
      sectionPadding: string;
      mobilePadding: string;
      desktopPadding: string;
    };
    
    fonts: {
      primary: string;
      secondary: string;
      arabic: string;
      // Font weights
      light: number;
      regular: number;
      medium: number;
      bold: number;
      black: number;
    };
    
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      heading1: string;
      heading2: string;
      heading3: string;
      heading4: string;
    };
    
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
      widescreen: string;
    };
    
    transitions: {
      fast: string;
      medium: string;
      slow: string;
      default: string;
    };
    
    shadows: {
    small: string;
    medium: string;
    large: string;
    inset: string;
    text: string;
    card: string;
  };
    
    borders: {
      thin: string;
      medium: string;
      thick: string;
      radius: {
        small: string;
        medium: string;
        large: string;
        full: string;
      };
    };
    
    zIndex: {
      base: number;
      dropdown: number;
      sticky: number;
      fixed: number;
      overlay: number;
      modal: number;
      toast: number;
    };
  }
}