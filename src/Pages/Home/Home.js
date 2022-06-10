import React from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
import BackTopBtn from './BackTopBtn';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <BackTopBtn />
        </div>
    );
};

export default Home;