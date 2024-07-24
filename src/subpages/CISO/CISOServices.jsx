import React from 'react'

import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { styles } from '../../styles';

import { SectionWrapper } from '../../hoc';

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