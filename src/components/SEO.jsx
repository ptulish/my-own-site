import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, image, url, type = 'website' }) => {
        const { i18n, t } = useTranslation();

        const normalizedLanguage = i18n.language?.slice(0, 2) || 'en';
        const ogLocaleMap = {
            en: 'en_US',
            ru: 'ru_RU',
            lv: 'lv_LV'
        };
        const bcp47LanguageMap = {
            en: 'en-US',
            ru: 'ru-RU',
            lv: 'lv-LV'
        };
        const currentOgLocale = ogLocaleMap[normalizedLanguage] || ogLocaleMap.en;
        const currentBcp47Language = bcp47LanguageMap[normalizedLanguage] || bcp47LanguageMap.en;
        const alternateOgLocales = Object.entries(ogLocaleMap)
            .filter(([langCode]) => langCode !== normalizedLanguage)
            .map(([, locale]) => locale);
        const siteTitle = "Pavels Tuliss | Frontend Developer";
        const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
        const defaultDescription = t(
            "seo.default_description",
            "I build modern web products and interfaces. Helping businesses launch fast and scalable websites."
        );
        const metaDescription = description || defaultDescription;
        const siteUrl = "https://ptulish.com";
        const currentPath = url || (typeof window !== "undefined" ? window.location.pathname : "/");
        const buildLanguageUrl = (langCode) =>
            langCode === "en" ? `${siteUrl}${currentPath}` : `${siteUrl}${currentPath}?lang=${langCode}`;
        const canonicalUrl = buildLanguageUrl(normalizedLanguage);
        const ogImage = image || `${siteUrl}/og-image.jpg`; // Подготовь картинку 1200x630 и положи в public
        const pathSegments = currentPath.split("/").filter(Boolean);
        const hasBreadcrumbs = pathSegments.length > 0;
        const homeUrl = normalizedLanguage === "en" ? `${siteUrl}/` : `${siteUrl}/?lang=${normalizedLanguage}`;
        const breadcrumbItems = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": homeUrl
            },
            ...pathSegments.map((segment, index) => {
                const pathSoFar = `/${pathSegments.slice(0, index + 1).join("/")}`;
                return {
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": segment.charAt(0).toUpperCase() + segment.slice(1),
                    "item": normalizedLanguage === "en"
                        ? `${siteUrl}${pathSoFar}`
                        : `${siteUrl}${pathSoFar}?lang=${normalizedLanguage}`
                };
            })
        ];
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
                    "inLanguage": currentBcp47Language,
                    "publisher": {
                        "@id": `${siteUrl}/#person`
                    }
                },
                {
                    "@type": "ProfessionalService",
                    "@id": `${siteUrl}/#service`,
                    "name": "Pavels Tuliss Frontend Development",
                    "url": siteUrl,
                    "description": metaDescription,
                    "areaServed": "Worldwide",
                    "inLanguage": ["en", "ru", "lv"],
                    "provider": {
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
                    "about": {
                        "@id": `${siteUrl}/#service`
                    },
                    "inLanguage": currentBcp47Language
                },
                ...(hasBreadcrumbs
                    ? [{
                        "@type": "BreadcrumbList",
                        "@id": `${canonicalUrl}#breadcrumb`,
                        "itemListElement": breadcrumbItems
                    }]
                    : [])
            ]
        };

        return (
            <Helmet
                script={[
                    {
                        type: "application/ld+json",
                        innerHTML: JSON.stringify(structuredData)
                    }
                ]}
            >
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

                    {/* Hreflang для мультиязычности */}
                    <link rel="alternate" href={buildLanguageUrl("ru")} hrefLang="ru" />
                    <link rel="alternate" href={buildLanguageUrl("en")} hrefLang="en" />
                    <link rel="alternate" href={buildLanguageUrl("lv")} hrefLang="lv" />
                    <link rel="alternate" href={buildLanguageUrl("en")} hrefLang="x-default" />
            </Helmet>
        );
};

export default SEO;
