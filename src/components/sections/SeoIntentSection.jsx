import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SeoIntentSection = () => {
    const { t, i18n } = useTranslation();
    const normalizedLanguage = i18n.language?.slice(0, 2) || 'en';
    const items = t('seo_content.items', { returnObjects: true });

    const buildLocalizedPath = (path) =>
        normalizedLanguage === 'en' ? path : `${path}?lang=${normalizedLanguage}`;

    return (
        <section className="bg-bg-base py-20 md:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    {t('seo_content.badge')}
                </p>

                <h2 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight text-text-main md:text-4xl">
                    {t('seo_content.title')}
                </h2>

                <p className="mb-10 max-w-4xl text-lg leading-relaxed text-text-muted">
                    {t('seo_content.intro')}
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {Array.isArray(items) && items.map((item, index) => (
                        <article
                            key={index}
                            className="rounded-[1.5rem] border border-secondary/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                        >
                            <h3 className="mb-3 text-xl font-bold text-text-main">{item.title}</h3>
                            <p className="text-base leading-relaxed text-text-muted">{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                        to={buildLocalizedPath('/portfolio')}
                        className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                    >
                        {t('seo_content.cta_portfolio')}
                    </Link>
                    <Link
                        to={buildLocalizedPath('/story')}
                        className="inline-flex items-center rounded-full border border-secondary/20 bg-white px-6 py-3 text-sm font-bold text-text-main transition hover:border-primary/30 hover:text-primary"
                    >
                        {t('seo_content.cta_story')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SeoIntentSection;
