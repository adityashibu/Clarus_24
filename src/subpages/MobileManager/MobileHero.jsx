import React from 'react'

import { styles } from '../../styles'
import { fadeIn } from '../../utils/motion'

import { motion } from 'framer-motion'
import Lottie from 'react-lottie'

import { mobileDevice } from '../../assets'

import { SectionWrapper } from '../../hoc'

const MobileHero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mobileDevice,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
        }
    };

    return (
        <div className={`md:${styles.paddingX} md:ml-[80px] lg:ml-[20px] flex flex-col md:flex-row items-center gap-8`}>
            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center md:items-start text-center md:text-left md:mr-20"
            >
                <h1 className={`${styles.heroHeadText} text-black`}>
                    <span className="text-customBlue font-aquirebold text-[90%]">Mobile Device Manager</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-black-100 font-light font-aquirelight`}>
                    Seamless Connectivity for Your Apple Ecosystem<br className='sm:block hidden' />
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                className="relative flex-shrink-0 md:opacity-100 z-10"
            >
                <div className="lottie-container md:w-[600px] md:h-[600px] w-[350px] h-[350px] pointer-events-none md:mt-[70px] lg:-ml-[50px] -mt-[50px]">
                    <Lottie
                        options={defaultOptions}
                        width="100%"
                        height="100%"
                    />
                </div>
            </motion.div>
        </div>
    )
};

export default SectionWrapper(MobileHero, "MobileHero");