import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { navLinks, digitalWorkspaceFooter } from "../constants"; // Adjust the path if needed

const Footer = () => {
    return (
        <footer className="bg-customBlue text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
                {/* First Column */}
                <div className="flex-1">
                    <h2 className="text-5xl font-bold mb-4 font-aquirebold">Clarus24</h2>
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
                                <a href={link.url} className="underline-animation hover:text-white">
                                    {`> ${link.title}`}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Third Column */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 font-aquire">Digital Workspace</h3>
                    <ul>
                        {digitalWorkspaceFooter.map((item) => (
                            <li key={item.id} className="mb-2">
                                {`> ${item.title}`}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fourth Column */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 font-aquire">Connect with Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-300" />
                        </a>
                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-300" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
