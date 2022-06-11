import React from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
import BackTopBtn from './BackTopBtn';
import Contact from './Contact';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Services />
            <Contact />
            <BackTopBtn />
        </div>
    );
};

export default Home;