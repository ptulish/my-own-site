import React from 'react';
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import PortfolioTeaser from "../sections/PortfolioTeaser.jsx";
import ContactCTA from "../sections/Contact.jsx";
import PricingSection from "../sections/PricingSection.jsx";
import FAQSection from "../sections/FAQSection.jsx";


const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <PortfolioTeaser />
            <PricingSection />
            <FAQSection />
            <ContactCTA />
        </>
    )
}


export default HomePage;
