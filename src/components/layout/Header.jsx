import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Check, MessageCircleMore, Menu, X } from 'lucide-react';
import logoUrl from '../../../public/logo.png';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const desktopLangRef = useRef(null);
    const mobileLangRef = useRef(null);

    const languages = [
        { code: 'ru', label: 'RU', full: 'Русский' },
        { code: 'en', label: 'EN', full: 'English' },
        { code: 'lv', label: 'LV', full: 'Latviešu' }
    ];

    const normalizedLanguage = i18n.language?.slice(0, 2) || 'ru';

    const currentLanguage =
        languages.find((lang) => lang.code === normalizedLanguage) || languages[0];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedInsideDesktop =
                desktopLangRef.current && desktopLangRef.current.contains(event.target);

            const clickedInsideMobile =
                mobileLangRef.current && mobileLangRef.current.contains(event.target);

            if (!clickedInsideDesktop && !clickedInsideMobile) {
                setIsLangOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsLangOpen(false);
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const navLinkClass = ({ isActive }) =>
        `relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
            isActive
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-muted hover:bg-white/70 hover:text-primary'
        }`;

    const mobileNavLinkClass = ({ isActive }) =>
        `rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
            isActive
                ? 'bg-primary text-white shadow-sm'
                : 'bg-bg-base text-text-main hover:bg-white'
        }`;

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
                <div className="relative overflow-visible rounded-[1.75rem] border border-white/50 bg-white/75 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                    <div className="flex h-20 items-center justify-between px-4 sm:px-5 lg:px-6">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="group flex shrink-0 items-center gap-3 transition-all duration-300 hover:scale-[1.01]"
                        >
                            <div className="relative flex items-center justify-center">
                                {logoUrl ? (
                                    <div className="rounded-2xl border border-primary/10 bg-white/70 p-2 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                                        <img
                                            src={logoUrl}
                                            alt="Pavels Tuliss"
                                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-600 text-sm font-black text-white shadow-[0_10px_24px_rgba(8,145,178,0.28)]">
                                        PT
                                    </div>
                                )}
                            </div>

                            <div className="hidden min-[420px]:block">
                                <div className="text-base font-black leading-none tracking-tight text-text-main">
                                    Pavels Tuliss
                                </div>
                                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                                    Frontend Developer
                                </div>
                            </div>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden items-center gap-4 lg:flex">
                            <nav className="flex items-center gap-1 rounded-full border border-secondary/10 bg-bg-base/80 p-1.5 backdrop-blur-md">
                                <NavLink to="/" className={navLinkClass}>
                                    {t('nav.home', 'Home')}
                                </NavLink>
                                <NavLink to="/portfolio" className={navLinkClass}>
                                    {t('nav.portfolio', 'Работы')}
                                </NavLink>
                                <NavLink to="/path" className={navLinkClass}>
                                    {t('nav.path', 'Мой путь')}
                                </NavLink>
                                <NavLink to="/story" className={navLinkClass}>
                                    {t('nav.story', 'История')}
                                </NavLink>
                            </nav>

                            {/* Language dropdown */}
                            <div className="relative" ref={desktopLangRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsLangOpen((prev) => !prev)}
                                    className={`inline-flex h-11 items-center gap-2 rounded-2xl border px-4 text-sm font-semibold transition-all duration-300 ${
                                        isLangOpen
                                            ? 'border-primary/25 bg-white text-text-main shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
                                            : 'border-secondary/10 bg-white/70 text-text-main hover:border-primary/15 hover:bg-white'
                                    }`}
                                    aria-haspopup="menu"
                                    aria-expanded={isLangOpen}
                                    title={t('nav.lang', 'Сменить язык')}
                                >
                                    <span className="text-primary">{currentLanguage.label}</span>
                                    <ChevronDown
                                        className={`h-4 w-4 text-text-muted transition-transform duration-300 ${
                                            isLangOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`absolute right-0 top-[calc(100%+12px)] z-50 w-48 origin-top-right rounded-[1.25rem] border border-white/60 bg-white/95 p-2 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-200 ${
                                        isLangOpen
                                            ? 'pointer-events-auto translate-y-0 opacity-100'
                                            : 'pointer-events-none -translate-y-2 opacity-0'
                                    }`}
                                >
                                    {languages.map((lang) => {
                                        const isActive = normalizedLanguage === lang.code;

                                        return (
                                            <button
                                                key={lang.code}
                                                type="button"
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left transition-all duration-200 ${
                                                    isActive
                                                        ? 'bg-primary/8 text-primary'
                                                        : 'text-text-main hover:bg-bg-base'
                                                }`}
                                            >
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">{lang.label}</span>
                                                    <span className="text-xs text-text-muted">{lang.full}</span>
                                                </div>

                                                {isActive && <Check className="h-4 w-4 text-primary" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://t.me/ptulish"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-11 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(8,145,178,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_16px_30px_rgba(8,145,178,0.28)] active:scale-95"
                            >
                                <MessageCircleMore className="h-4 w-4" />
                                {t('nav.cta', 'Связаться')}
                            </a>
                        </div>

                        {/* Mobile actions */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <div className="relative" ref={mobileLangRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsLangOpen((prev) => !prev)}
                                    className="inline-flex h-11 items-center gap-2 rounded-2xl border border-secondary/10 bg-white/75 px-3 text-sm font-semibold text-text-main shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/15 hover:bg-white"
                                    aria-haspopup="menu"
                                    aria-expanded={isLangOpen}
                                >
                                    <span className="text-primary">{currentLanguage.label}</span>
                                    <ChevronDown
                                        className={`h-4 w-4 text-text-muted transition-transform duration-300 ${
                                            isLangOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`absolute right-0 top-[calc(100%+10px)] z-50 w-44 rounded-[1.25rem] border border-white/60 bg-white/95 p-2 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-200 ${
                                        isLangOpen
                                            ? 'pointer-events-auto translate-y-0 opacity-100'
                                            : 'pointer-events-none -translate-y-2 opacity-0'
                                    }`}
                                >
                                    {languages.map((lang) => {
                                        const isActive = normalizedLanguage === lang.code;

                                        return (
                                            <button
                                                key={lang.code}
                                                type="button"
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left transition-all duration-200 ${
                                                    isActive
                                                        ? 'bg-primary/8 text-primary'
                                                        : 'text-text-main hover:bg-bg-base'
                                                }`}
                                            >
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">{lang.label}</span>
                                                    <span className="text-xs text-text-muted">{lang.full}</span>
                                                </div>

                                                {isActive && <Check className="h-4 w-4 text-primary" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary/10 bg-white/75 text-text-main shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/15 hover:bg-white"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div
                        className={`overflow-hidden transition-all duration-300 lg:hidden ${
                            isMobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="border-t border-secondary/10 px-4 pb-4 pt-3 sm:px-5">
                            <nav className="flex flex-col gap-2">
                                <NavLink
                                    to="/portfolio"
                                    className={mobileNavLinkClass}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('nav.portfolio', 'Работы')}
                                </NavLink>
                                <NavLink
                                    to="/path"
                                    className={mobileNavLinkClass}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('nav.path', 'Мой путь')}
                                </NavLink>
                                <NavLink
                                    to="/story"
                                    className={mobileNavLinkClass}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('nav.story', 'История')}
                                </NavLink>

                                <a
                                    href="https://t.me/ptulish"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(8,145,178,0.24)] transition-all duration-300 hover:bg-primary-hover"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <MessageCircleMore className="h-4 w-4" />
                                    {t('nav.cta', 'Связаться')}
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
