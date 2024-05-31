import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import calcDefiniteIntegralsEnNS from '@/~en-ns/calc-definite-integrals.json';
import calcIndefiniteIntegralsEnNS from '@/~en-ns/calc-indefinite-integrals.json';
import globalDrawerWrapperEnNS from '@/~en-ns/global-drawer-wrapper.json';
import homeDashboardEnNS from '@/~en-ns/home-dashboard.json';
import homeIndexEnNS from '@/~en-ns/home-index.json';
import othersPageNotFoundEnNS from '@/~en-ns/others-page-not-found.json';
import calcDefiniteIntegralsEsNS from '@/~es-ns/calc-definite-integrals.json';
import calcIndefiniteIntegralsEsNS from '@/~es-ns/calc-indefinite-integrals.json';
import globalDrawerWrapperEsNS from '@/~es-ns/global-drawer-wrapper.json';
import homeDashboardEsNS from '@/~es-ns/home-dashboard.json';
import homeIndexEsNS from '@/~es-ns/home-index.json';
import othersPageNotFoundEsNS from '@/~es-ns/others-page-not-found.json';

export const defaultNS = 'home-index';
export const resources = {
  en: {
    'home-dashboard': homeDashboardEnNS,
    'home-index': homeIndexEnNS,
    'calc-definite-integrals': calcDefiniteIntegralsEnNS,
    'calc-indefinite-integrals': calcIndefiniteIntegralsEnNS,
    'global-drawer-wrapper': globalDrawerWrapperEnNS,
    'others-page-not-found': othersPageNotFoundEnNS,
  },
  es: {
    'home-dashboard': homeDashboardEsNS,
    'home-index': homeIndexEsNS,
    'calc-definite-integrals': calcDefiniteIntegralsEsNS,
    'calc-indefinite-integrals': calcIndefiniteIntegralsEsNS,
    'global-drawer-wrapper': globalDrawerWrapperEsNS,
    'others-page-not-found': othersPageNotFoundEsNS,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: { escapeValue: false },
    defaultNS,
    resources,
  });

export default i18n;
