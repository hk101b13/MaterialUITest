// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENG from "./assets/i18n/ENG.json";
import CHT from "./assets/i18n/CHT.json";

const resources = {
  ENG: {
    translation: ENG,
  },
  CHT: {
    translation: CHT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ENG",
  fallbackLng: "ENG",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
