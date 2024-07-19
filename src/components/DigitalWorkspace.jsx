import React from "react";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import { styles } from '../styles';
import { motion } from 'framer-motion';
import { digitalWorkspace } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { Tilt } from "react-tilt";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carouselVertical.css';

const ServiceCard = ({ title, description }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    return (
        <motion.div
            variants={fadeIn("up", "spring")}
            className=""
        >
            {isSmallScreen ? (
                <div className="bg-[#ffffff] p-5 rounded-2xl h-[250px] sm:w-[360px] w-full border-2 border-customBlue">
                    <div className="mt-5">
                        <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                        <p className="mt-2 text-black text-[14px]">{description}</p>
                    </div>
                </div>
            ) : (
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-[#ffffff] p-5 rounded-2xl h-[250px] sm:w-[360px] w-full border-2 border-customBlue"
                >
                    <div className="mt-5">
                        <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                        <p className="mt-2 text-black text-[14px]">{description}</p>
                    </div>
                </Tilt>
            )}
        </motion.div>
    );
}

const DigitalWorkspace = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Digital Workspace</h2>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
                >
                    We partner with business to eliminate innovation barriers and enable modern IT management. Our continuous lifecycle approach meets businesses at their current stage of digital transformation, providing a framework for agile co-innovation:
                </motion.p>
            </motion.div>
            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {digitalWorkspace.slice(0, 3).map((about, index) => (
                    <ServiceCard key={about.title} index={index} {...about} />
                ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-7 justify-center">
                {digitalWorkspace.slice(3, 6).map((about, index) => (
                    <ServiceCard key={about.title} index={index} {...about} />
                ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-7 justify-center">
                {digitalWorkspace.slice(6, 9).map((about, index) => (
                    <ServiceCard key={about.title} index={index} {...about} />
                ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-7 justify-center">
                {digitalWorkspace.slice(9, 12).map((about, index) => (
                    <ServiceCard key={about.title} index={index} {...about} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(DigitalWorkspace, "digital-workspace");
