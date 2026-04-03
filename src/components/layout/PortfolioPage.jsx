import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Code2, Layers3, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { client, urlFor } from '../../client';

const PortfolioPage = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');
    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "project"]';
        client.fetch(query)
            .then((data) => {
                setAllProjects(data);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    const filters = [
        { id: 'all', label: t('portfolio_page.filter_all') },
        { id: 'react', label: t('portfolio_page.filter_react') },
        { id: 'landing', label: t('portfolio_page.filter_landing') },
        { id: 'platform', label: t('portfolio_page.filter_platform') }
    ];

    const filteredProjects = useMemo(() => {
        return activeFilter === 'all'
            ? allProjects
            : allProjects.filter(project => project.category === activeFilter);
    }, [activeFilter, allProjects]);

    const projectsCountText = filteredProjects.length === 1
        ? t('portfolio_page.projects_overview_count_one', { count: filteredProjects.length })
        : t('portfolio_page.projects_overview_count_other', { count: filteredProjects.length });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-bg-base flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-bg-base py-16 md:py-24">
            {/* Фоновые элементы */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-[10%] left-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Заголовок (оставляем твой красивый) */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                        <Sparkles className="h-4 w-4" />
                        {t('portfolio_page.badge')}
                    </span>
                    <h1 className="mb-6 text-5xl font-extrabold text-text-main md:text-7xl">
                        {t('portfolio_page.title')}
                    </h1>
                </div>

                {/* Фильтры */}
                <div className="mb-12 flex justify-center gap-3 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white/50 border border-white/20 text-text-muted hover:bg-white hover:text-primary'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Сетка проектов */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {filteredProjects.map((project) => (
                            <article
                                key={project._id} // Sanity использует _id вместо id
                                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/40 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                {/* Блок с картинкой */}
                                <div className="relative h-72 w-full overflow-hidden p-6">
                                    {/* Красивый под-фон картинки (берем из Sanity) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient || 'from-slate-200 to-slate-100'} opacity-50 transition-opacity group-hover:opacity-100`} />

                                    {/* Само изображение */}
                                    {project.image && (
                                        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                                            <img
                                                src={urlFor(project.image).width(800).url()}
                                                alt={project.title}
                                                className="h-full w-full object-cover object-top"
                                            />
                                        </div>
                                    )}

                                    {/* Плавающий бейдж категории */}
                                    <div className="absolute top-8 left-8">
                                        <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${project.accent || 'bg-white/80 text-slate-800'}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Текстовый блок */}
                                <div className="flex flex-1 flex-col justify-between p-8 pt-4">
                                    <div>
                                        <h3 className="mb-3 text-3xl font-bold text-text-main group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="line-clamp-3 text-base leading-relaxed text-text-muted">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-col gap-6">
                                        {/* Теги */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags?.map((tag, index) => (
                                                <span key={index} className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Кнопки ссылок */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50">
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-text-main px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/30">
                                                    <span>Демо</span>
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-6 py-2.5 text-sm font-semibold text-text-main transition-all hover:bg-slate-50">
                                                    <Code2 className="h-4 w-4" />
                                                    <span>Код</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-text-muted">
                        Проекты не найдены.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;
