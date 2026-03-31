import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем наши будущие файлы с переводами
import translationRU from '/src/locales/ru/translation.json';
import translationEN from '/src/locales/en/translation.json';

const resources = {
    ru: { translation: translationRU },
    en: { translation: translationEN }
};

i18n
    .use(initReactI18next) // Передаем инстанс i18n в react-i18next
    .init({
        resources,
        lng: 'ru', // Язык по умолчанию
        fallbackLng: 'en', // Резервный язык, если перевод не найден
        interpolation: {
            escapeValue: false // В React защита от XSS встроена по умолчанию
        }
    });

export default i18n;
