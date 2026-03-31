import React from 'react';
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import PortfolioTeaser from "../sections/PortfolioTeaser.jsx";
import ContactCTA from "../sections/Contact.jsx";


const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <PortfolioTeaser />
            <ContactCTA />
        </>
    )
}


export default HomePage;
