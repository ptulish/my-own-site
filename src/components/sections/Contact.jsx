import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, Sparkles, ArrowRight } from 'lucide-react';

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
        <section className="relative overflow-hidden bg-bg-base py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-[8%] bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12 xl:p-16">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-16">
                        {/* Left */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                                <Sparkles className="h-4 w-4" />
                                {t('contact.badge')}
                            </div>

                            <h2 className="mb-6 max-w-lg text-2xl font-extrabold leading-[1.05] text-text-main md:text-3xl xl:text-5xl">
                                {t('contact.title')}
                            </h2>

                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
                                {t('contact.subtitle')}
                            </p>

                            <div className="space-y-4">
                                {contactItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                        className="group flex items-center gap-4 rounded-[1.5rem] border border-primary/10 bg-bg-base/80 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                            {item.icon}
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-primary">
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
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-white to-bg-base p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(1,105,111,0.06),transparent_35%)]" />

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                            {t('contact.form_badge')}
                                        </p>
                                        <h3 className="text-2xl font-bold text-text-main md:text-3xl">
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
                                                className="w-full rounded-2xl border border-secondary/15 bg-white/90 px-4 py-3.5 text-text-main outline-none transition-all duration-300 placeholder:text-text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
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
                                                className="w-full rounded-2xl border border-secondary/15 bg-white/90 px-4 py-3.5 text-text-main outline-none transition-all duration-300 placeholder:text-text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-text-main">
                                                {t('contact.form_message')}
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                placeholder={t('contact.placeholder_message')}
                                                className="w-full resize-none rounded-2xl border border-secondary/15 bg-white/90 px-4 py-3.5 text-text-main outline-none transition-all duration-300 placeholder:text-text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(1,105,111,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                                        >
                                            {t('contact.submit_button')}
                                            <ArrowRight className="h-5 w-5" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
