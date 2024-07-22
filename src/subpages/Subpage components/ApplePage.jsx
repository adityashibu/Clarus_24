import { Footer, Navbar } from '../../components';
import { Analytics } from "@vercel/analytics/react"

import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { fadeIn } from '../../utils/motion';
import Lottie from 'react-lottie';

import { apple_protection } from '../../assets';

import { SectionWrapper } from '../../hoc';

const ApplePage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: apple_protection,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section className="relative w-full h-screen mx-auto flex justify-center items-center pt-[0px] md:pt-0 -mt-[200px] md:-mt-12">
            <div className={`${styles.paddingX} flex flex-col md:flex-row items-center gap-8`}>
                <motion.div
                    variants={fadeIn('up', 'spring', 0.5)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center md:items-start text-center md:text-left md:mr-20"
                >
                    <h1 className={`${styles.heroHeadText} text-black`}>
                        <span className="text-customBlue font-aquirebold text-[90%]">Apple Adoption</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-black-100 font-light font-aquirelight`}>
                        Embrace the power of Apple<br className='sm:block hidden' />
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn('up', 'spring', 0.5)}
                    initial="hidden"
                    animate="show"
                    className="relative flex-shrink-0 md:opacity-100 z-10"
                >
                    <div className="lottie-container md:w-[600px] md:h-[600px] w-[350px] h-[350px] pointer-events-none md:-mt-[0px] -mt-[50px]">
                        <Lottie
                            options={defaultOptions}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(ApplePage, "ApplePage");

