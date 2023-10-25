import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import i18n from "./i18n";
import { Interpolation, Theme } from "@emotion/react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/i18n/en.json";
import tw from "./assets/i18n/zh-TW.json";
import { useTranslation } from "react-i18next";

interface ThemeContextType {
  colorScheme?: {
    text?: string;
    main?: string;
    secondary?: string;
    accent?: string;
  };
  fontSize?: { h1: number; h2: number; h3: number };
  size?: "small" | "middle" | "large";
  lang?: string;
  fontFamily?: string;
  // zIndex?: number;
  // level?: "error" | "warning" | "normal";
  // loading?: boolean;
}

interface Props {
  colorScheme?: {
    text?: string;
    main?: string;
    secondary?: string;
    accent?: string;
  };
  fontSize?: { h1: number; h2: number; h3: number };
  size?: "small" | "middle" | "large";
  lang?: string;
  children: ReactNode;
  fontFamily?: string;
}

export const AddImportantToStyles = (
  styles: Interpolation<Theme> | undefined | null
) => {
  if (!styles) {
    return {};
  }
  const importantStyles = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] === "object") {
      importantStyles[key] = AddImportantToStyles(styles[key]);
      return;
    }

    if (styles[key].includes("!important")) {
      importantStyles[key] = styles[key];
    } else {
      importantStyles[key] = `${styles[key]} !important`;
    }
  });
  return importantStyles;
};

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeCustomProvider: React.FC<Props> = (props: Props) => {
  // const Language = i18next.createInstance();

  // Language.changeLanguage("zh-TW");

  useEffect(() => {
    if (props.lang) {
      i18n.changeLanguage(props.lang);
    }
  }, [props.lang]);

  const contextValue: ThemeContextType = {
    colorScheme: props.colorScheme,
    lang: props.lang,
    size: props.size,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
