import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactCTA = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 md:py-20 bg-bg-base relative overflow-hidden">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-8 md:p-16 border border-secondary/10 shadow-xl shadow-slate-200/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Левая колонка */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6">
                                {t('contact.title')}
                            </h2>
                            <p className="text-xl text-text-muted mb-10 leading-relaxed">
                                {t('contact.subtitle')}
                            </p>

                            <div className="space-y-6">
                                <p className="text-sm font-semibold text-secondary uppercase tracking-wider">
                                    {t('contact.direct_contact')}
                                </p>

                                {/* Почта */}
                                <a href={`mailto:${t('contact.email')}`} className="flex items-center gap-4 text-text-main hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-medium">{t('contact.email')}</span>
                                </a>

                                {/* Telegram */}
                                <a href="https://t.me/ptulish" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-main hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-medium">{t('contact.telegram')}</span>
                                </a>
                            </div>
                        </div>

                        {/* Правая колонка с формой для NETLIFY */}
                        <div className="bg-bg-base rounded-2xl p-8 border border-secondary/10">
                            {/* Главные атрибуты для Netlify: name, data-netlify, action */}
                            {/* Обратите внимание на action="/" и скрытый инпут form-name */}
                            <form name="contact" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">

                                {/* Обязательное скрытое поле для React-приложений */}
                                <input type="hidden" name="form-name" value="contact" />

                                {/* Защита от ботов */}
                                <p className="hidden" style={{ display: 'none' }}>
                                    <label>Не заполняйте это: <input name="bot-field" /></label>
                                </p>

                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        {t('contact.form_name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="name" // ОБЯЗАТЕЛЬНО
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-secondary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        placeholder={t('contact.placeholder_name')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        {t('contact.form_email')}
                                    </label>
                                    <input
                                        type="email"
                                        name="email" // ОБЯЗАТЕЛЬНО
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-secondary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        placeholder={t('contact.placeholder_email')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        {t('contact.form_message')}
                                    </label>
                                    <textarea
                                        name="message" // ОБЯЗАТЕЛЬНО
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-secondary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                        placeholder={t('contact.placeholder_message')}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg transition-all active:scale-95 shadow-md hover:shadow-primary/30"
                                >
                                    {t('contact.submit_button')}
                                </button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
