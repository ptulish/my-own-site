// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => (
    <Helmet>
        <title>{title} | PTULISH</title>
        <meta name="description" content={description}/>
        {/* Open Graph для соцсетей */}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
        <link rel="alternate" href="https://ptulish.com/ru" hrefLang="ru"/>
        <link rel="alternate" href="https://ptulish.com/en" hrefLang="en"/>
    </Helmet>
);
