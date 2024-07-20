import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

import MarqueePartners from "./MarqueePartners";
import { SectionWrapper } from "../hoc";

const Partners = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Our Alliances</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
            >
                We are proud to be partnered with the following companies. Our partnerships allow us to provide the best solutions to our clients and help them achieve their business goals.
            </motion.p>

            <motion.div variants={fadeIn("up", "spring")} className="mt-20">
                <MarqueePartners />
            </motion.div>
        </>
    );
};

export default SectionWrapper(Partners, "partners");