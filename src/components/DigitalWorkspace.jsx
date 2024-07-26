import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { digitalWorkspace } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carouselVertical.css';

const ServiceCard = ({ title, description, index, backContent }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="flex justify-center"
            onClick={handleFlip}
        >
            <div className="flip-card-container cursor-pointer">
                <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                        <div className="mt-5">
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                            <p className="mt-2 text-black text-[14px]">{description}</p>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="mt-5">
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">Back</h3>
                            <p className="mt-2 text-black text-[14px]">{backContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

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
                    <ServiceCard key={about.title} index={index} {...about} backContent="This is the back of the card." />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(DigitalWorkspace, "digital-workspace");
