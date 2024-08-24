import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carouselVertical.css';

const ServiceCard = ({ title, meaning_title, meaning, description, index, backlinks, icon }) => {
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
                    <div className="flip-card-front flex flex-col items-left">
                        <div className="-mt-10">
                            {icon && (
                                <img src={icon} alt={`${title} icon`} className="w-12 h-12 mb-2" />
                            )}
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">{title}</h3>
                            {/* <h3 className="text-customGreen text-[15px] font-bold lowercase italic mt-2">{meaning_title}</h3>
                            <p className="text-customGreen text-[12px] mb-5 lowercase italic">{meaning}</p> */}
                            <p className="mt-2 text-black text-[15px]">{description}</p>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <svg width="24" height="24" fill="currentColor" className="text-customBlue">
                                <path d="M12 0L10.59 1.41 20.17 11H0v2h20.17l-9.58 9.59L12 24l12-12L12 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flip-card-back flex flex-col p-5">
                        <div className="flex flex-col">
                            <h3 className="text-customBlue font-bold text-[24px] font-aquirebold">Our Services</h3>
                            <ul className="mt-2">
                                {backlinks.map((link, index) => (
                                    <li key={index} className="mb-2 text-black hover:underline hover:text-customBlue">
                                        <Link to={link.link} className="text-black hover:underline hover:text-customBlue" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <svg width="24" height="24" fill="currentColor" className="text-customBlue">
                                <path d="M12 0L10.59 1.41 20.17 11H0v2h20.17l-9.58 9.59L12 24l12-12L12 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const DigitalWorkspace = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });

    const containerStyle = {
        width: isLargeScreen ? '80%' : '100%',
        columnGap: isLargeScreen ? '-5px' : '0px',
    };

    return (
        <section id="our-services">
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Our Services</h2>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
                >
                    Explore our array of services that are designed to help you achieve your business goals. Our services are tailored to meet your specific needs and requirements, ensuring that you get the best possible results.
                </motion.p>
            </motion.div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center mx-auto" style={containerStyle}>
                {services.slice(0, 4).map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        title={service.title}
                        meaning_title={service.meaning_title}
                        meaning={service.meaning}
                        description={service.description}
                        backlinks={service.backlinks}
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default SectionWrapper(DigitalWorkspace, "our-services");
