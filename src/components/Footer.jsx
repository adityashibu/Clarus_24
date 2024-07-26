import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from "react-scroll";
import Socials from "./Socials";
import { navLinks, servicesFooter } from "../constants";

const handleLinkClick = (navigate, sectionId) => {
    if (location.pathname !== '/') {
        navigate('/', { replace: true, state: { scrollTo: sectionId } });
    } else {
        // Delay scrolling to ensure the page is scrolled to top before scrolling to the section
        setTimeout(() => {
            scroller.scrollTo(sectionId, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }, 100); // Short delay to ensure navigation to the top
    }
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <footer className="bg-customBlue text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
                {/* First Column */}
                <div className="flex-1">
                    <h2 className="text-5xl font-bold mb-4 font-aquirebold">Clarus<span className="font-altedinbold">24</span></h2>
                    <p className="mb-4">
                        Reg RMZ Latitude Commercial 10th Floor,<br />
                        Wework Bellary Road,<br />
                        Hebbal, Bengaluru - 560024
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Phone:</span> +91 7676111331
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> hello@Clarus24.com
                    </p>
                </div>

                {/* Second Column */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 font-aquire">Useful Links</h3>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id} className="mb-2">
                                <ScrollLink
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(navigate, link.id);
                                    }}
                                    className="underline-animation hover:text-white cursor-pointer"
                                >
                                    {`> ${link.title}`}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Third Column */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 font-aquire">Services</h3>
                    <ul>
                        {servicesFooter.map((link) => (
                            <li key={link.id} className="mb-2">
                                <ScrollLink
                                    to="our-services"
                                    smooth={true}
                                    duration={500}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(navigate, "our-services");
                                    }}
                                    className="underline-animation hover:text-white cursor-pointer"
                                >
                                    {`> ${link.title}`}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fourth Column */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 font-aquire">Connect with Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <Socials />
                    </div>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="text-left md:text-center md:mt-10 ml-5 md:ml-0 mt-5 md:mr-5">
                <p className="text-sm md:text-lg">
                    &copy; {currentYear} Clarus24. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
