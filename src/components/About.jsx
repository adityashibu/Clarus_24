import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { clarus } from '../assets';

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Clarus<span className="font-altedin">24</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
      >
        We team up with clients to smash through innovation roadblocks and ensure their IT environments are top-notch. Our continuous lifecycle approach adapts to any stage of your digital transformation, providing a dynamic framework for agile co-innovation and progress.
      </motion.p>

      <div className="mt-20 flex justify-center items-center">
        <video
          src={clarus}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-w-[100%] lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[500px] lg:max-h-[700px] xl:max-h-[900px] 2xl:max-h-[1000px] pointer-events-none"
        />
      </div>
    </section>
  );
}

export default SectionWrapper(About, "about");
