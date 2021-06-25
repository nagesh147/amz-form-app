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
        <button type="button" onClick={() => changeLanguage('de')}>
          German
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          English
        </button>
        <button type="button" onClick={() => changeLanguage('fr')}>
          French
        </button>

        <p>{t('text')}</p>
      </div>
      <h2 style={{ paddingLeft: '25px' }}>{t('text')}</h2>
    </div>
  )
}
