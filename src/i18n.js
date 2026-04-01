import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';
import translationLV from './locales/lv/translation.json';

const resources = {
    ru: {
        translation: translationRU
    },
    en: {
        translation: translationEN
    },
    lv: {
        translation: translationLV
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
