import React, { createContext, useState, ReactNode } from "react";

interface ColorScheme {
  contrastText?: string;
  main?: string;
  secondary?: string;
  accent?: string;
}

interface ThemeContextType {
  theme: { colorScheme?: ColorScheme; fontSize?: number };
}

interface Props {
  theme: { colorScheme: ColorScheme; fontSize?: number };
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: {},
});

export const ThemeCustomProvider: React.FC<Props> = ({ theme, children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
