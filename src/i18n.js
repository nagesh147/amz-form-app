import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from '../src/assets/locales/atozdashboardapp.puff.json'
import translationFR from '../src/assets/locales/atozdashboardapp-fr.puff.json'
import translationGR from '../src/assets/locales/atozdashboardapp-de.puff.json'
import languagesMapping from '../src/assets/locales/languagesMapping.json'

const fallbackLng = ['en']
const availableLanguages = ['en', 'de', 'fr']

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationGR,
  },
  fr: {
    translation: translationFR,
  },
}

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng,
    whitelist: availableLanguages,
    debug: true,
    detection: {
      //order: ['htmlTag', 'navigator'],
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      addPath: null,
      loadPath: (languages: any, namespaces: string[]) => {
        const lang = languagesMapping[languages[0]] || languages[0]
        let app = 'atozdashboardapp'
        if (namespaces.length > 0 && namespaces[0] === 'clock_punch') {
          app = 'atozgpsclockpunch'
        }
        //return `${getTranslationsHost()}/locales/${app}-${lang}.puff.json`;
        return `/assets/locales/${app}-${lang}.puff.json`
      },
      parse: (data: any) => JSON.parse(data).resources,
      crossDomain: true,
    },
    // react i18next special options (optional)
    // https://react.i18next.com/components/i18next-instance
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'fallback',
    },
    parseMissingKeyHandler(completeKey: string) {
      return completeKey
    },
    saveMissing: true,
  })

export default i18n
