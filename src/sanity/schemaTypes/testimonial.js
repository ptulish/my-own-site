export default {
    name: 'testimonial',
    title: 'Отзывы (Testimonials)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Имя (Name)',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'position',
            title: 'Должность / Роль (Position)',
            type: 'string',
        },
        {
            name: 'text_ru',
            title: 'Текст отзыва (RU)',
            type: 'text',
        },
        {
            name: 'text_en',
            title: 'Текст отзыва (EN)',
            type: 'text',
        },
        {
            name: 'text_lv',
            title: 'Текст отзыва (LV)',
            type: 'text',
        },
        {
            name: 'order',
            title: 'Порядок сортировки',
            type: 'number',
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'position'
        }
    }
}
