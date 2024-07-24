// src/hooks/useIntersectionObserver.js

import { useEffect, useState } from "react";

const useIntersectionObserver = (links) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = links.map(link => document.querySelector(link.url));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [links]);

    return activeSection;
};

export default useIntersectionObserver;
