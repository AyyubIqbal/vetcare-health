import React from 'react';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import ServicesHome from '../ServicesHome/ServicesHome';
import SpecialistHome from '../SpecialistHome/SpecialistHome';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <SpecialistHome />
            <ServicesHome />
            <Footer />
        </div>
    );
};

export default Home;