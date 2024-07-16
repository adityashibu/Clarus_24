import { motion } from 'framer-motion';

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row gap-5 items-center`}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.5)}
          initial="hidden"
          animate="show"
        >
          <h1 className={`${styles.heroHeadText} text-black`}>
            <span className="text-customBlue font-aquirebold text-[120%]">CLARUS24</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100 font-light font-aquirelight`}>
            CRAFTING SECURITY, CURATING EXPERIENCE<br className='sm:block hidden' />
          </p>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-customBlue opacity-50 flex justify-center items-start p-2">
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
    </section >
  )
}

export default Hero