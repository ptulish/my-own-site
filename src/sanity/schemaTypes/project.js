export default {
    name: 'project',
    title: 'Проекты',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Название проекта',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Ссылка (Slug)',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'isFeatured',
            title: '🌟 Сделать флагманом (Большая карточка)',
            type: 'boolean',
            initialValue: false,
            description: 'Если включено, проект будет занимать две колонки',
        },
        {
            name: 'category',
            title: 'Категория',
            type: 'string',
            options: {
                list: [
                    { title: 'Лендинг', value: 'landing' },
                    { title: 'Екоммерц', value: 'ecommerce' },
                    { title: 'Веб-приложение', value: 'webapp' },
                    { title: 'SaaS', value: 'saas' },
                    { title: 'Блог', value: 'blog' },
                    { title: 'Медиа', value: 'media' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        // --- ОПИСАНИЯ НА РАЗНЫХ ЯЗЫКАХ ---
        {
            name: 'description_ru',
            title: 'Описание (RU)',
            type: 'text',
            rows: 3,
        },
        {
            name: 'description_en',
            title: 'Описание (EN)',
            type: 'text',
            rows: 3,
        },
        {
            name: 'description_lv',
            title: 'Описание (LV)',
            type: 'text',
            rows: 3,
        },
        // ---------------------------------
        {
            name: 'image',
            title: 'Главное изображение',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'bgGradient',
            title: 'Градиент фона (Tailwind классы)',
            type: 'string',
            description: 'Например: from-sky-200 to-blue-200',
        },
        {
            name: 'tags',
            title: 'Стек технологий',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        },
        {
            name: 'links',
            title: 'Ссылки',
            type: 'object',
            fields: [
                { name: 'demo', title: 'Live Demo', type: 'url' },
                { name: 'github', title: 'GitHub', type: 'url' },
            ],
        },
        {
            name: 'order',
            title: 'Порядок сортировки (1 - первый)',
            type: 'number',
        }
    ],
    orderings: [
        {
            title: 'Сначала важные',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ]
}
