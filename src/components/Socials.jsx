// Socials.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
    return (
        <div className="flex space-x-4 mt-2 text-white">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-300 px-2" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-300 px-2" />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-300 px-2" />
            </a>
        </div>
    );
}

export default Socials;
