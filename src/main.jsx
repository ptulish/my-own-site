import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import './i18n';
import {Helmet, HelmetProvider} from "react-helmet-async"; // <-- Добавьте эту строку

createRoot(document.getElementById('root')).render(
        <StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </StrictMode>,

)
