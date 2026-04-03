import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Hero from "./components/sections/Hero.jsx";
import HomePage from "./components/layout/HomePage.jsx";
import PortfolioPage from "./components/layout/PortfolioPage.jsx";
import PathPage from "./components/layout/PathPage.jsx";
import StoryPage from "./components/layout/StoryPage.jsx";
import AdminPage from "./components/layout/AdminPage.jsx";

const Story = () => <h1 className="text-4xl font-bold mt-10">Моя личная история</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/hero", element: <Hero /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/path", element: <PathPage /> },
      { path: "/story", element: <StoryPage /> },
    ],
  },
  {
    // 2. Добавляем отдельный роут для админки
    // Звездочка (*) обязательна, так как Sanity использует свою внутреннюю навигацию
    path: "/admin/*",
    element: <AdminPage />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
