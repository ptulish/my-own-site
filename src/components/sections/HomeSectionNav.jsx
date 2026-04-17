import React, { useEffect, useState } from 'react';
import {
    Sparkles,
    Layers3,
    BriefcaseBusiness,
    BadgeEuro,
    CircleHelp,
    MessageCircleMore,
    MessageSquare,
} from 'lucide-react';
import { useTranslation } from "react-i18next";


const HomeSectionNav = () => {
    const { t } = useTranslation();

    const sections = [
        { id: 'hero', label: t('nav.home', 'Start'), icon: Sparkles },
        { id: 'features', label: t('nav.why-me', 'Why me'), icon: Layers3 },
        { id: 'testimonials', label: t('nav.testimonials', 'Testimonials'), icon: MessageSquare },
        { id: 'work', label: t('nav.work', 'Work'), icon: BriefcaseBusiness },
        { id: 'pricing', label: t('nav.pricing', 'Pricing'), icon: BadgeEuro },
        { id: 'faq', label: t('nav.faq', 'FAQ'), icon: CircleHelp },
        { id: 'contact', label: t('nav.contact', 'Contact'), icon: MessageCircleMore }
    ];
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-35% 0px -45% 0px',
                threshold: 0.1
            }
        );

        const elements = sections
            .map((section) => document.getElementById(section.id))
            .filter(Boolean);

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center' // Изменили 'start' на 'center'
        });
    };

    return (
        <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 min-[1600px]:block">
            <div className="rounded-[1.75rem] border border-white/50 bg-white/72 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="flex flex-col gap-2">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;

                        return (
                            <button
                                key={section.id}
                                onClick={() => handleScroll(section.id)}
                                className={`group flex min-w-[148px] items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                                    isActive
                                        ? 'bg-primary text-white shadow-[0_12px_28px_rgba(8,145,178,0.22)]'
                                        : 'text-text-muted hover:bg-white hover:text-primary'
                                }`}
                                aria-label={section.label}
                                title={section.label}
                            >
                                <Icon className="h-4 w-4 shrink-0" />
                                <span className="text-sm font-semibold whitespace-nowrap">
                                    {section.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeSectionNav;
