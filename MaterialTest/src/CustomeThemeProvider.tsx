import React, { createContext, ReactNode, useContext, useState } from "react";
import { TFunction } from "i18next";
import { Interpolation, Theme } from "@emotion/react";
import ENG from "./assets/i18n/ENG.json";
import CHT from "./assets/i18n/CHT.json";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

interface ThemeContextType {
  colorScheme?: {
    text?: string;
    main?: string;
    secondary?: string;
    accent?: string;
  };
  fontSize?: { h1: number; h2: number; h3: number };
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
  fontSize?: { h1: number; h2: number; h3: number };
  size?: "small" | "middle" | "large";
  locale?: string;
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

const resources = {
  ENG: {
    translation: ENG,
  },
  CHT: {
    translation: CHT,
  },
};

// const myI18n = i18next.createInstance();

// myI18n.use(initReactI18next).init({
//   resources,
//   lng: "ENG",
//   fallbackLng: "ENG",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// interface I18nContextType {
//   t: TFunction<any> | undefined;
// }

// const I18nContext = createContext<I18nContextType>({ t: myI18n.t });

// const CustomI18nProvider = (props: {
//   locale?: string;
//   children?: ReactNode;
// }) => {
//   const newI18n = myI18n.cloneInstance();
//   newI18n.init({
//     lng: props.locale,
//   });

//   return (
//     <I18nContext.Provider value={{ t: newI18n.t }}>
//       {props.children}
//     </I18nContext.Provider>
//   );
// };

// export const useI18Context = () => {
//   return useContext(I18nContext);
// };

export const ThemeCustomProvider: React.FC<Props> = (props: Props) => {
  const contextValue: ThemeContextType = {
    colorScheme: props.colorScheme,
    locale: props.locale,
    size: props.size,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  };

  const { children } = props;
  const newI18n = i18n.cloneInstance();

  newI18n.init({
    lng: props.locale,
  });

  return (
    <div>
      <I18nextProvider i18n={newI18n}>
        <ThemeContext.Provider value={contextValue}>
          {/* <CustomI18nProvider locale={props.locale}> */}
          {children}
          {/* </CustomI18nProvider> */}
        </ThemeContext.Provider>
      </I18nextProvider>
    </div>
  );
};
