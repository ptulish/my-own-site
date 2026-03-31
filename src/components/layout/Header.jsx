import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoUrl from '../../assets/logo.png';

const Header = () => {
    const { t, i18n } = useTranslation();

    // Функция для переключения языка между ru и en
    const toggleLanguage = () => {
        const nextLang = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(nextLang);
    };

    // Функция для стилизации активных ссылок
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-primary font-semibold transition-colors"
            : "text-text-muted hover:text-primary font-medium transition-colors";


    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Логотип (слева) */}
                <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                    {logoUrl ? (
                        <img src={logoUrl} alt="Pavels Tuliss Logo" className="h-8 w-auto object-contain" />
                    ) : (
                        <div className="text-2xl font-extrabold tracking-tighter">
                            <span className="text-primary">Pavels</span>
                            <span className="text-text-main">Tuliss.</span>
                        </div>
                    )}
                </Link>

                {/* Навигация и смена языка (справа) */}
                <div className="flex items-center gap-4 sm:gap-8">

                    {/* Ссылки (скрыты на совсем маленьких экранах, можно будет добавить бургер-меню) */}
                    <nav className="hidden sm:flex gap-6">
                        <NavLink to="/portfolio" className={navLinkClass}>
                            {t('nav.portfolio', 'Работы')} {/* Второй аргумент - резервный текст */}
                        </NavLink>
                        <NavLink to="/path" className={navLinkClass}>
                            {t('nav.path', 'Мой путь')}
                        </NavLink>
                        <NavLink to="/story" className={navLinkClass}>
                            {t('nav.story', 'История')}
                        </NavLink>
                    </nav>

                    {/* Разделитель */}
                    <div className="hidden sm:block w-px h-6 bg-slate-300"></div>

                    {/* Кнопка переключения языка */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-light hover:bg-primary hover:text-white text-secondary-dark font-bold text-sm uppercase transition-all shadow-sm active:scale-95"
                        title={t('nav.lang', 'jazik')}
                    >
                        {i18n.language || 'ru'}
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
