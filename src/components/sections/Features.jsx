import React from 'react';
import { useTranslation } from 'react-i18next';
import { BadgeCheck, Zap, Palette } from 'lucide-react';

const Features = () => {
    const { t } = useTranslation();

    const featuresList = [
        {
            id: 1,
            icon: <BadgeCheck className="h-5 w-5" />,
            title: t('features.card1_title'),
            desc: t('features.card1_desc')
        },
        {
            id: 2,
            icon: <Zap className="h-5 w-5" />,
            title: t('features.card2_title'),
            desc: t('features.card2_desc')
        },
        {
            id: 3,
            icon: <Palette className="h-5 w-5" />,
            title: t('features.card3_title'),
            desc: t('features.card3_desc')
        }
    ];

    const bottomPoints = t('features.bottom_points', { returnObjects: true });

    return (
        <section className="bg-bg-base py-24 md:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Header */}
                <div className="mb-14 max-w-3xl md:mb-16">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                        {t('features.badge')}
                    </p>

                    <h2 className="mb-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-text-main md:text-5xl xl:text-6xl">
                        {t('features.section_title')}
                    </h2>

                    <p className="max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
                        {t('features.section_subtitle')}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {featuresList.map((feature) => (
                        <article
                            key={feature.id}
                            className="group rounded-[1.75rem] border border-secondary/10 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)] md:p-8"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                {feature.icon}
                            </div>

                            <h3 className="mb-3 text-2xl font-bold leading-tight text-text-main">
                                {feature.title}
                            </h3>

                            <p className="text-base leading-relaxed text-text-muted">
                                {feature.desc}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Bottom points */}
                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-secondary/10 pt-8 md:grid-cols-3">
                    {bottomPoints?.map((point, index) => (
                        <div
                            key={index}
                            className="rounded-[1.5rem] border border-secondary/10 bg-bg-base px-5 py-4 text-sm font-medium leading-relaxed text-text-muted"
                        >
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
