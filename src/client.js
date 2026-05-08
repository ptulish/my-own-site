import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
    projectId: 'benrexjk', // Его можно найти в папке studio в файле sanity.config.js
    dataset: 'production',       // Обычно это production
    useCdn: true,                // true для быстрой загрузки (кэширование)
    apiVersion: '2024-03-25',    // Текущая дата для версии API
});
const builder = createImageUrlBuilder(client);

// Функция, которую мы будем вызывать в компоненте для получения ссылки на картинку
export const urlFor = (source) => {
    return builder.image(source);
};
