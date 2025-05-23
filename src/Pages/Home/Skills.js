import React from 'react';
// import html from '../../assets/img/skills/html5.png';
// import css from '../../assets/img/skills/css3.png';
import js from '../../assets/img/skills/js.png';
import react from '../../assets/img/skills/reactjs.png';
import expressJs from '../../assets/img/skills/expressJs.png'
import nodejs from '../../assets/img/skills/nodejs.png';
import mongodb from '../../assets/img/skills/mongodb.svg';
import firebase from '../../assets/img/skills/firebase.svg';
import wordpress from '../../assets/img/skills/wordpress.png';
import elementor from '../../assets/img/skills/elementor.png';
import python from '../../assets/img/skills/python.png';
import flask from '../../assets/img/skills/flask.png';

const Skills = () => {
    return (
        <section className='bg-secondary py-12  '>
            <div className='container max-w-7xl mx-auto  px-2 lg:px-0'>
                <div className='grid grid-cols-10 md:grid-flow-col'>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={react} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={js} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={expressJs} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={nodejs} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={mongodb} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={firebase} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={wordpress} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={elementor} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={python} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={flask} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;