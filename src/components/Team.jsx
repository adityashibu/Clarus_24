import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import MarqueeComponent from "./Marquee";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const Team = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Our Team's Expertise</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
            >
                Our expertise is widely recognized through industry and partner certifications, highlighting our professional excellence.
            </motion.p>

            <div className="mt-20">
                <MarqueeComponent />
            </div>
        </>
    );
};

export default SectionWrapper(Team, "team");
