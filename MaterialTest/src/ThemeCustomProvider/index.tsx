import React, { createContext, ReactNode, useContext, useState } from "react";
import i18next, { TFunction } from "i18next";
import { Interpolation, Theme } from "@emotion/react";
import ENG from "./assets/i18n/ENG.json";
import CHT from "./assets/i18n/CHT.json";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "../i18n";

interface ThemeContextType {
  colorScheme?: {
    text?: string;
    main?: string;
    secondary?: string;
    accent?: string;
  };
  fontSize?: {
    t1?: number;
    t2?: number;
    t3?: number;
    t4?: number;
    t5?: number;
  };
  size?: "small" | "middle" | "large";
  locale?: string;
  fontFamily?: string;
  t?: TFunction;
}

interface Props {
  colorScheme?: {
    text?: string;
    main?: string;
    secondary?: string;
    accent?: string;
  };
  fontSize?: {
    t1?: number;
    t2?: number;
    t3?: number;
    t4?: number;
    t5?: number;
  };
  size?: "small" | "middle" | "large";
  locale?: string;
  localeBundle?: { lng: string; ns: "translation"; resources: any }[];
  children: any;
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

export const ThemeCustomProvider = (props: Props) => {
  const contextValue: ThemeContextType = {
    colorScheme: props.colorScheme,
    locale: props.locale,
    size: props.size,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  };

  const { children } = props;

  // const i18n = i18next.createInstance();

  // i18n.use(initReactI18next).init({
  //   resources: {},
  //   lng: "ENG",
  //   fallbackLng: "ENG",
  //   interpolation: {
  //     escapeValue: false,
  //   },
  // });

  const newI18n = i18n.cloneInstance({
    forkResourceStore: true,
    resources: {},
    lng: props.locale,
  });

  props.localeBundle?.forEach((item) => {
    newI18n.addResourceBundle(item.lng, item.ns, item.resources, false, false);
  });

  console.log(i18n.getResourceBundle("CHT", "translation"));

  return (
    <div>
      <ThemeContext.Provider value={contextValue}>
        <I18nextProvider i18n={newI18n}>{children}</I18nextProvider>
      </ThemeContext.Provider>
    </div>
  );
};
