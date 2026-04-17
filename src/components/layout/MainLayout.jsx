import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-bg-base text-text-main flex flex-col font-sans selection:bg-primary/20 selection:text-primary">

            <Header />

            {/* ИСПРАВЛЕНО: Убраны p-4, md:p-8 и ограничения по ширине. */}
            {/* Теперь `<main>` занимает 100% пространства, и страницы могут рисовать свой фон от края до края. */}
            <main className="flex-1 w-full flex flex-col">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
};

export default MainLayout;
