import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css'; // Custom CSS for blurring effect

const ServiceCard = ({ index, title, icon, description }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full p-[1px] rounded-[20px] border-2 border-customBlue flex flex-col justify-center'
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-white rounded-[20px] py-5 px-12 min-h-[350px] flex flex-col items-left pt-10'
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-customBlue text-[20px] font-aquirebold text-left'>
        {title}
      </h3>
      <p className='text-black pt-10 pb-10'>{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '30px',
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
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Clarus24</h2>
        <p className={styles.sectionSubText}>Crafting Security, Curating experience</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[120%] max-w-3xl leading-[30px]"
      >
        Clarus24 excels in designing, managing, and running modern, efficient, and reliable technology infrastructure. We're committed to advancing critical systems that drive human progress. By partnering with the best, investing in our business, and collaborating closely with our customers, we unlock their full potential
      </motion.p>

      <div className="mt-20">
        <Slider {...settings} className='p-5 items-center justify-center bg-white bg-opacity-80'>
          {services.map((service, index) => (
            <div key={service.title} className="px-2">
              <ServiceCard index={index} {...service} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
