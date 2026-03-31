import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PortfolioTeaser = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t('portfolio_teaser.project1_title'),
            desc: t('portfolio_teaser.project1_desc'),
            tags: ['React', 'Complex UI', 'State Management'],
            github: 'https://github.com/ptulish/educore-website',
            bgGradient: 'from-blue-500 to-indigo-600',
        },
        {
            id: 2,
            title: t('portfolio_teaser.project2_title'),
            desc: t('portfolio_teaser.project2_desc'),
            tags: ['React', 'Tailwind v4', 'Architecture'],
            github: 'https://github.com/ptulish/website-template',
            bgGradient: 'from-emerald-400 to-teal-600',
        }
    ];

    return (
        // Фон секции теперь bg-bg-base, как и везде
        <section className="py-16 md:py-20 bg-bg-base relative overflow-hidden">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">

                {/* Большая белая карточка-контейнер для поддержания единого стиля */}
                <div className="bg-white rounded-3xl p-8 md:p-16 border border-secondary/10 shadow-xl shadow-slate-200/50">

                    {/* Заголовок секции */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4">
                                {t('portfolio_teaser.section_title')}
                            </h2>
                            <p className="text-xl text-text-muted">
                                {t('portfolio_teaser.section_subtitle')}
                            </p>
                        </div>

                        {/* Кнопка перехода в полное портфолио для десктопа */}
                        <Link
                            to="/portfolio"
                            className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors group"
                        >
                            {t('portfolio_teaser.see_all_button')}
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Сетка проектов (2 колонки) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                // Внутренние карточки проектов теперь на сером фоне bg-bg-base для контраста с белым контейнером
                                className="group flex flex-col bg-bg-base rounded-2xl overflow-hidden border border-secondary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-md"
                            >
                                {/* Блок изображения */}
                                <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-100">
                                    {/* Заглушка вместо картинки */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-90 group-hover:scale-105 transition-transform duration-500`}></div>

                                    {/* Оверлей при наведении */}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-2 bg-white text-slate-900 rounded-full font-medium hover:bg-primary-light transition-colors"
                                        >
                                            {t('portfolio_teaser.view_github')}
                                        </a>
                                    </div>
                                </div>

                                {/* Описание проекта */}
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted mb-6 flex-1">
                                        {project.desc}
                                    </p>

                                    {/* Теги технологий */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                // Теги сделаны белыми, чтобы выделяться на сером фоне карточки
                                                className="px-3 py-1 text-xs font-medium text-secondary-dark bg-white border border-secondary/10 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка для мобилок */}
                    <div className="mt-10 text-center md:hidden">
                        <Link
                            to="/portfolio"
                            className="inline-flex px-8 py-3 bg-primary-light text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                        >
                            {t('portfolio_teaser.see_all_button')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioTeaser;
