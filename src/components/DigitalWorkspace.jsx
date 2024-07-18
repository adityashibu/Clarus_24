import React from "react";
import Slider from 'react-slick';

import { styles } from '../styles';
import { motion } from 'framer-motion';
import { digitalWorkspace } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carouselVertical.css';

const ServiceCard = ({ title, description }) => (
    <motion.div
        variants={fadeIn("right", "spring")}
        className='w-full p-[1px] rounded-[20px] border-2 border-customBlue flex flex-col justify-center'
    >
        <div
            className='bg-white rounded-[20px] py-5 px-12 min-h-[370px] flex flex-col items-left pt-10'
        >
            <h3 className='text-customBlue text-[20px] font-aquirebold text-left'>
                {title}
            </h3>
            <p className='text-black pt-10 pb-10'>{description}</p>
        </div>
    </motion.div>
);

const DigitalWorkspace = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
                <h2 className={styles.sectionHeadText}>Digital Workspace</h2>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
                >
                    We partner with business to eliminate innovation barriers and enable modern IT management. Our continuous lifecycle approach meets businesses at their current stage of digital transformation, providing a framework for agile co-innovation:
                </motion.p>
            </motion.div>

            <div className="mt-20">
                <Slider {...settings} className='p-5 items-center justify-center bg-white bg-opacity-80'>
                    {digitalWorkspace.map((service, index) => (
                        <div key={service.title} className="px-2">
                            <ServiceCard index={index} {...service} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default SectionWrapper(DigitalWorkspace, "digital-workspace");