import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full pt-20 pb-32 flex items-center justify-center overflow-hidden">
            {/* Градиент теперь использует наш цвет primary-light */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light via-bg-base to-bg-base"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Бейдж: цвета заменены на primary и accent */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 text-primary text-sm font-medium mb-8">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    {t('hero.status')}
                </div>

                {/* Заголовок: text-main вместо slate-900 */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-text-main tracking-tight mb-6">
                    {t('hero.title_part1')} <br className="hidden md:block" />
                    {/* Градиент текста с использованием primary и primary-hover */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                        {t('hero.title_part2')}
                    </span>
                </h1>

                {/* Подзаголовок: text-muted вместо slate-600 */}
                <p className="mt-4 text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                    {t('hero.description')}
                </p>

                {/* Кнопки CTA */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    {/* Главная кнопка: bg-primary */}
                    <a href="mailto:ваша-почта@example.com" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/30">
                        {t('hero.cta_discuss')}
                    </a>
                    {/* Вторичная кнопка: цвета подстроены под bg-card и text-main */}
                    <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-bg-card hover:bg-primary-light text-text-main border border-secondary/20 rounded-xl font-semibold transition-all shadow-sm">
                        {t('hero.cta_portfolio')}
                    </Link>
                </div>

                {/* Стек технологий */}
                <div className="mt-16 pt-8 border-t border-secondary/20">
                    <p className="text-sm text-secondary mb-4 font-medium uppercase tracking-wider">{t('hero.tech_stack')}</p>
                    <div className="flex justify-center gap-6 text-secondary-dark font-semibold flex-wrap">
                        <span>React</span>
                        <span>Next.js</span>
                        <span>Tailwind CSS</span>
                        <span>TypeScript</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
