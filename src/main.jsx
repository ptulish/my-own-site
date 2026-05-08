import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import './i18n';
import {Helmet, HelmetProvider} from "react-helmet-async"; // <-- Добавьте эту строку

const rootElement = document.getElementById('root');
const app = (
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
);

if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
} else {
    createRoot(rootElement).render(app);
}
