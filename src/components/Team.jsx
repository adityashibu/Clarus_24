import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import MarqueeComponent from "./Marquee";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const ServiceCard = ({ image }) => (
    <motion.div
        variants={fadeIn("right", "spring")}
        className="w-full p-[1px] rounded-[20px] flex flex-col justify-center"
    >
        <div className="bg-white rounded-[20px] py-5 px-12 min-h-[100px] flex flex-col items-center">
            <img src={image} alt="certification" className="w-50 h-50 object-contain" />
        </div>
    </motion.div>
);

const Team = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "30px",
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                }
            }
        ],
    };

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
