// src/i18n.js
import { initReactI18next } from "react-i18next";
import ENG from "./assets/i18n/ENG.json";
import CHT from "./assets/i18n/CHT.json";
import i18next from "i18next";

const resources = {
  ENG: {
    translation: ENG,
  },
  CHT: {
    translation: CHT,
  },
};

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  resources,
  lng: "ENG",
  fallbackLng: "ENG",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
