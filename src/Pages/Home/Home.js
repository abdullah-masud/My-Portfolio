import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import About from './About';
import BackTopBtn from './BackTopBtn';
import Contact from './Contact';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';
import About2 from './About2';

const Home = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            {/* <About /> */}
            <About2 />
            <Skills />
            <Portfolio />
            {/* <Services /> */}
            <Contact />
            <Footer />
            <BackTopBtn />

        </div>
    );
};

export default Home;