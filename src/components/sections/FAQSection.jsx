import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, ArrowRight } from 'lucide-react';

const FAQSection = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const faqItems = t('faq.items', { returnObjects: true });

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-bg-base py-24 md:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    {/* Left side */}
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                            {t('faq.badge')}
                        </p>

                        <h2 className="max-w-xl text-3xl font-extrabold leading-[1.05] text-text-main md:text-4xl xl:text-5xl">
                            {t('faq.section_title')}
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
                            {t('faq.section_subtitle')}
                        </p>

                        <div className="mt-10 hidden rounded-[1.75rem] border border-secondary/10 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] lg:block">
                            <p className="text-sm leading-relaxed text-text-muted">
                                {t('faq.side_note')}
                            </p>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="space-y-4">
                        {faqItems?.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <article
                                    key={index}
                                    className="overflow-hidden rounded-[1.75rem] border border-secondary/10 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-300"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleItem(index)}
                                        className="flex w-full items-center gap-4 px-6 py-5 text-left md:px-7 md:py-6"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg font-bold leading-snug text-text-main md:text-xl">
                                                {item.question}
                                            </h3>
                                        </div>

                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                                isOpen
                                                    ? 'border-primary bg-primary text-white rotate-45'
                                                    : 'border-secondary/10 bg-bg-base text-text-muted'
                                            }`}
                                        >
                                            <Plus className="h-5 w-5" />
                                        </div>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-out ${
                                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-6 pb-6 md:px-7 md:pb-7">
                                                <div className="border-t border-secondary/10 pt-5">
                                                    <p className="max-w-2xl text-base leading-relaxed text-text-muted">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                        <div className="rounded-[1.75rem] border border-primary/10 bg-primary/5 px-6 py-5 md:px-7">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-lg font-bold text-text-main">
                                        {t('faq.cta_title')}
                                    </p>
                                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                                        {t('faq.cta_text')}
                                    </p>
                                </div>

                                <a
                                    href="https://t.me/ptulish"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                                >
                                    {t('faq.cta_button')}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-secondary/10 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] lg:hidden">
                            <p className="text-sm leading-relaxed text-text-muted">
                                {t('faq.side_note')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
