import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../../utils/motion'
import { styles } from '../../styles'

import { useMediaQuery } from 'react-responsive'
import { Tilt } from 'react-tilt'
import { apple_adoption_services } from '../../constants'

import { SectionWrapper } from '../../hoc'

const ServiceCard = ({ title, description, index }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className=""
        >
            {isSmallScreen ? (
                <div className="md:mt-0 -mt-5">
                    <div className="bg-[#ffffff] p-5 rounded-2xl h-[350px] sm:w-[360px] w-full border-2 border-customBlue shadow-card flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                            <p className="text-black text-[14px] mt-5">{description}</p>
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
                    className="bg-[#ffffff] p-5 rounded-2xl h-[350px] sm:w-[300px] w-full border-2 border-customBlue shadow-card flex items-center justify-center"
                >
                    <div className="text-center">
                        <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                        <p className="text-black text-[14px] mt-5">{description}</p>
                    </div>
                </Tilt>
            )}
        </motion.div>
    );
}

const AppleServices = () => {
    return (
        <section>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Clarus<span className="font-altedin">24</span>'s Apple Adoption Services Include:</h2>
            </motion.div>
            <div className="flex flex-wrap gap-7 justify-center mt-20">
                {apple_adoption_services[0].subpoints.map((subpoint, index) => (
                    <ServiceCard key={index} index={index} title={subpoint.title} description={subpoint.description} />
                ))}
            </div>
        </section>
    )
};

export default SectionWrapper(AppleServices, "AppleServices")