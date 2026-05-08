import React from 'react';
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import PortfolioTeaser from "../sections/PortfolioTeaser.jsx";
import ContactCTA from "../sections/Contact.jsx";
import PricingSection from "../sections/PricingSection.jsx";
import FAQSection from "../sections/FAQSection.jsx";
import HomeSectionNav from "../sections/HomeSectionNav.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import SeoIntentSection from "../sections/SeoIntentSection.jsx";
import SEO from "../SEO.jsx";
import {useTranslation} from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <>
            <SEO
                title={t('seo.home_title', 'PTulish - Web Developer')}
                description={t('seo.home_description', 'Professional interfaces development from Pavels Tuliss.')}
            />

            <HomeSectionNav />

            <section id="hero">
                <Hero />
            </section>

            <section id="features">
                <Features />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="work">
                <PortfolioTeaser />
            </section>

            <section id="seo-content">
                <SeoIntentSection />
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
