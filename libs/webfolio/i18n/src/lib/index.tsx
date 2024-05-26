import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LastUsed from 'locize-lastused';
// import HttpApi from 'i18next-http-backend';

import enMain from './locales/en/main.json';
import enCv from './locales/en/cv.json';
import itMain from './locales/it/main.json';
import itCv from './locales/it/cv.json';

export const defaultNS = 'main';
export const fallbackNS = 'main';

const isProduction = process.env.NODE_ENV === 'production';

const locizeOptions = {
  // projectId: process.env.REACT_APP_LOCIZE_PROJECTID as string,
  // apiKey: process.env.REACT_APP_LOCIZE_APIKEY as string, // YOU should not expose your apps API key to production!!!
  // referenceLng: process.env.REACT_APP_LOCIZE_REFLNG as string,
  // version: process.env.REACT_APP_LOCIZE_VERSION as string
  projectId: 'webfolio',
  apiKey: 'asdasdasd',
  referenceLng: 'en',
  version: 'v0.0.0',
};

if (!isProduction) {
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  i18n.use(LastUsed);
}

i18n
  // locize-editor
  // InContext Editor of locize
  // .use(locizePlugin) // will show the incontext editor only if passing ?incontext=true
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    defaultNS,
    fallbackNS,
    resources: {
      en: {
        main: enMain,
        cv: enCv,
      },
      it: {
        main: itMain,
        cv: itCv,
      },
    },
    // backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    saveMissing: !isProduction, // you should not use saveMissing in production
  });

export default i18n;
