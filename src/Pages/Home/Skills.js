import React from 'react';
import SkillImg1 from '../../assets/img/skills/html5.png';
import SkillImg2 from '../../assets/img/skills/css3.png';
import SkillImg3 from '../../assets/img/skills/js.png';
import SkillImg4 from '../../assets/img/skills/reactjs.png';
import SkillImg5 from '../../assets/img/skills/expressJs.png'
import SkillImg6 from '../../assets/img/skills/nodejs.png';
import SkillImg7 from '../../assets/img/skills/mongodb.svg';
import SkillImg8 from '../../assets/img/skills/firebase.svg';

const Skills = () => {
    return (
        <section className='bg-tertiary py-12  '>
            <div className='container max-w-7xl mx-auto  px-2 lg:px-0'>
                <div className='grid grid-cols-8 md:grid-flow-col'>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg1} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg2} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg3} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg4} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg5} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg6} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg7} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={SkillImg8} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;