import React, { useState } from "react";
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

const ServiceCard = ({ title, description, index, backContent }) => {
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
            <div className="flip-card-container">
                <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                        <div>
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                            <p className="mt-2 text-black text-[14px]">{description}</p>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div>
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">Back</h3>
                            <p className="mt-2 text-black text-[14px]">{backContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const DigitalWorkspace1 = () => {
    return (
        <>
            <div className="-mt-20 flex flex-wrap gap-7 justify-center">
                {digitalWorkspace.slice(3, 6).map((about, index) => (
                    <ServiceCard key={about.title} index={index + 3} {...about} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(DigitalWorkspace1, "digital-workspace1");
