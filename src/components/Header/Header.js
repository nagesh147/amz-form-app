import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <div className=" App App-header">
        <h1>{t('title')}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => changeLanguage('de')}
        >
          German
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => changeLanguage('fr')}
        >
          French
        </button>
      </div>
      <h3 style={{ paddingLeft: '25px', color: 'darkslategrey' }}>
        {t('text')}
      </h3>
    </div>
  )
}
