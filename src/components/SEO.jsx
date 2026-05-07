import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, image, url, type = 'website' }) => {
        const { i18n } = useTranslation();

        const normalizedLanguage = i18n.language?.slice(0, 2) || 'en';
        const ogLocaleMap = {
            en: 'en_US',
            ru: 'ru_RU',
            lv: 'lv_LV'
        };
        const currentOgLocale = ogLocaleMap[normalizedLanguage] || ogLocaleMap.en;
        const alternateOgLocales = Object.entries(ogLocaleMap)
            .filter(([langCode]) => langCode !== normalizedLanguage)
            .map(([, locale]) => locale);
        const siteTitle = "Pavels Tuliss | Frontend Developer";
        const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
        const defaultDescription = "Создаю современные web-продукты и интерфейсы. Помогаю бизнесу запускать быстрые и масштабируемые сайты.";
        const metaDescription = description || defaultDescription;
        const siteUrl = "https://ptulish.com";
        const currentPath = url || window.location.pathname || "/";
        const buildLanguageUrl = (langCode) =>
            langCode === "en" ? `${siteUrl}${currentPath}` : `${siteUrl}${currentPath}?lang=${langCode}`;
        const canonicalUrl = buildLanguageUrl(normalizedLanguage);
        const ogImage = image || `${siteUrl}/og-image.jpg`; // Подготовь картинку 1200x630 и положи в public
        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    "@id": `${siteUrl}/#person`,
                    "name": "Pavels Tuliss",
                    "jobTitle": "Frontend Developer",
                    "url": siteUrl,
                    "image": ogImage,
                    "sameAs": [
                        "https://t.me/ptulish",
                        "https://github.com/ptulish"
                    ]
                },
                {
                    "@type": "WebSite",
                    "@id": `${siteUrl}/#website`,
                    "url": siteUrl,
                    "name": siteTitle,
                    "inLanguage": i18n.language,
                    "publisher": {
                        "@id": `${siteUrl}/#person`
                    }
                },
                {
                    "@type": "WebPage",
                    "@id": `${canonicalUrl}#webpage`,
                    "url": canonicalUrl,
                    "name": fullTitle,
                    "description": metaDescription,
                    "isPartOf": {
                        "@id": `${siteUrl}/#website`
                    },
                    "inLanguage": i18n.language
                }
            ]
        };

        return (
            <Helmet>
                    {/* Базовые теги */}
                    <title>{fullTitle}</title>
                    <meta name="description" content={metaDescription} />
                    <link rel="canonical" href={canonicalUrl} />
                    <html lang={i18n.language} />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content={type} />
                    <meta property="og:title" content={fullTitle} />
                    <meta property="og:description" content={metaDescription} />
                    <meta property="og:image" content={ogImage} />
                    <meta property="og:url" content={canonicalUrl} />
                    <meta property="og:locale" content={currentOgLocale} />
                    {alternateOgLocales.map((locale) => (
                        <meta key={locale} property="og:locale:alternate" content={locale} />
                    ))}

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={fullTitle} />
                    <meta name="twitter:description" content={metaDescription} />
                    <meta name="twitter:image" content={ogImage} />
                    <meta name="twitter:url" content={canonicalUrl} />
                    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

                    {/* Hreflang для мультиязычности */}
                    <link rel="alternate" href={buildLanguageUrl("ru")} hreflang="ru" />
                    <link rel="alternate" href={buildLanguageUrl("en")} hreflang="en" />
                    <link rel="alternate" href={buildLanguageUrl("lv")} hreflang="lv" />
                    <link rel="alternate" href={buildLanguageUrl("en")} hreflang="x-default" />
            </Helmet>
        );
};

export default SEO;
