import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import Counter from './counter';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import Milestones from './Milestones';

const ServiceCard = ({ index, title, icon, description, isHighlighted }) => (
  <Tilt className='xs:w-[450px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`w-full p-[1px] rounded-[20px] shadow-card border-customBlue`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`rounded-[20px] py-5 px-12 min-h-[280px] flex justify-left items-left flex-col pt-10 ${isHighlighted ? 'bg-[#b7d9ef]' : 'bg-white'
          }`}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-customBlue text-[20px] font-aquirebold text-left'>
          {title}
        </h3>
        <p className='text-black pt-10 pb-10'>{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Clarus24</h2>
        <p className={styles.sectionSubText}>Crafting Security, Curating experience</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
      >
        Clarus24 excels in designing, managing, and running modern, efficient, and reliable technology infrastructure. We're committed to advancing critical systems that drive human progress. By partnering with the best, investing in our business, and collaborating closely with our customers, we unlock their full potential
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            isHighlighted={index === highlightedIndex}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
