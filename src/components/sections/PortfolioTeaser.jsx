import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Code2, Sparkles, Layers3 } from 'lucide-react';

const PortfolioTeaser = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t('portfolio_teaser.project1_title'),
            desc: t('portfolio_teaser.project1_desc'),
            tags: ['React', 'Complex UI', 'State Management'],
            github: 'https://github.com/ptulish/educore-website',
            bgGradient: 'from-blue-500 via-cyan-500 to-indigo-700',
            badge: t('portfolio_teaser.project1_badge')
        },
        {
            id: 2,
            title: t('portfolio_teaser.project2_title'),
            desc: t('portfolio_teaser.project2_desc'),
            tags: ['React', 'Tailwind v4', 'Architecture'],
            github: 'https://github.com/ptulish/website-template',
            bgGradient: 'from-emerald-400 via-teal-500 to-cyan-700',
            badge: t('portfolio_teaser.project2_badge')
        }
    ];

    const featuredProject = projects[0];
    const secondaryProject = projects[1];

    return (
        <section className="relative overflow-hidden bg-bg-base py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[6%] top-16 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute right-[8%] bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-md">
                            <Sparkles className="h-4 w-4" />
                            {t('portfolio_teaser.badge')}
                        </div>

                        <h2 className="mb-4 text-3xl font-extrabold text-text-main md:text-5xl">
                            {t('portfolio_teaser.section_title')}
                        </h2>

                        <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                            {t('portfolio_teaser.section_subtitle')}
                        </p>
                    </div>

                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 self-start rounded-2xl border border-secondary/20 bg-white/75 px-6 py-3 text-sm font-semibold text-text-main shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary-light hover:text-primary md:self-auto"
                    >
                        {t('portfolio_teaser.see_all_button')}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Layout */}
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Featured project */}
                    <article className="group overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]">
                        <div className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br ${featuredProject.bgGradient} p-8 md:min-h-[380px] md:p-10`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_30%)]" />

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div className="flex items-start justify-between gap-4">
                                    <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                        {featuredProject.badge}
                                    </span>

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md">
                                        <Layers3 className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="max-w-2xl">
                                    <h3 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                                        {featuredProject.title}
                                    </h3>

                                    <p className="max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
                                        {featuredProject.desc}
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

                        <div className="flex items-center justify-between gap-4 p-6">
                            <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                                {t('portfolio_teaser.featured_note')}
                            </p>

                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                <Code2 className="h-4 w-4" />
                                {t('portfolio_teaser.view_github')}
                            </a>
                        </div>
                    </article>

                    {/* Secondary project */}
                    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
                        <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${secondaryProject.bgGradient} p-6`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                    {secondaryProject.badge}
                                </span>

                                <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                                    {secondaryProject.title}
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <p className="mb-6 text-base leading-relaxed text-text-muted">
                                {secondaryProject.desc}
                            </p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {secondaryProject.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={secondaryProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                            >
                                <Code2 className="h-4 w-4" />
                                {t('portfolio_teaser.view_github')}
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default PortfolioTeaser;
