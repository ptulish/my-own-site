import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Layers3, BriefcaseBusiness, Rocket, Clock3 } from 'lucide-react';

const PricingSection = () => {
    const { t } = useTranslation();

    const pricingItems = [
        {
            id: 1,
            icon: <Layers3 className="h-5 w-5" />,
            title: t('pricing.card1_title'),
            price: t('pricing.card1_price'),
            time: t('pricing.card1_time'),
            desc: t('pricing.card1_desc'),
            points: t('pricing.card1_points', { returnObjects: true }),
            featured: false
        },
        {
            id: 2,
            icon: <BriefcaseBusiness className="h-5 w-5" />,
            title: t('pricing.card2_title'),
            price: t('pricing.card2_price'),
            time: t('pricing.card2_time'),
            desc: t('pricing.card2_desc'),
            points: t('pricing.card2_points', { returnObjects: true }),
            featured: true
        },
        {
            id: 3,
            icon: <Rocket className="h-5 w-5" />,
            title: t('pricing.card3_title'),
            price: t('pricing.card3_price'),
            time: t('pricing.card3_time'),
            desc: t('pricing.card3_desc'),
            points: t('pricing.card3_points', { returnObjects: true }),
            featured: false
        }
    ];

    return (
        <section className="relative overflow-hidden bg-bg-base py-24 md:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute right-[8%] bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="mb-14 max-w-3xl md:mb-16">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                        {t('pricing.badge')}
                    </p>

                    <h2 className="mb-5 max-w-4xl text-4xl font-extrabold leading-[1.05] text-text-main md:text-5xl xl:text-6xl">
                        {t('pricing.section_title')}
                    </h2>

                    <p className="max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
                        {t('pricing.section_subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    {pricingItems.map((item) => (
                        <article
                            key={item.id}
                            className={`group relative overflow-hidden rounded-[2rem] border p-8 transition-all duration-300 md:p-9 ${
                                item.featured
                                    ? 'border-primary/20 bg-gradient-to-br from-white to-primary/5 shadow-[0_24px_60px_rgba(1,105,111,0.10)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(1,105,111,0.14)]'
                                    : 'border-secondary/10 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]'
                            }`}
                        >


                            <div className="mb-6 flex items-start justify-between gap-4">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                                    item.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                                }`}>
                                    {item.icon}
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    <div className={`rounded-full px-4 py-2 text-sm font-semibold ${
                                        item.featured
                                            ? 'bg-primary text-white'
                                            : 'bg-primary/10 text-primary'
                                    }`}>
                                        {item.price}
                                    </div>

                                    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-bg-base/80 px-3 py-1.5 text-xs font-semibold text-text-muted">
                                        <Clock3 className="h-3.5 w-3.5" />
                                        {item.time}
                                    </div>
                                </div>
                            </div>

                            <h3 className="mb-3 text-2xl font-bold leading-tight text-text-main md:text-3xl">
                                {item.title}
                            </h3>

                            <p className="mb-6 text-base leading-relaxed text-text-muted">
                                {item.desc}
                            </p>

                            <div className="mb-8 space-y-3">
                                {item.points?.map((point, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl border border-secondary/10 bg-bg-base/70 px-4 py-3 text-sm font-medium leading-relaxed text-text-muted"
                                    >
                                        {point}
                                    </div>
                                ))}
                            </div>

                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-hover">
                                {t('pricing.cta_label')}
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
