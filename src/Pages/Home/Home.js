import React from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
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
        </div>
    );
};

export default Home;