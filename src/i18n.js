import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../src/assets/locales/atozdashboardapp.puff.json'
import translationFR from '../src/assets/locales/atozdashboardapp-fr.puff.json'
import translationGR from '../src/assets/locales/atozdashboardapp-de.puff.json'

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

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  whitelist: availableLanguages,
  debug: true,
  detection: {
    order: ['htmlTag', 'navigator'],
  },
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
