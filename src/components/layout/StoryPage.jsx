import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';
import SEO from '../SEO.jsx';

const StoryPage = () => {
    const { t } = useTranslation();

    const storySections = [
        {
            title: t('story_page.section_1_title'),
            text: t('story_page.section_1_text'),
            image: '📚'
        },
        {
            title: t('story_page.section_2_title'),
            text: t('story_page.section_2_text'),
            image: '🇦🇹'
        },
        {
            title: t('story_page.section_3_title'),
            text: t('story_page.section_3_text'),
            image: '🚤'
        },
        {
            title: t('story_page.section_4_title'),
            text: t('story_page.section_4_text'),
            image: '🗺️'
        },
        {
            title: t('story_page.section_5_title'),
            text: t('story_page.section_5_text'),
            image: '💻'
        }
    ];

    return (
        <>
            <SEO
                title={t('seo.story_title', 'My Story')}
                description={t('seo.story_description', 'How Pavels Tuliss moved from first coding projects to industrial systems and modern web development.')}
                url="/story"
            />
            <div className="relative py-20 md:py-28 bg-gradient-to-br from-bg-base via-primary/5 to-blue-50 min-h-screen overflow-hidden">
            {/* Фоновые элементы */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl mx-auto z-10">

                {/* Заголовок */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-text-main via-primary to-blue-600">
                        {t('story_page.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted font-medium">
                        {t('story_page.subtitle')}
                    </p>
                </div>

                {/* История по секциям */}
                <div className="space-y-20 mb-24">
                    {storySections.map((section, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:flex-row-reverse'}`}>

                            {/* Изображение/эмодзи */}
                            <div className="w-32 h-32 rounded-3xl bg-primary/10 flex items-center justify-center text-5xl lg:order-first">
                                <span>{section.image}</span>
                            </div>

                            {/* Текст */}
                            <div className="lg:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                                    {section.title}
                                </h2>
                                <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                                    {section.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA блок */}
                <div className="text-center py-20 px-8 rounded-3xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('story_page.cta_title')}
                    </h2>
                    <p className="text-xl mb-10 opacity-90">
                        {t('story_page.cta_text')}
                    </p>
                    <div className="inline-flex items-center gap-3 px-8 py-5 bg-white text-primary font-bold text-lg rounded-2xl hover:bg-opacity-90 transition-all group-hover:scale-105 shadow-2xl hover:shadow-3xl">
                        <Mail className="w-5 h-5" />
                        Написать мне
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default StoryPage;
