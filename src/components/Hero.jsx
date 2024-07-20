import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Lottie from 'react-lottie';
import { devicemgmt } from '../assets';

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
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex items-center -mt-20`}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.5)}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center gap-8 md:-ml-20"
        >
          <div className="flex flex-col md:mr-12">
            <h1 className={`${styles.heroHeadText} text-black`}>
              <span className="text-customBlue font-aquirebold text-[120%]">CLARUS<span className="font-altedin">24</span></span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-black-100 font-light font-aquirelight`}>
              CRAFTING SECURITY, CURATING EXPERIENCE<br className='sm:block hidden' />
            </p>
          </div>

          <div className="relative flex-shrink-0 md:pl-20 md:opacity-100 md:z-10 z-0">
            <div className="lottie-container md:w-[600px] md:h-[600px] w-[350px] h-[350px]">
              <Lottie
                options={defaultOptions}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about-us">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-customBlue flex justify-center items-start p-2">
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
        </a>
      </div>
    </section>
  );
}

export default SectionWrapper(Hero, "home");
