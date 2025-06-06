import { styles } from '../../styles'
import { fadeIn } from '../../utils/motion'

import { motion } from 'framer-motion'
import Lottie from 'react-lottie'

import { CISO } from '../../assets'

import { SectionWrapper } from '../../hoc'

const CISOHero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: CISO,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={`md:${styles.paddingX} md:ml-[200px] lg:ml-[100px] flex flex-col md:flex-row items-center gap-8`}>
            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center md:items-start text-center md:text-left md:mr-20"
            >
                <h1 className={`${styles.heroHeadText} text-black`}>
                    <span className="text-customBlue font-aquirebold text-[90%]">CISO Services</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-black-100 font-light font-aquirelight`}>
                    Strategic Security Leadership for a Robust Defense<br className='sm:block hidden' />
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

export default SectionWrapper(CISOHero, "CISOHero");