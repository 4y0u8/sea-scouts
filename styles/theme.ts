// styles/theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#1E5B8A',
    secondary: '#2E854E',
    accent: '#F5B041',
    background: '#F0F4F8',
    lightBackground: '#FFFFFF', // Added to match type definition
    darkBackground: '#1A2E40', // Changed from 'dark' to 'darkBackground'
    hover: '#F5B041',
    text: '#1A2E40',
    textLight: '#7f8c8d', // Added to match type definition
    textDark: '#1A2E40',
    textInverted: '#FFFFFF', // Added to match type definition
    success: '#27ae60', // Added to match type definition
    warning: '#f39c12', // Added to match type definition
    error: '#e74c3c', // Added to match type definition
    info: '#3498db', // Added to match type definition
    white: '#FFFFFF',
    lightGray: '#ecf0f1', // Added to match type definition
    gray: '#95a5a6', // Added to match type definition
    darkGray: '#34495e', // Added to match type definition
    black: '#000000', // Added to match type definition
    primaryRGB: '30, 91, 138', // Added to match type definition
    secondaryRGB: '46, 133, 78', // Added to match type definition
    accentRGB: '245, 176, 65' // Added to match type definition
  },
  fonts: {
    primary: "'Cairo', sans-serif", // Changed from 'main' to 'primary'
    secondary: "'Cairo', sans-serif", // Added to match type definition
    arabic: "'Cairo', sans-serif",
    light: 300, // Added to match type definition
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900 // Added to match type definition
  },
  transitions: {
    fast: 'all 0.15s ease',
    medium: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    default: 'all 0.3s ease'
  },
  spacing: {
    xxsmall: '0.25rem', // Added to match type definition
    xsmall: '0.5rem', // Added to match type definition
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '3rem', // Added to match type definition
    xxlarge: '4rem', // Added to match type definition
    containerPadding: '2rem', // Changed from 'mainPadding' to 'containerPadding'
    sectionPadding: '5rem 2rem',
    mobilePadding: '1rem',
    desktopPadding: '4rem 2rem' // Added to match type definition
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
    widescreen: '1400px'
  },
  fontSizes: {
    xsmall: '0.75rem', // Added to match type definition
    small: '0.875rem', // Added to match type definition
    medium: '1rem', // Added to match type definition
    large: '1.25rem', // Added to match type definition
    xlarge: '1.5rem', // Added to match type definition
    xxlarge: '2rem', // Added to match type definition
    heading1: '3rem', // Added to match type definition
    heading2: '2.5rem', // Added to match type definition
    heading3: '2rem', // Added to match type definition
    heading4: '1.5rem' // Added to match type definition
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12)', // Added to match type definition
    medium: '0 4px 6px rgba(0,0,0,0.1)', // Added to match type definition
    large: '0 10px 15px rgba(0,0,0,0.1)', // Added to match type definition
    inset: 'inset 0 2px 4px rgba(0,0,0,0.06)', // Added to match type definition
    card: '0 4px 8px rgba(0, 0, 0, 0.2)',
    text: '0 2px 4px rgba(0,0,0,0.1)', // Added to match type definition
    hover: '0 15px 30px rgba(0,0,0,0.15)'
  },
  borders: {
    thin: '1px solid', // Added to match type definition
    medium: '2px solid', // Added to match type definition
    thick: '3px solid', // Added to match type definition
    radius: {
      small: '4px', // Added to match type definition
      medium: '8px', // Added to match type definition
      large: '12px', // Added to match type definition
      full: '9999px' // Added to match type definition
    }
  },
  zIndex: {
    base: 1, // Added to match type definition
    dropdown: 100, // Added to match type definition
    sticky: 200, // Added to match type definition
    fixed: 300, // Added to match type definition
    overlay: 400, // Added to match type definition
    modal: 500, // Added to match type definition
    toast: 600 // Added to match type definition
  }
};