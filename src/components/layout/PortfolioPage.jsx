import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Code2, Layers3, Filter, Sparkles } from 'lucide-react';

const PortfolioPage = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    const allProjects = [
        {
            id: 1,
            title: t('portfolio_page.projects.educore_title'),
            description: t('portfolio_page.projects.educore_description'),
            category: 'platform',
            categoryLabel: t('portfolio_page.category_platform'),
            tags: ['React', 'Complex UI', 'State Management'],
            github: 'https://github.com/ptulish/educore-website',
            demo: '#',
            bgGradient: 'from-sky-500 via-cyan-500 to-blue-700',
            accent: 'bg-sky-500/10 text-sky-700 border-sky-500/20'
        },
        {
            id: 2,
            title: t('portfolio_page.projects.template_title'),
            description: t('portfolio_page.projects.template_description'),
            category: 'react',
            categoryLabel: t('portfolio_page.category_react'),
            tags: ['React', 'Tailwind v4', 'Architecture'],
            github: 'https://github.com/ptulish/website-template',
            demo: '#',
            bgGradient: 'from-emerald-400 via-teal-500 to-cyan-700',
            accent: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
        },
        {
            id: 3,
            title: t('portfolio_page.projects.landing_title'),
            description: t('portfolio_page.projects.landing_description'),
            category: 'landing',
            categoryLabel: t('portfolio_page.category_landing'),
            tags: ['React', 'Framer Motion', 'Tailwind'],
            github: '#',
            demo: '#',
            bgGradient: 'from-orange-400 via-rose-500 to-pink-600',
            accent: 'bg-orange-500/10 text-orange-700 border-orange-500/20'
        }
    ];

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
    }, [activeFilter]);

    const featuredProject = filteredProjects[0];
    const otherProjects = filteredProjects.slice(1);

    const projectsCountText =
        filteredProjects.length === 1
            ? t('portfolio_page.projects_overview_count_one', { count: filteredProjects.length })
            : t('portfolio_page.projects_overview_count_other', { count: filteredProjects.length });

    return (
        <div className="relative min-h-screen overflow-hidden bg-bg-base py-16 md:py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute top-[25%] right-[10%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute bottom-[10%] left-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
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

                <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/40 bg-white/65 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl md:mb-14 md:flex-row md:px-6">
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
                                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                        isActive
                                            ? 'bg-gradient-to-r from-primary to-cyan-600 text-white shadow-lg shadow-primary/20'
                                            : 'border border-secondary/10 bg-white text-text-muted hover:border-primary/20 hover:bg-primary/5 hover:text-primary'
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {featuredProject ? (
                    <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/65 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
                            <div className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br ${featuredProject.bgGradient} p-8 md:min-h-[380px] md:p-10`}>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_30%)]" />

                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="inline-flex rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                            {t('portfolio_page.featured_badge')}
                                        </span>

                                        <div className="rounded-2xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md">
                                            <Layers3 className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="max-w-2xl">
                                        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                                            {featuredProject.title}
                                        </h2>
                                        <p className="max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
                                            {featuredProject.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {featuredProject.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-6">
                            <div className="rounded-[2rem] border border-white/40 bg-white/65 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    {t('portfolio_page.focus_label')}
                                </p>
                                <h3 className="mb-4 text-2xl font-bold text-text-main">
                                    {t('portfolio_page.focus_title')}
                                </h3>
                                <p className="text-base leading-relaxed text-text-muted">
                                    {t('portfolio_page.focus_text')}
                                </p>
                            </div>

                            <div className="rounded-[2rem] border border-white/40 bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white shadow-[0_16px_50px_rgba(15,23,42,0.18)]">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                    {t('portfolio_page.links_label')}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {featuredProject.demo !== "#" && (
                                        <a
                                            href={featuredProject.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
                                        >
                                            {t('portfolio_page.view_demo')}
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    )}

                                    {featuredProject.github !== "#" && (
                                        <a
                                            href={featuredProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15"
                                        >
                                            <Code2 className="h-4 w-4" />
                                            {t('portfolio_page.view_code')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

                {filteredProjects.length > 1 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {otherProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group overflow-hidden rounded-[2rem] border border-white/40 bg-white/65 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                            >
                                <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${project.bgGradient}`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)] transition-transform duration-500 group-hover:scale-105" />

                                    <div className="absolute left-5 top-5">
                                        <span className={`inline-flex rounded-full border bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur-sm ${project.accent}`}>
                                            {project.categoryLabel}
                                        </span>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <div className="flex gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            {project.demo !== "#" && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                                                >
                                                    {t('portfolio_page.view_demo')}
                                                </a>
                                            )}

                                            {project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-slate-950/70"
                                                >
                                                    <Code2 className="h-4 w-4" />
                                                    {t('portfolio_page.view_code')}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-3 text-2xl font-bold text-text-main transition-colors group-hover:text-primary">
                                        {project.title}
                                    </h3>

                                    <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted md:text-base">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"
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
                    <div className="rounded-[2rem] border border-white/40 bg-white/65 p-10 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                        <p className="text-base text-text-muted">
                            {t('portfolio_page.single_project_state')}
                        </p>
                    </div>
                ) : (
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
