import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Lottie from 'react-lottie';
import { devicemgmt } from '../assets';

import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: devicemgmt,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center pt-[0px] md:pt-0 -mt-[200px]">
      <div className={`${styles.paddingX} flex flex-col md:flex-row items-center gap-8`}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.5)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center md:items-start text-center md:text-left md:mr-20"
        >
          <h1 className={`${styles.heroHeadText} text-black`}>
            <span className="text-customBlue font-aquirebold text-[120%]">CLARUS<span className="font-altedin">24</span></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100 font-light font-aquirelight`}>
            CRAFTING SECURITY, CURATING EXPERIENCE<br className='sm:block hidden' />
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.5)}
          initial="hidden"
          animate="show"
          className="relative flex-shrink-0 md:opacity-100 z-10 mb-[50px]"
        >
          <div className="lottie-container md:w-[600px] md:h-[600px] w-[350px] h-[350px] pointer-events-none">
            <Lottie
              options={defaultOptions}
              width="100%"
              height="100%"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pt-[100px]">
        <ScrollLink to="about-us" smooth={true} duration={500} offset={-50}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-customBlue flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-4 h-4 rounded-full bg-customBlue"
            />
          </div>
        </ScrollLink>
      </div>
    </section>
  );
}

export default SectionWrapper(Hero, "home");
