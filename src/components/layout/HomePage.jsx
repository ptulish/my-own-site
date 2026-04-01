import React from 'react';
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import PortfolioTeaser from "../sections/PortfolioTeaser.jsx";
import ContactCTA from "../sections/Contact.jsx";
import PricingSection from "../sections/PricingSection.jsx";
import FAQSection from "../sections/FAQSection.jsx";
import HomeSectionNav from "../sections/HomeSectionNav.jsx";

const HomePage = () => {
    return (
        <>
            <HomeSectionNav />

            <section id="hero">
                <Hero />
            </section>

            <section id="features">
                <Features />
            </section>

            <section id="work">
                <PortfolioTeaser />
            </section>

            <section id="pricing">
                <PricingSection />
            </section>

            <section id="faq">
                <FAQSection />
            </section>

            <section id="contact">
                <ContactCTA />
            </section>
        </>
    );
};

export default HomePage;
