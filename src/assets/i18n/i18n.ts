import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./translations/tr.json";
import en from "./translations/en.json";
import cn from "./translations/cn.json";
import he from "./translations/he.json";


const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
  cn: {
    translation: cn,
  },
  he: {
    translation: he,
  }
};

i18n
.use(initReactI18next)
.init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
