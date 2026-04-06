import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Send, Mail, Link, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    // Безопасный набор иконок: Link для соцсетей, Send для Телеграма, Mail для почты
    const socialLinks = [
        { icon: <Link className="h-5 w-5" />, href: "https://github.com/твой-логин" },
        { icon: <Send className="h-5 w-5" />, href: "https://t.me/ptulish" },
        { icon: <ExternalLink className="h-5 w-5" />, href: "https://linkedin.com/in/твой-логин" },
        { icon: <Mail className="h-5 w-5" />, href: "mailto:ptulish@icloud.com" },
    ];

    const navLinks = [
        { name: t('nav.home', 'Home'), path: "/" },
        { name: t('nav.portfolio', 'Works'), path: "/portfolio" },
        { name: t('nav.path', 'My Path'), path: "/path" },
        { name: t('nav.story', 'Story'), path: "/story" },
    ];

    return (
        <footer className="relative border-t border-white/50 bg-white/30 backdrop-blur-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

                    {/* Брендинг */}
                    <div className="flex flex-col items-start gap-4">
                        <RouterLink to="/" className="text-2xl font-black tracking-tighter text-text-main hover:opacity-80 transition-opacity">
                            {t('footer.brand', 'PAVEL.TULISH')}
                        </RouterLink>
                        <p className="max-w-xs text-sm leading-relaxed text-text-muted">
                            {t('hero.description', 'Helping businesses launch fast, modern, and scalable websites and platforms.')}
                        </p>
                        <div className="flex gap-4 mt-2">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/60 bg-white/50 p-2 text-text-muted shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:text-primary"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Навигация */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-main">
                            {t('nav.portfolio', 'Works')}
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <RouterLink
                                    key={idx}
                                    to={link.path}
                                    className="text-sm text-text-muted transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </RouterLink>
                            ))}
                        </nav>
                    </div>

                    {/* Статус и кнопка */}
                    <div className="flex flex-col gap-6 rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-sm backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <div className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                                {t('hero.status', 'Available for new projects')}
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-text-main">
                            {t('contact.title', "Let's discuss your project")}
                        </h4>
                        <RouterLink
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-text-main px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/30 active:scale-95"
                        >
                            {t('nav.cta', 'Contact')}
                        </RouterLink>
                    </div>

                </div>

                {/* Копирайт */}
                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/40 pt-8 md:flex-row">
                    <p className="text-xs text-text-muted">
                        © {currentYear} {t('footer.brand', 'PAVEL.TULISH')}. {t('footer.rights', 'All rights reserved.')}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <span>{t('footer.made_with', 'Made with')}</span>
                        <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                        <span>{t('footer.location', 'in Riga, Latvia')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
