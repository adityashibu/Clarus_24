import React, { useState, useEffect } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterCrossed, setIsFooterCrossed] = useState(false);

    const handleScroll = () => {
        const footer = document.querySelector('footer');
        const footerPosition = footer ? footer.getBoundingClientRect().top + window.scrollY : Infinity;
        const aboutSection = document.querySelector('#about-us');
        const aboutSectionPosition = aboutSection ? aboutSection.offsetTop : 0;

        console.log('Window scrollY:', window.scrollY);
        console.log('About section position:', aboutSectionPosition);
        console.log('Footer position:', footerPosition);

        if (window.scrollY > aboutSectionPosition) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        if (window.scrollY + window.innerHeight > footerPosition) {
            setIsFooterCrossed(true);
        } else {
            setIsFooterCrossed(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 p-3 rounded-full shadow-2xl transition duration-300 ${isFooterCrossed ? 'bg-white text-customBlue shadow-lg' : 'bg-customBlue text-white shadow-lg'
                    }`}
                aria-label="Scroll to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7-7-7 7M12 4v16"
                    />
                </svg>
            </button>
        )
    );
};

export default ScrollUp;
