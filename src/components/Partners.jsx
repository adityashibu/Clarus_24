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
                <h2 className={styles.sectionHeadText}>Our Partners</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
            >
                Our expertise is widely recognized through industry and partner certifications, highlighting our professional excellence.
            </motion.p>

            <div className="mt-20">
                <MarqueePartners />
            </div>
        </>
    );
};

export default SectionWrapper(Partners, "partners");