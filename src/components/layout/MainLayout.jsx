import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from "./Header.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
            {/* Временный Header, потом заменим на сложный из Educore */}
            <Header /> {/* Вставляем сюда */}

            {/* Здесь будут рендериться сами страницы */}
            <main className="flex-1 w-full max-w-10xl mx-auto p-4 md:p-8">
                <Outlet />
            </main>

            {/* Простой Footer */}
            <footer className="w-full p-6 text-center bg-slate-900 text-slate-400">
                <p>© 2026. Разработано с любовью к коду.</p>
            </footer>
        </div>
    );
};

export default MainLayout;
