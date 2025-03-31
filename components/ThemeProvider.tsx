"use client";

import React, { createContext, useState, useContext } from "react";

// Define your theme type
interface ThemeContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with proper typing
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<string>("Initial state");

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context with safety check
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};