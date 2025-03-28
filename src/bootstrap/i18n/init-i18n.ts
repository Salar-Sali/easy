import i18next, { InitOptions, Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import en from "~/bootstrap/i18n/langs/en/en";
import ar from "~/bootstrap/i18n/langs/ar/ar";

export enum LANGS {
  AR = "ar",
  EN = "en",
}

class I18N {
  /* --------------------------------- Getters -------------------------------- */
  get prepare() {
    return i18next
      .use(initReactI18next)
      .use(BrowserLanguageDetector)
      .init({ ...this.getOptions });
  }

  /* -------------------------------------------------------------------------- */
  private get getResources(): Resource {
    return {
      [LANGS.EN]: {
        translation: en,
      },

      [LANGS.AR]: {
        translation: ar,
      },
    };
  }

  /* -------------------------------------------------------------------------- */
  private get getOptions(): InitOptions<unknown> {
    return {
      resources: this.getResources,
      fallbackLng: LANGS.EN,
      interpolation: {
        escapeValue: false,
      },
    };
  }

  /* --------------------------------- Factory -------------------------------- */
  static init() {
    const i18n = new I18N().prepare;
    return i18n;
  }
  /* -------------------------------------------------------------------------- */
}

/* -------------------------------------------------------------------------- */
const i18n = I18N.init();

export default i18n;
