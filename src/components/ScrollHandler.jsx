import { useEffect, useLocation } from "react";

const ScrollHandler = () => {
    const location = useLocation();

    useEffect(() => {
        const target = localStorage.getItem('scrollTarget');
        if (target) {
            const element = document.getElementById(target);
            if (element) {
                scroll.scrollTo(element.offsetTop, {
                    duration: 500,
                    smooth: true
                });
            }
            localStorage.removeItem('scrollTarget');
        }
    }, [location]);

    return null;
};

export default ScrollHandler;