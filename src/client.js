import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; // <-- ВОТ ЭТА СТРОКА ПОТЕРЯЛАСЬ!

export const client = createClient({
    projectId: 'benrexjk', // Его можно найти в папке studio в файле sanity.config.js
    dataset: 'production',       // Обычно это production
    useCdn: true,                // true для быстрой загрузки (кэширование)
    apiVersion: '2024-03-25',    // Текущая дата для версии API
});
// Добавляем билдер для картинок
const builder = imageUrlBuilder(client);

// Функция, которую мы будем вызывать в компоненте для получения ссылки на картинку
export const urlFor = (source) => {
    return builder.image(source);
}
