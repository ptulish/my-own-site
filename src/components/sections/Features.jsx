import React from 'react';
import { useTranslation } from 'react-i18next';
import { BadgeCheck, Zap, Palette, Sparkles } from 'lucide-react';

const Features = () => {
    const { t } = useTranslation();

    const featuresList = [
        {
            id: 1,
            icon: <BadgeCheck className="h-6 w-6" />,
            title: t('features.card1_title'),
            desc: t('features.card1_desc')
        },
        {
            id: 2,
            icon: <Zap className="h-6 w-6" />,
            title: t('features.card2_title'),
            desc: t('features.card2_desc')
        },
        {
            id: 3,
            icon: <Palette className="h-6 w-6" />,
            title: t('features.card3_title'),
            desc: t('features.card3_desc')
        }
    ];

    const bottomPoints = t('features.bottom_points', { returnObjects: true });

    return (
        <section className="relative overflow-hidden bg-bg-base py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-16 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute right-[8%] bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12 xl:p-16">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                            <Sparkles className="h-4 w-4" />
                            {t('features.badge')}
                        </div>

                        <h2 className="mb-4 text-3xl font-extrabold text-text-main md:text-5xl">
                            {t('features.section_title')}
                        </h2>

                        <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                            {t('features.section_subtitle')}
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {featuresList.map((feature) => (
                            <article
                                key={feature.id}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-bg-base/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(1,105,111,0.06),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                                        {feature.icon}
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold leading-tight text-text-main">
                                        {feature.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-text-muted">
                                        {feature.desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Bottom row */}
                    <div className="mt-10 grid grid-cols-1 gap-4 border-t border-secondary/10 pt-8 md:grid-cols-3">
                        {bottomPoints?.map((point, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/40 bg-white/70 px-5 py-4 text-sm font-medium text-text-muted shadow-sm"
                            >
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
