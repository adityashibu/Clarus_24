import { useState, useEffect } from 'react';

const useFooterObserver = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsFooterVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(footer);

        return () => {
            if (footer) observer.unobserve(footer);
        };
    }, []);

    return isFooterVisible;
};

export default useFooterObserver;