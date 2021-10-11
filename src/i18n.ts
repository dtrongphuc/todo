import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export default i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV !== 'production',
    lng: 'vi', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function interpolation#unescape
    },
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
  });
