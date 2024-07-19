import React, { useState } from "react";
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from "../utils/motion";

import { faqs } from "../constants";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="accordion">
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>FAQ's</h2>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
                >
                    Your Questions, Our Answers: Everything You Need to Know About Clarus24's Expert Services
                </motion.p>
            </motion.div>
            <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-10 bg-white bg-opacity-90">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item border-b border-gray-300">
                        <div
                            className="faq-question cursor-pointer py-3 flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-customBlue font-bold text-lg font-aquire text-[15px] sm:text-[20px] pr-3">{faq.question}</h3>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transform transition-transform ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}
                                style={{ minWidth: '24px', minHeight: '24px' }}
                            >
                                <path
                                    d="M12 5v14m7-7H5"
                                    stroke="#004D80"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <motion.div
                            initial={false}
                            animate={{ height: activeIndex === index ? 'auto' : 0 }}
                            className="overflow-hidden"
                        >
                            <p className="faq-answer text-black text-[15px] pb-3">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(FAQAccordion, "faqs");
