import React, {useEffect, useMemo, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Code2, Layers3, Filter, Sparkles } from 'lucide-react';
import {client} from '../../client';
const PortfolioPage = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    // Представим, что это данные из API. В будущем можно добавить 'imageUrl'
    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // Загружаем данные из Sanity
    useEffect(() => {
        // GROQ — это язык запросов Sanity. Мы просим все документы с типом "project"
        const query = '*[_type == "project"]';

        client.fetch(query)
            .then((data) => {
                setAllProjects(data);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    const filters = [
        { id: 'all', label: t('portfolio_page.filter_all') },
        { id: 'react', label: t('portfolio_page.filter_react') },
        { id: 'landing', label: t('portfolio_page.filter_landing') },
        { id: 'platform', label: t('portfolio_page.filter_platform') }
    ];

    const filteredProjects = useMemo(() => {
        return activeFilter === 'all'
            ? allProjects
            : allProjects.filter(project => project.category === activeFilter);
    }, [activeFilter, allProjects]);

    const featuredProject = filteredProjects[0];
    const otherProjects = filteredProjects.slice(1);

    const projectsCountText =
        filteredProjects.length === 1
            ? t('portfolio_page.projects_overview_count_one', { count: filteredProjects.length })
            : t('portfolio_page.projects_overview_count_other', { count: filteredProjects.length });
// Если данные еще грузятся, можно показать лоадер
    if (isLoading) return <div className="text-white text-center py-20">Загрузка проектов...</div>;
    return (
        <div className="relative min-h-screen overflow-hidden bg-bg-base py-16 md:py-24">
            {/* --- Декоративные фоновые пятна (без изменений) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute top-[25%] right-[10%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute bottom-[10%] left-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* --- Заголовок страницы (без изменений) --- */}
                <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                        <Sparkles className="h-4 w-4" />
                        {t('portfolio_page.badge')}
                    </span>

                    <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-text-main md:text-7xl">
                        {t('portfolio_page.title')}
                    </h1>

                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-muted md:text-xl">
                        {t('portfolio_page.subtitle')}
                    </p>
                </div>

                {/* --- Панель фильтров (без изменений) --- */}
                <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/40 bg-white/65 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl md:mb-14 md:flex-row md:px-6 hover:shadow-[0_12px_45px_rgba(15,23,42,0.1)] transition-shadow duration-300">
                    <div className="flex items-center gap-3 text-text-main">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Filter className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-text-main">
                                {t('portfolio_page.projects_overview_title')}
                            </p>
                            <p className="text-sm text-text-muted">
                                {projectsCountText}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter) => {
                            const isActive = activeFilter === filter.id;

                            return (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out transform ${
                                        isActive
                                            ? 'bg-gradient-to-r from-primary to-cyan-600 text-white shadow-lg shadow-primary/20 scale-105'
                                            : 'border border-secondary/10 bg-white text-text-muted hover:border-primary/20 hover:bg-primary/5 hover:text-primary hover:scale-102'
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* --- Избранный проект (Улучшены ховеры и тени) --- */}
                {featuredProject ? (
                    <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/65 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(15,23,42,0.15)]">
                            <div className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br ${featuredProject.bgGradient} p-8 md:min-h-[380px] md:p-10 transition-transform duration-500 group-hover:scale-[1.02]`}>
                                {/* Фоновый узор */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_30%)]" />

                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="inline-flex rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                            {t('portfolio_page.featured_badge')}
                                        </span>

                                        <div className="rounded-2xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-12">
                                            <Layers3 className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="max-w-2xl mt-auto">
                                        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl transition-colors group-hover:text-cyan-100">
                                            {featuredProject.title}
                                        </h2>
                                        <p className="max-w-xl text-sm leading-relaxed text-white/85 md:text-base transition-opacity group-hover:text-white">
                                            {featuredProject.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-2.5">
                                        {featuredProject.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Правая колонка избранного проекта */}
                        <div className="flex flex-col justify-between gap-6">
                            <div className="rounded-[2rem] border border-white/40 bg-white/65 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_45px_rgba(15,23,42,0.1)] hover:-translate-y-0.5">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    {t('portfolio_page.focus_label')}
                                </p>
                                <h3 className="mb-4 text-2xl font-bold text-text-main">
                                    {t('portfolio_page.focus_title')}
                                </h3>
                                <p className="text-base leading-relaxed text-text-muted transition-colors hover:text-text-main">
                                    {t('portfolio_page.focus_text')}
                                </p>
                            </div>

                            <div className="rounded-[2rem] border border-white/40 bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white shadow-[0_16px_50px_rgba(15,23,42,0.18)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.25)] hover:-translate-y-1">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                    {t('portfolio_page.links_label')}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {featuredProject.demo !== "#" && (
                                        <a
                                            href={featuredProject.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-lg active:scale-95"
                                        >
                                            {t('portfolio_page.view_demo')}
                                            <ArrowUpRight className="h-4.5 w-4.5" />
                                        </a>
                                    )}

                                    {featuredProject.github !== "#" && (
                                        <a
                                            href={featuredProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95"
                                        >
                                            <Code2 className="h-4.5 w-4.5" />
                                            {t('portfolio_page.view_code')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

                {/* --- Сетка остальных проектов (Улучшенные ховеры) --- */}
                {filteredProjects.length > 1 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {otherProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/40 bg-white/65 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
                            >
                                <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${project.bgGradient}`}>
                                    {/* Узор и ховер-эффект на фон */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)] transition-transform duration-700 group-hover:scale-110" />

                                    <div className="absolute left-5 top-5">
                                        <span className={`inline-flex rounded-full border bg-white/80 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-sm shadow-inner ${project.accent}`}>
                                            {project.categoryLabel}
                                        </span>
                                    </div>

                                    {/* Кнопки при наведении (появляются плавнее) */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                                        <div className="flex gap-3 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                            {project.demo !== "#" && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-xl transition-colors hover:bg-cyan-50 active:scale-95"
                                                >
                                                    {t('portfolio_page.view_demo')}
                                                </a>
                                            )}

                                            {project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-slate-950/80 active:scale-95"
                                                >
                                                    <Code2 className="h-4 w-4" />
                                                    {t('portfolio_page.view_code')}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-7">
                                    <h3 className="mb-3 text-2xl font-bold text-text-main transition-colors duration-300 group-hover:text-primary">
                                        {project.title}
                                    </h3>

                                    <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted md:text-base transition-colors duration-300 group-hover:text-text-main/90">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-2.5 pt-4 border-t border-secondary/5">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : filteredProjects.length === 1 ? (
                    // Состояние с одним проектом (без изменений)
                    <div className="rounded-[2rem] border border-white/40 bg-white/65 p-10 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_45px_rgba(15,23,42,0.1)]">
                        <p className="text-base text-text-muted">
                            {t('portfolio_page.single_project_state')}
                        </p>
                    </div>
                ) : (
                    // Пустое состояние (без изменений)
                    <div className="rounded-[2rem] border border-white/40 bg-white/65 p-12 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                        <p className="text-lg text-text-muted">
                            {t('portfolio_page.empty_state')}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;
