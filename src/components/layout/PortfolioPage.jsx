import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Code2, Sparkles, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { client, urlFor } from '../../client';
import SEO from '../SEO.jsx';

const MotionParagraph = motion.p;
const MotionDiv = motion.div;
const MotionArticle = motion.article;

const PortfolioPage = () => {
    const { t, i18n } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');
    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "project"] | order(order asc)';
        client.fetch(query)
            .then((data) => {
                setAllProjects(data);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    const getLocalizedDescription = (project) => {
        const lang = i18n.language;
        if (lang === 'en' && project.description_en) return project.description_en;
        if (lang === 'lv' && project.description_lv) return project.description_lv;
        return project.description_ru || '';
    };

    const categoryInfo = {
        all: {
            label: t('portfolio_page.categories.all.label', 'All'),
            description: t('portfolio_page.categories.all.description', 'From complex platforms to fast landing pages.')
        },
        landing: {
            label: t('portfolio_page.categories.landing.label', 'Landing Pages'),
            description: t('portfolio_page.categories.landing.description', 'Fast single-page websites.')
        },
        ecommerce: {
            label: t('portfolio_page.categories.ecommerce.label', 'E-commerce'),
            description: t('portfolio_page.categories.ecommerce.description', 'Full-fledged online stores.')
        },
        webapp: {
            label: t('portfolio_page.categories.webapp.label', 'Web apps'),
            description: t('portfolio_page.categories.webapp.description', 'Interactive web applications with dashboards, forms, and client-side logic.')
        },
        saas: {
            label: t('portfolio_page.categories.saas.label', 'SaaS'),
            description: t('portfolio_page.categories.saas.description', 'Subscription-style products: accounts, billing flows, and multi-tenant interfaces.')
        },
        blog: {
            label: t('portfolio_page.categories.blog.label', 'Blog'),
            description: t('portfolio_page.categories.blog.description', 'Editorial sites and blogs focused on articles, tags, and readable typography.')
        },
        media: {
            label: t('portfolio_page.categories.media.label', 'Media'),
            description: t('portfolio_page.categories.media.description', 'Content sites, blogs, and editorial layouts.')
        }
    };

    const ObjectKeys = Object.keys(categoryInfo);

    const filteredProjects = useMemo(() => {
        return activeFilter === 'all'
            ? allProjects
            : allProjects.filter(project => project.category === activeFilter);
    }, [activeFilter, allProjects]);

    if (isLoading) {
        return (
            <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center w-full">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary mb-4" />
                <p className="text-text-muted animate-pulse font-medium">{t('portfolio_page.loading', 'Loading...')}</p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={t('seo.portfolio_title', 'Portfolio')}
                description={t('seo.portfolio_description', 'Selected frontend projects, landing pages, and e-commerce work by Pavels Tuliss.')}
                url="/portfolio"
            />
            {/* ИСПРАВЛЕНИЕ 1: Убрал bg-bg-base и overflow-hidden. Добавил w-full и отступы сверху (pt-32), чтобы хедер не перекрывал контент. */}
            <div className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 w-full flex flex-col items-center">

            {/* ИСПРАВЛЕНИЕ 2: Свечения теперь fixed. Они привязаны к экрану, а не к блоку. Больше не обрезаются! */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Заголовок */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 rounded-full border border-white/40 bg-white/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
                        <Sparkles className="h-4 w-4" />
                        {t('portfolio_page.badge', 'Cases')}
                    </div>
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-text-main md:text-7xl">
                        {t('portfolio_page.title', 'My Works')}
                    </h1>

                    <div className="min-h-[80px] md:min-h-[60px] flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <MotionParagraph
                                key={activeFilter}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-lg leading-relaxed text-text-muted md:text-xl"
                            >
                                {categoryInfo[activeFilter]?.description}
                            </MotionParagraph>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Фильтры */}
                <div className="mb-14 flex justify-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/40 bg-white/40 p-2 shadow-lg backdrop-blur-xl">
                        {ObjectKeys.map((key) => {
                            const isActive = activeFilter === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveFilter(key)}
                                    className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                        isActive
                                            ? 'bg-white text-primary shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                                            : 'text-text-muted hover:bg-white/50 hover:text-text-main'
                                    }`}
                                >
                                    {categoryInfo[key]?.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Сетка проектов */}
                {/* ИСПРАВЛЕНИЕ 3: min-h-[800px] не дает футеру "подпрыгивать" во время исчезновения старых карточек */}
                <div className="min-h-[800px] w-full">
                    <MotionDiv
                        layout
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
                    >
                        {/* ИСПРАВЛЕНИЕ 4: mode="popLayout" заставляет исчезающие карточки сразу освобождать место для новых, убирая дерганье */}
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <MotionArticle
                                    key={project._id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 25
                                    }}
                                    className={`group relative flex overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl transition-shadow hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] ${
                                        project.isFeatured ? 'md:col-span-2 flex-col md:flex-row' : 'flex-col'
                                    }`}
                                >
                                    {/* Изображение */}
                                    <div className={`relative overflow-hidden bg-slate-100 ${project.isFeatured ? 'md:w-1/2 h-72 md:h-auto' : 'w-full h-72'}`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient || 'from-slate-200 to-slate-300'} opacity-30`} />

                                        {project.image ? (
                                            <img
                                                src={urlFor(project.image).width(800).format('webp').quality(80).url()}
                                                alt={project.title}
                                                loading="lazy"
                                                width="800"
                                                height="600" // Примерная высота для сохранения пропорций и избежания сдвигов (CLS)
                                                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                                <LayoutGrid className="h-12 w-12 opacity-50" />
                                            </div>
                                        )}

                                        <div className="absolute left-6 top-6">
                                            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
                                                {categoryInfo[project.category]?.label || project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Контент */}
                                    <div className={`flex flex-col justify-between p-8 sm:p-10 ${project.isFeatured ? 'md:w-1/2' : 'flex-1'}`}>
                                        <div>
                                            <h3 className={`font-extrabold text-text-main transition-colors duration-300 group-hover:text-primary ${project.isFeatured ? 'mb-5 text-4xl' : 'mb-4 text-3xl'}`}>
                                                {project.title}
                                            </h3>
                                            <p className="text-base leading-relaxed text-text-muted">
                                                {getLocalizedDescription(project)}
                                            </p>
                                        </div>

                                        <div className="mt-8 flex flex-col gap-6">
                                            {project.tags && project.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="rounded-xl border border-white/50 bg-white/50 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm transition-colors group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/40">
                                                {project.links?.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40"
                                                    >
                                                        {t('portfolio_page.view_project', 'View Project')}
                                                        <ArrowUpRight className="h-4.5 w-4.5" />
                                                    </a>
                                                )}

                                                {project.links?.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200/60 bg-white/40 px-6 py-3 text-sm font-bold text-text-main backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white/80"
                                                    >
                                                        <Code2 className="h-4.5 w-4.5 text-slate-500" />
                                                        {t('portfolio_page.view_code', 'Code')}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </MotionArticle>
                            ))}
                        </AnimatePresence>
                    </MotionDiv>

                    {/* Состояние "Пусто" */}
                    <AnimatePresence>
                        {filteredProjects.length === 0 && (
                            <MotionDiv
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-20 text-center"
                            >
                                <LayoutGrid className="mx-auto mb-4 h-12 w-12 text-primary/40" />
                                <h3 className="text-2xl font-bold text-text-main mb-2">{t('portfolio_page.empty_title', 'Empty')}</h3>
                                <p className="text-text-muted">{t('portfolio_page.empty_desc', 'No projects yet.')}</p>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            </div>
        </>
    );
};

export default PortfolioPage;
