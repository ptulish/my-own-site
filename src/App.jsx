import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from "./components/layout/HomePage.jsx";

// 1. Ленивая загрузка второстепенных страниц и админки
const Hero = lazy(() => import('./components/sections/Hero.jsx'));
const PortfolioPage = lazy(() => import('./components/layout/PortfolioPage.jsx'));
const PathPage = lazy(() => import('./components/layout/PathPage.jsx'));
const StoryPage = lazy(() => import('./components/layout/StoryPage.jsx'));
const AdminPage = lazy(() => import('./components/layout/AdminPage.jsx'));

// 2. Лоадер, который будет показываться доли секунды, пока подгружается JS-код страницы
const PageLoader = () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
    </div>
);

/** Встроенный Sanity Studio плохо переносит React StrictMode в dev (двойной mount). */
function StrictModeBoundary() {
  const { pathname } = useLocation();
  const outlet = <Outlet />;
  if (pathname.startsWith('/admin')) {
    return outlet;
  }
  return <React.StrictMode>{outlet}</React.StrictMode>;
}

const router = createBrowserRouter([
  {
    element: <StrictModeBoundary />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", element: <HomePage /> }, // Главная грузится сразу!
          // 3. Оборачиваем ленивые роуты в Suspense
          { path: "/hero", element: <Suspense fallback={<PageLoader />}><Hero /></Suspense> },
          { path: "/portfolio", element: <Suspense fallback={<PageLoader />}><PortfolioPage /></Suspense> },
          { path: "/path", element: <Suspense fallback={<PageLoader />}><PathPage /></Suspense> },
          { path: "/story", element: <Suspense fallback={<PageLoader />}><StoryPage /></Suspense> },
        ],
      },
      {
        path: "/admin/*",
        element: <Suspense fallback={<PageLoader />}><AdminPage /></Suspense>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
