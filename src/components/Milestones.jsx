import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import Counter from './counter';
import { styles } from '../styles';

import { about } from '../constants'
import { SectionWrapper } from '../hoc';

const CounterCard = ({ index, title, count }) => {
    return (
        <Tilt className='xs:w-[250px] w-full sm:h-[250px]'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full p-[1px] rounded-[20px] shadow-card border-customBlue'
            >
                <div className='bg-white rounded-[20px] py-5 px-12 min-h-[270px] flex justify-left items-left flex-col pt-10'>
                    <div className='flex items-center justify-center flex-col'>
                        <Counter endCount={count} />
                        <h3 className='text-customBlue text-[20px] font-aquirebold text-center mt-5 opacity-60'>{title}</h3>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    );
};

const MileStones = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="-mt-5">
                <h2 className={styles.sectionHeadText}>Our Milestones</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
            >
                We team up with clients to smash through innovation roadblocks and ensure their IT environments are top-notch. Our continuous lifecycle approach adapts to any stage of your digital transformation, providing a dynamic framework for agile co-innovation and progress.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {about.map((about, index) => (
                    <CounterCard key={about.title} index={index} {...about} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(MileStones, "milestones");