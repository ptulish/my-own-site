import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PortfolioPage = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    // Массив всех ваших проектов
    const allProjects = [
        {
            id: 1,
            title: "Educore Platform",
            description: "Комплексная образовательная платформа. Сложный UI, продуманная архитектура компонентов и интеграция с бекендом.",
            category: "platform", // Категория для фильтрации
            tags: ["React", "Complex UI", "State Management"],
            github: "https://github.com/ptulish/educore-website",
            demo: "#", // Ссылка на демо, если есть
            bgGradient: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            title: "Modern Website Template",
            description: "Высокопроизводительный стартовый шаблон на React с настроенной архитектурой и CI/CD пайплайнами.",
            category: "react",
            tags: ["React", "Tailwind v4", "Architecture"],
            github: "https://github.com/ptulish/website-template",
            demo: "#",
            bgGradient: "from-emerald-400 to-teal-600"
        },
        // Сюда можно добавить еще проекты (например, ваши будущие лэндинги)
        {
            id: 3,
            title: "Agency Landing Page",
            description: "Быстрый лэндинг для digital-агентства с плавными анимациями и высокой конверсией.",
            category: "landing",
            tags: ["React", "Framer Motion", "Tailwind"],
            github: "#",
            demo: "#",
            bgGradient: "from-orange-400 to-rose-500"
        }
    ];

    // Кнопки фильтров
    const filters = [
        { id: 'all', label: t('portfolio_page.filter_all') },
        { id: 'react', label: t('portfolio_page.filter_react') },
        { id: 'landing', label: t('portfolio_page.filter_landing') },
        { id: 'platform', label: t('portfolio_page.filter_platform') }
    ];

    // Логика фильтрации проектов
    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    return (
        <div className="py-12 md:py-16 bg-bg-base min-h-screen">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">

                {/* Заголовок страницы */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6">
                        {t('portfolio_page.title')}
                    </h1>
                    <p className="text-xl text-text-muted">
                        {t('portfolio_page.subtitle')}
                    </p>
                </div>

                {/* Блок фильтров */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-white text-text-muted hover:bg-primary-light hover:text-primary border border-secondary/10"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Сетка проектов */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-secondary/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Изображение проекта (пока градиент) */}
                                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-90 group-hover:scale-105 transition-transform duration-500`}></div>

                                    {/* Оверлей с кнопками */}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {project.demo !== "#" && (
                                            <a href={project.demo} target="_blank" rel="noreferrer" className="px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors text-sm">
                                                {t('portfolio_page.view_demo')}
                                            </a>
                                        )}
                                        <a href={project.github} target="_blank" rel="noreferrer" className="px-5 py-2 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors text-sm">
                                            {t('portfolio_page.view_code')}
                                        </a>
                                    </div>
                                </div>

                                {/* Инфо о проекте */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-text-muted mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Теги */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 text-xs font-medium text-secondary-dark bg-bg-base border border-secondary/10 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Пустое состояние, если по фильтру ничего не найдено */
                    <div className="text-center py-20 bg-white rounded-2xl border border-secondary/10">
                        <p className="text-lg text-text-muted">{t('portfolio_page.empty_state')}</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PortfolioPage;
