import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { useMediaQuery } from 'react-responsive';
import { TemplateWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ title, description, index }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="px-5 py-5"
        >
            <div className={`bg-white p-5 rounded-2xl h-[250px] sm:w-[360px] w-full border-2 border-customBlue shadow-card ${isSmallScreen ? '' : 'tilt-class'}`}>
                <div className="mt-5">
                    <h3 className="text-customBlue font-bold text-[24px] font-aquireBold">{title}</h3>
                    <p className="mt-2 text-black text-[14px]">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Template = ({ data }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '10px',
        slidesToScroll: 1,
        dots: true,
        arrows: true,
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
        <div className="p-6">
            {data.map((section, index) => (
                <div key={index} className="bg-customBlue">
                    {section.maintitle && <h1 className="font-aquireBold text-6xl text-customBlue">{section.maintitle}</h1>}
                </div>
            ))}
        </div>
    );
};

export default TemplateWrapper(Template, "Template");
