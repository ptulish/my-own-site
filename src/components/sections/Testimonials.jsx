import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { client } from '../../client'; // Проверь правильность пути до твоего client.js

const Testimonials = () => {
    const { t, i18n } = useTranslation();
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    // Загружаем отзывы из Sanity при монтировании
    useEffect(() => {
        const query = '*[_type == "testimonial"] | order(order asc, _createdAt desc)';
        client.fetch(query)
            .then((data) => {
                setTestimonials(data);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    // Функция для выбора нужного языка из Sanity (по аналогии с PortfolioPage)
    const getLocalizedText = (item) => {
        const lang = i18n.language;
        if (lang === 'en' && item.text_en) return item.text_en;
        if (lang === 'lv' && item.text_lv) return item.text_lv;
        return item.text_ru || '';
    };

    // Функции для кнопок прокрутки
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (isLoading || testimonials.length === 0) return null; // Скрываем секцию, если грузится или нет отзывов

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок и кнопки навигации */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                            {t('testimonials.badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-text-main">
                            {t('testimonials.title')}
                        </h2>
                    </div>

                    {/* Кнопки прокрутки для десктопа */}
                    <div className="hidden md:flex gap-3">
                        <button onClick={() => scroll('left')} className="p-3 rounded-full border border-white/50 bg-white/30 backdrop-blur-md text-text-main hover:bg-white hover:text-primary transition-all shadow-sm">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={() => scroll('right')} className="p-3 rounded-full border border-white/50 bg-white/30 backdrop-blur-md text-text-main hover:bg-white hover:text-primary transition-all shadow-sm">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                {/* Обертка с градиентной маской для плавного растворения краев */}
                <div
                    className="relative w-full"
                    style={{
                        // Этот код делает края прозрачными (0% до 5% слева, и 95% до 100% справа)
                        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
                    }}
                >
                    {/* Сам контейнер карусели */}
                    <div
                        ref={scrollContainerRef}
                        // Добавили px-[5%] (или px-8), чтобы карточкам было где растворяться
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-10 px-8 sm:px-12"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style>{`
                            div::-webkit-scrollbar { display: none; }
                        `}</style>

                        {testimonials.map((item) => (
                            <div
                                key={item._id}
                                className="min-w-[85%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(40%-12px)] snap-center sm:snap-start relative p-8 rounded-[2.5rem] border border-white/50 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-white/80 transition-all duration-500"
                            >
                                <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10" />
                                <p className="text-lg text-text-muted italic mb-8 relative z-10 line-clamp-4">
                                    "{getLocalizedText(item)}"
                                </p>
                                <div>
                                    <h4 className="font-extrabold text-text-main text-xl">{item.name}</h4>
                                    <p className="text-sm font-bold text-primary uppercase tracking-widest">{item.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
