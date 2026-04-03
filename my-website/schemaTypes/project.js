export default {
    name: 'project',
    title: 'Проекты',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Название проекта',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Описание',
            type: 'text',
        },
        {
            name: 'category',
            title: 'Категория (ID)',
            type: 'string',
            description: 'Например: platform, react, landing',
            options: {
                list: [
                    { title: 'Платформа', value: 'platform' },
                    { title: 'React-приложение', value: 'react' },
                    { title: 'Лендинг', value: 'landing' },
                ],
            },
        },
        {
            name: 'tags',
            title: 'Технологии (Теги)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Добавь теги, нажимая Enter',
        },
        {
            name: 'github',
            title: 'Ссылка на GitHub',
            type: 'url',
        },
        {
            name: 'demo',
            title: 'Ссылка на Demo',
            type: 'url',
        },
        {
            name: 'bgGradient',
            title: 'Градиент фона (Tailwind классы)',
            type: 'string',
            description: 'Например: from-sky-400 via-blue-500 to-blue-700',
        },
        {
            name: 'accent',
            title: 'Акцентный цвет (Tailwind классы)',
            type: 'string',
            description: 'Например: bg-sky-500/10 text-sky-700 border-sky-500/20',
        }
    ],
}
