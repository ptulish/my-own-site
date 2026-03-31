import React from 'react';
import { useTranslation } from 'react-i18next';

const CodeIcon = ({ className = "w-8 h-8" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className} // Принимает классы снаружи
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const SpeedIcon = ({ className = "w-8 h-8" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const DesignIcon = ({ className = "w-8 h-8" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a1.5 1.5 0 00-2.121-2.122l-3.879 3.879a15.995 15.995 0 00-4.648 4.764m3.42 3.42a15.995 15.995 0 01-4.764 4.648l-3.879 3.879a1.5 1.5 0 01-2.121-2.122l3.879-3.879a15.995 15.995 0 014.648-4.764" />
    </svg>
);


const Features = () => {
    const { t } = useTranslation();

    const featuresList = [
        {
            id: 1,
            icon: <CodeIcon />,
            title: t('features.card1_title'),
            desc: t('features.card1_desc')
        },
        {
            id: 2,
            icon: <SpeedIcon />,
            title: t('features.card2_title'),
            desc: t('features.card2_desc')
        },
        {
            id: 3,
            icon: <DesignIcon />,
            title: t('features.card3_title'),
            desc: t('features.card3_desc')
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-bg-base relative overflow-hidden">
            {/* Декоративные фоновые элементы (опционально, создают легкую динамику) */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">

                {/* Большая белая карточка-контейнер (как в контактах) */}
                <div className="bg-white rounded-3xl p-8 md:p-16 border border-secondary/10 shadow-xl shadow-slate-200/50">

                    {/* Заголовок секции */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4">
                            {t('features.section_title')}
                        </h2>
                        <p className="text-xl text-text-muted">
                            {t('features.section_subtitle')}
                        </p>
                    </div>

                    {/* Сетка с карточками */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuresList.map((feature) => (
                            <div
                                key={feature.id}
                                className="group p-8 rounded-2xl bg-bg-base border border-secondary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-md"
                            >
                                {/* Иконка в кружочке (с эффектом при наведении) */}
                                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <div className="group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                </div>


                                <h3 className="text-xl font-bold text-text-main mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-text-muted leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;
