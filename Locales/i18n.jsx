import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import albanian from "./albanian.json";
import chinese from "./chinese.json";
import english from "./english.json";
import swedish from "./swedish.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "sw",
  resources: {
    al: albanian,
    ch: chinese,
    en: english,
    sw: swedish,
  },

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18next;
