import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-bg-base text-text-main flex flex-col font-sans selection:bg-primary/20 selection:text-primary">            {/* Временный Header, потом заменим на сложный из Educore */}
            <Header /> {/* Вставляем сюда */}

            {/* Здесь будут рендериться сами страницы */}
            <main className="flex-1 w-full max-w-10xl mx-auto p-4 md:p-8">
                <Outlet />
            </main>

            {/* Простой Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
