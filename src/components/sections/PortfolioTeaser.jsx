import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, LayoutGrid, Sparkles } from 'lucide-react';
import { client, urlFor } from '../../client'; // Путь к клиенту Sanity

const PortfolioTeaser = () => {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Берем ровно 2 проекта. Сначала те, у которых стоит галочка isFeatured, потом по порядку
        const query = '*[_type == "project"] | order(isFeatured desc, order asc)[0...2]';

        client.fetch(query)
            .then((data) => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    // Функция выбора языка
    const getLocalizedDescription = (project) => {
        const lang = i18n.language;
        if (lang === 'en' && project.description_en) return project.description_en;
        if (lang === 'lv' && project.description_lv) return project.description_lv;
        return project.description_ru || 'Описание отсутствует';
    };

    // Переводы бейджиков категорий
    const categoryLabels = {
        landing: t('portfolio_page.categories.landing.label', 'Landing'),
        ecommerce: t('portfolio_page.categories.ecommerce.label', 'E-Commerce'),
        webapp: 'Web Apps',
        tools: 'Tools'
    };

    if (isLoading) {
        return (
            <div className="py-24 flex justify-center items-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
            </div>
        );
    }

    return (
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">

            {/* Верхняя часть с заголовком и кнопкой */}
            <div className="mb-14 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        <Sparkles className="h-4 w-4" />
                        {t('portfolio_teaser.portfolio_badge', 'Избранное')}
                    </div>
                    <h2 className="text-4xl font-extrabold text-text-main md:text-5xl">
                        {t('portfolio_teaser.portfolio_title', 'Последние проекты')}
                    </h2>
                </div>

                <div className="mt-8 md:mt-0">
                    <Link
                        to="/portfolio"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-6 py-3 font-semibold text-text-main backdrop-blur-md transition-all hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-primary/20"
                    >
                        {t('portfolio_teaser.portfolio_link', 'Смотреть все работы')}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>

            {/* Сетка проектов (Стиль как на странице портфолио) */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project._id}
                        className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-white/80"
                    >
                        {/* Изображение */}
                        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient || 'from-slate-200 to-slate-300'} opacity-30`} />

                            {project.image ? (
                                <img
                                    src={urlFor(project.image).width(800).url()}
                                    alt={project.title}
                                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <LayoutGrid className="h-12 w-12 opacity-50" />
                                </div>
                            )}

                            <div className="absolute left-6 top-6">
                                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
                                    {categoryLabels[project.category] || project.category}
                                </span>
                            </div>
                        </div>

                        {/* Текст */}
                        <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                            <div>
                                <h3 className="mb-4 text-3xl font-extrabold text-text-main transition-colors duration-300 group-hover:text-primary">
                                    {project.title}
                                </h3>
                                <p className="line-clamp-3 text-base leading-relaxed text-text-muted">
                                    {getLocalizedDescription(project)}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col gap-6">
                                {/* Выводим максимум 4 тега, чтобы карточка не была перегружена */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-xl border border-white/50 bg-white/50 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm transition-colors group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/40">
                                    {project.links?.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40"
                                        >
                                            {t('portfolio_teaser.portfolio_button', 'смотреть1')}
                                            <ArrowUpRight className="h-4.5 w-4.5" />
                                        </a>
                                    )}
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200/60 bg-white/40 px-6 py-3 text-sm font-bold text-text-main backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white/80"
                                        >
                                            <Code2 className="h-4.5 w-4.5 text-slate-500" />
                                            Код
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default PortfolioTeaser;
