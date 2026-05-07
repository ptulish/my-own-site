import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Binary, Cpu, Server, Rocket, Code, Package, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../SEO.jsx';

const PathPage = () => {
    const { t } = useTranslation();

    const defaultSkills = ['React 18+', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'C# .NET', 'SQL / PostgreSQL', 'Flutter', 'IoT / Real-time'];
    const skillsList = t('path_page.skills_list', { returnObjects: true, defaultValue: defaultSkills });
    const safeSkillsArray = Array.isArray(skillsList) ? skillsList : defaultSkills;

    const timelineData = [
        {
            id: 1,
            date: t('path_page.timeline_1_date', '2020–2021'),
            title: t('path_page.timeline_1_title', 'School Engineering Start'),
            description: t('path_page.timeline_1_desc', 'First introduction to programming via Java.'),
            icon: <Binary className="w-6 h-6 text-primary" strokeWidth={2} />,
            techStack: ['Java', 'C++', 'C#', 'PHP']
        },
        {
            id: 2,
            date: t('path_page.timeline_2_date', 'Jan–May 2023'),
            title: t('path_page.timeline_2_title', 'First Commercial Dev'),
            description: t('path_page.timeline_2_desc', 'Worked at Schiebel Antriebstechnik.'),
            icon: <Code className="w-6 h-6 text-primary" strokeWidth={2} />,
            techStack: ['C# MAUI', 'IoT']
        },
        {
            id: 3,
            date: t('path_page.timeline_3_date', 'May–Oct 2023'),
            title: t('path_page.timeline_3_title', 'IoT Project Lead'),
            description: t('path_page.timeline_3_desc', 'Led Flutter app dev for boat VESC motors.'),
            icon: <Cpu className="w-6 h-6 text-primary" strokeWidth={2} />,
            techStack: ['Flutter', 'VESC', 'GPS']
        },
        {
            id: 4,
            date: t('path_page.timeline_4_date', 'Oct 2023 – Present'),
            title: t('path_page.timeline_4_title', 'European Enterprise Logistics'),
            description: t('path_page.timeline_4_desc', 'Supporting large ERP system for 6 countries.'),
            icon: <Server className="w-6 h-6 text-primary" strokeWidth={2} />,
            techStack: ['C# .NET', 'SQL', 'ERP']
        },
        {
            id: 5,
            date: t('path_page.timeline_5_date', 'Dec 2024 – Present'),
            title: t('path_page.timeline_5_title', 'Freelance & Landing Pages'),
            description: t('path_page.timeline_5_desc', 'Started creating fast React landing pages.'),
            icon: <Rocket className="w-6 h-6 text-primary" strokeWidth={2} />,
            techStack: ['React', 'PHP', 'Landing Pages']
        },
        {
            id: 6,
            date: t('path_page.timeline_6_date', 'Oct 2025 – Present'),
            title: t('path_page.timeline_6_title', 'E-commerce & Platforms'),
            description: t('path_page.timeline_6_desc', 'Moving towards complex projects and stores.'),
            icon: <Package className="w-6 h-6 text-primary" strokeWidth={2} />,
            techStack: ['React', 'E-commerce', 'SEO']
        }
    ];

    return (
        <>
            <SEO
                title={t('seo.path_title', 'My Path')}
                description={t('seo.path_description', 'Engineering journey, experience timeline, and current technology stack of Pavels Tuliss.')}
                url="/path"
            />
            {/* ВАЖНО: Добавил w-full и убрал overflow-hidden (чтобы блюры могли выходить за края, если нужно, хотя лучше оставить overflow-x-hidden на уровне body) */}
            <div className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 w-full flex flex-col items-center">

            {/* ВАЖНО: fixed вместо absolute! */}
            {/* fixed привяжет блюры к окну браузера, а не к контейнеру страницы. */}
            {/* Это гарантирует, что они не будут обрезаться рамками страницы. */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-5%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
            </div>

            {/* Контент страницы */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 rounded-full border border-white/40 bg-white/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
                        <Sparkles className="h-4 w-4" />
                        {t('path_page.badge', 'My Experience')}
                    </div>
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-text-main md:text-7xl">
                        {t('path_page.title', 'My Engineering Journey')}
                    </h1>
                    <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                        {t('path_page.subtitle', 'From first experiments to enterprise systems.')}
                    </p>
                </div>

                <div className="relative mb-32 max-w-5xl mx-auto">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/10 via-primary/30 to-transparent"></div>

                    <div className="space-y-12 md:space-y-24">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-between group">
                                    <div className="md:hidden absolute left-[31px] top-16 bottom-[-3rem] w-px bg-gradient-to-b from-primary/30 to-transparent last:hidden"></div>

                                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full border border-white/60 bg-white/50 backdrop-blur-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-white z-20">
                                        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:animate-ping"></div>
                                        {item.icon}
                                    </div>

                                    <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'}`}>
                                        <div className="relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/30 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-white/80">

                                            <div className={`mb-6 flex ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
                                                    {item.date}
                                                </span>
                                            </div>

                                            <h3 className="mb-4 text-2xl font-extrabold text-text-main transition-colors duration-300 group-hover:text-primary">
                                                {item.title}
                                            </h3>

                                            <p className="mb-8 text-base leading-relaxed text-text-muted">
                                                {item.description}
                                            </p>

                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                                {item.techStack.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-xl border border-white/50 bg-white/50 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm transition-colors group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20"
                                                    >
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

                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">
                        {t('path_page.skills_title', 'My Current Stack')}
                    </h2>
                    <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
                        {t('path_page.skills_desc', 'Full cycle web development.')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {safeSkillsArray.map((skill, i) => (
                            <div
                                key={i}
                                className="group px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-sm hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-3xl rounded-[3rem] border border-white/50 bg-white/30 p-12 text-center shadow-lg backdrop-blur-2xl">
                    <h3 className="mb-4 text-3xl font-extrabold text-text-main">
                        {t('story_page.cta_title', 'Ready to discuss your project?')}
                    </h3>
                    <p className="mb-8 text-text-muted">
                        {t('story_page.cta_text', 'Want to create a modern website or app? Write to me.')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-primary/40"
                    >
                        {t('nav.cta', 'Contact Me')}
                        <ArrowRight className="h-4.5 w-4.5" />
                    </Link>
                </div>

            </div>
            </div>
        </>
    );
};

export default PathPage;
