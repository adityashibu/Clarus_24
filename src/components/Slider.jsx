import { useState } from "react";
import Slider from "react-slick"; // Importing React Slick
import { SectionWrapper } from "../hoc";

const appleHome = [
  {
    title: "Harnessing Apple's Power for Business Excellence",
    content:
      "In the heart of every thriving business lies the core of seamless technology integration—where every task is streamlined and every workflow is optimized. At Clarus24, we begin our story with a simple but powerful belief: Apple devices are not just tools, but catalysts for transformation.",
  },
  {
    title: "The Apple Advantage in Business",
    content:
      "Why do leading businesses increasingly choose Apple? Because at the intersection of aesthetics and functionality, Apple devices offer a suite of features designed for the modern enterprise. From unmatched security protocols to eco-systemic synergy that enhances productivity, Apple technology is built to empower. They are the engines ideal for driving businesses forward, adaptable to both the boardroom and the creative studio alike.",
  },
  {
    title: "Crafting Custom Apple Ecosystems",
    content:
      "Our role in your story is clear: Clarus24 masterfully integrates Apple technology into your business environment. With expertise in cutting-edge Mobile Device Management (MDM) tools, we deploy, manage, and secure Apple devices with a precision that makes complexity seem simple. Imagine deploying hundreds of devices with zero-touch setup, each pre-configured to connect seamlessly with your corporate network via Single Sign-On (SSO), ready to use straight out of the box.",
  },
  {
    title: "Zero-Touch Deployment: A New Beginning",
    content:
      "The journey of an Apple device in your organization begins with a promise of efficiency. Before your team even powers on their new device, we ensure it's tailored to fit into your operations flawlessly. With zero-touch deployment, devices are configured remotely and delivered ready for immediate productivity, minimizing downtime and IT overhead.",
  },
  {
    title: "Seamless Integration Across All Touchpoints",
    content:
      "Once integrated, Apple devices communicate and collaborate in a language of high efficiency and synchronicity. Our management solutions cover everything from automatic app updates to comprehensive security settings, ensuring that your data is protected and your operations are uninterrupted.",
  },
  {
    title: "Single Sign-On: One Key, Many Doors",
    content:
      "Empower your team with the convenience of Single Sign-On. SSO simplifies access to a myriad of applications, enhancing user experience while upholding stringent security standards. It’s about making sure that the right people have the right access at the right time, effortlessly",
  },
  {
    title: "Partner with Clarus24",
    content:
      "With Clarus24, step into a future where technology solutions not only support but also drive your business goals. Our commitment to excellence in Apple device management lets you focus on what you do best—growing your business.",
  },
];

const SliderApple = () => {
  const settings = {
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Only one slide visible at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show navigation arrows
    dots: true, // Enable dots for navigation
    centerMode: true,
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {appleHome.map((slide, index) => (
          <div
            key={index}
            className="w-full border-2 border-customBlue rounded-2xl shadow-card h-[300px] flex items-center justify-center text-center pl-5 pr-5 bg-customBlue"
          >
            <div className="text-center flex flex-col items-center justify-center h-full">
              {" "}
              {/* Added flex-col, items-center, justify-center, and h-full */}
              <h3 className="text-white font-bold text-[24px] font-aquirebold">
                {slide.title}
              </h3>
              <p className="mt-4 text-lg text-white">{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SectionWrapper(SliderApple, "SliderApple");
