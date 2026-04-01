import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
    const { t } = useTranslation();

    const contactItems = [
        {
            id: 1,
            href: `mailto:${t('contact.email')}`,
            icon: <Mail className="h-5 w-5" />,
            label: t('contact.direct_email_label'),
            value: t('contact.email')
        },
        {
            id: 2,
            href: 'https://t.me/ptulish',
            icon: <Send className="h-5 w-5" />,
            label: t('contact.direct_telegram_label'),
            value: t('contact.telegram')
        }
    ];

    return (
        <section className="relative bg-bg-base py-24 md:py-32">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 gap-12 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                    {/* Left */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                                {t('contact.badge')}
                            </p>

                            <h2 className="max-w-xl text-3xl font-extrabold leading-[1.02] text-text-main md:text-4xl xl:text-5xl">
                                {t('contact.title')}
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
                                {t('contact.subtitle')}
                            </p>
                        </div>

                        <div className="mt-12 space-y-4">
                            {contactItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                    className="group flex items-center gap-4 rounded-[1.5rem] border border-secondary/10 bg-white/70 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        {item.icon}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                            {item.label}
                                        </p>
                                        <p className="truncate text-base font-medium text-text-main md:text-lg">
                                            {item.value}
                                        </p>
                                    </div>

                                    <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="rounded-[2rem] border border-secondary/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8 xl:p-10">
                        <div className="mb-8">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                                {t('contact.form_badge')}
                            </p>
                            <h3 className="text-2xl font-bold leading-tight text-text-main md:text-3xl">
                                {t('contact.form_title')}
                            </h3>
                        </div>

                        <form
                            name="contact"
                            method="POST"
                            action="/"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            className="space-y-5"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <p className="hidden" style={{ display: 'none' }}>
                                <label>
                                    <input name="bot-field" />
                                </label>
                            </p>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-text-main">
                                    {t('contact.form_name')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder={t('contact.placeholder_name')}
                                    className="w-full rounded-2xl border border-secondary/15 bg-bg-base px-4 py-4 text-text-main outline-none transition-all duration-300 placeholder:text-text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-text-main">
                                    {t('contact.form_email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder={t('contact.placeholder_email')}
                                    className="w-full rounded-2xl border border-secondary/15 bg-bg-base px-4 py-4 text-text-main outline-none transition-all duration-300 placeholder:text-text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-text-main">
                                    {t('contact.form_message')}
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="6"
                                    placeholder={t('contact.placeholder_message')}
                                    className="w-full resize-none rounded-2xl border border-secondary/15 bg-bg-base px-4 py-4 text-text-main outline-none transition-all duration-300 placeholder:text-text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(1,105,111,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                {t('contact.submit_button')}
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
