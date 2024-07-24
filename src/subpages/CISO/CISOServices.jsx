import React from 'react'

import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../../utils/motion';
import { styles } from '../../styles';

import { SectionWrapper } from '../../hoc';

import { Tilt } from 'react-tilt';
import { useMediaQuery } from 'react-responsive';

const ServiceCard = ({ title, point, index }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className=""
        >
            {isSmallScreen ? (
                <div className="md:mt-0 -mt-5">
                    <div className="bg-[#ffffff] p-5 rounded-2xl h-[200px] sm:w-[360px] w-full border-2 border-customBlue shadow-card flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                            <p className="text-black text-[14px]">{point}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-[#ffffff] p-5 rounded-2xl h-[200px] sm:w-[300px] w-full border-2 border-customBlue shadow-card flex items-center justify-center"
                >
                    <div className="text-center">
                        <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                        <p className="text-black text-[14px]">{point}</p>
                    </div>
                </Tilt>
            )}
        </motion.div>
    );
}

const CISOServices = () => {
    return (
        <section>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Clarus<span className="font-altedin">24</span>'s CISO Services Include</h2>
            </motion.div>
            {/* <div className="flex flex-wrap gap-7 justify-center mt-20">
                {apple_adoption[0].subpoints.map((subpoint, index) => (
                    <ServiceCard key={index} index={index} title={subpoint.title} point={subpoint.point} />
                ))}
            </div> */}
        </section>
    )
};

export default SectionWrapper(CISOServices, "CISOServices");