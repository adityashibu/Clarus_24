import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import Counter from './counter';

import { styles } from '../styles';
import { services, about } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[450px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card border-customBlue'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-left items-left flex-col pt-10'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-customBlue text-[20px] font-aquirebold text-left'>
          {title}
        </h3>
        <p className='text-black pt-10 pb-10 font-aquirelight'>{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Clarus24</h2>
        <p className={styles.sectionSubText}>Crafting Security, Curating experience</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[95%] max-w-3xl leading-[30px]"
      >
        Clarus24 excels in designing, managing, and running modern, efficient, and reliable technology infrastructure. We're committed to advancing critical systems that drive human progress. By partnering with the best, investing in our business, and collaborating closely with our customers, we unlock their full potential
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Our Milestones</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[95%] max-w-3xl leading-[30px]"
      >
        We team up with clients to smash through innovation roadblocks and ensure their IT environments are top-notch. Our continuous lifecycle approach adapts to any stage of your digital transformation, providing a dynamic framework for agile co-innovation and progress.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {about.map((about, index) => (
          <CounterCard key={about.title} index={index} {...about} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")