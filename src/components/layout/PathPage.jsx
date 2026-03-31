import React from 'react';
import { useTranslation } from 'react-i18next';
import { Binary, Cpu, Server, Rocket, Code, Package } from 'lucide-react';

const PathPage = () => {
    const { t } = useTranslation();

    const timelineData = [
        {
            id: 1, date: t('path_page.timeline_1_date'), title: t('path_page.timeline_1_title'), description: t('path_page.timeline_1_desc'),
            icon: <Binary className="w-6 h-6 text-white group-hover:rotate-12" strokeWidth={2} />, techStack: ['Java', 'C++', 'C#', 'PHP']
        },
        {
            id: 2, date: t('path_page.timeline_2_date'), title: t('path_page.timeline_2_title'), description: t('path_page.timeline_2_desc'),
            icon: <Code className="w-6 h-6 text-white group-hover:rotate-12" strokeWidth={2} />, techStack: ['C# MAUI', 'IoT']
        },
        {
            id: 3, date: t('path_page.timeline_3_date'), title: t('path_page.timeline_3_title'), description: t('path_page.timeline_3_desc'),
            icon: <Cpu className="w-6 h-6 text-white group-hover:rotate-12" strokeWidth={2} />, techStack: ['Flutter', 'VESC', 'GPS']
        },
        {
            id: 4, date: t('path_page.timeline_4_date'), title: t('path_page.timeline_4_title'), description: t('path_page.timeline_4_desc'),
            icon: <Server className="w-6 h-6 text-white group-hover:rotate-12" strokeWidth={2} />, techStack: ['C# .NET', 'SQL', 'ERP']
        },
        {
            id: 5, date: t('path_page.timeline_5_date'), title: t('path_page.timeline_5_title'), description: t('path_page.timeline_5_desc'),
            icon: <Rocket className="w-6 h-6 text-white group-hover:rotate-12" strokeWidth={2} />, techStack: ['React', 'PHP', 'Landing Pages']
        },
        {
            id: 6, date: t('path_page.timeline_6_date'), title: t('path_page.timeline_6_title'), description: t('path_page.timeline_6_desc'),
            icon: <Package className="w-6 h-6 text-white group-hover:rotate-12" strokeWidth={2} />, techStack: ['React', 'E-commerce', 'SEO']
        }
    ];

    return (
        <div className="relative py-20 md:py-28 bg-bg-base min-h-screen overflow-hidden">
            {/* Фоновые градиентные пятна */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto z-10">

                {/* Заголовок */}
                <div className="text-center mb-28 max-w-4xl mx-auto">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6 border border-primary/20">
                        {t('path_page.badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-primary">
                        {t('path_page.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted font-medium leading-relaxed">
                        {t('path_page.subtitle')}
                    </p>
                </div>

                {/* Таймлайн */}
                <div className="relative mb-24">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 rounded-full"></div>
                    <div className="space-y-20 md:space-y-32">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-between group mb-12 md:mb-0">

                                    {/* Мобильная линия */}
                                    <div className="md:hidden absolute left-[42px] top-20 bottom-[-3rem] w-1 bg-gradient-to-b from-primary/50 to-transparent last:hidden"></div>

                                    {/* Иконка всегда по центру на десктопе */}
                                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.2)] border-4 border-bg-base z-20
                group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(var(--primary),0.6)] transition-all duration-500">
                                        <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:animate-ping"></div>
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>

                                    {/* Карточка */}
                                    <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:ml-auto md:text-right' : 'md:mr-auto md:text-left'}`}>
                                        <div className="relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>

                                            <span className="inline-block px-5 py-2 bg-text-main text-white text-sm font-bold rounded-full mb-6 shadow-md">
                        {item.date}
                    </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-5 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-muted leading-relaxed text-base md:text-lg mb-8">
                                                {item.description}
                                            </p>
                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                                {item.techStack.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-primary/5 text-primary text-sm font-semibold rounded-lg border border-primary/10 hover:bg-primary hover:text-white transition-colors">
                                {tech}
                            </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

                {/* Блок навыков внизу */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                        {t('path_page.skills_title')}
                    </h2>
                    <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
                        {t('path_page.skills_desc')}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 max-w-4xl mx-auto">
                        {t('path_page.skills_list', { returnObjects: true }).map((skill, i) => (
                            <div key={i} className="group p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <span className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PathPage;
