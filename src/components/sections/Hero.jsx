import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Code2, Globe, Layers3 } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    const heroPoints = [
        {
            id: 1,
            icon: <Code2 className="h-4 w-4" />,
            text: t('hero.point_1')
        },
        {
            id: 2,
            icon: <Globe className="h-4 w-4" />,
            text: t('hero.point_2')
        },
        {
            id: 3,
            icon: <Layers3 className="h-4 w-4" />,
            text: t('hero.point_3')
        }
    ];

    const techStack = t('hero.tech_items', { returnObjects: true });

    return (
        <section className="relative isolate overflow-hidden bg-bg-base pb-24 pt-24 md:pb-32 md:pt-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-[10%] top-[18%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute bottom-[5%] left-[22%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_45%)]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Верхняя часть */}
                <div className="mb-14 max-w-6xl md:mb-16">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                        </span>
                        <Sparkles className="h-4 w-4" />
                        {t('hero.status')}
                    </div>

                    <h1 className="max-w-5xl text-left text-5xl font-extrabold leading-[0.95] tracking-tight text-text-main md:text-7xl xl:text-8xl">
                        {t('hero.title_part1')}
                        <span className="mt-2 block bg-gradient-to-r from-primary via-cyan-600 to-primary-hover bg-clip-text text-transparent">
                            {t('hero.title_part2')}
                        </span>
                    </h1>
                </div>

                {/* Нижняя часть */}
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
                    {/* Левая нижняя часть */}
                    <div className="max-w-2xl">
                        <p className="mb-10 text-lg leading-relaxed text-text-muted md:text-xl">
                            {t('hero.description')}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="mailto:ваша-почта@example.com"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(1,105,111,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto"
                            >
                                {t('hero.cta_discuss')}
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>

                            <Link
                                to="/portfolio"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-secondary/20 bg-white/75 px-8 py-4 text-base font-semibold text-text-main shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary-light sm:w-auto"
                            >
                                {t('hero.cta_portfolio')}
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-3">
                            {techStack?.map((item, index) => (
                                <span
                                    key={index}
                                    className="cursor-default rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/20 hover:bg-white hover:shadow-[0_10px_24px_rgba(1,105,111,0.10)]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Правая нижняя часть */}
                    <div className="group relative">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-cyan-400/10 to-transparent opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[0.4deg] group-hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] md:p-8">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(1,105,111,0.08),transparent_30%)] transition-transform duration-500 group-hover:scale-105" />

                            <div className="relative z-10">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                            {t('hero.card_badge')}
                                        </p>
                                        <h2 className="text-2xl font-bold text-text-main md:text-3xl">
                                            {t('hero.card_title')}
                                        </h2>
                                    </div>

                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        <Code2 className="h-6 w-6" />
                                    </div>
                                </div>

                                <p className="mb-6 max-w-lg text-base leading-relaxed text-text-muted">
                                    {t('hero.card_description')}
                                </p>

                                <div className="space-y-3">
                                    {heroPoints.map((point) => (
                                        <div
                                            key={point.id}
                                            className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-bg-base/80 px-4 py-3 shadow-sm transition-all duration-300 group-hover:border-primary/15 group-hover:bg-white/80"
                                        >
                                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15">
                                                {point.icon}
                                            </div>
                                            <p className="text-sm leading-relaxed text-text-muted md:text-base">
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
