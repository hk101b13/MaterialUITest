import React, { createContext, useState, ReactNode } from "react";

interface Theme {
  main?: string;
  contrastText?: string;
  dark?: string;
  light?: string;
}

interface ThemeContextType {
  theme: Theme;
}

interface Props {
  theme: Theme;
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
