import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"

import ApplePage from '../Apple/ApplePage';

import { apple_protection } from '../../assets';

const Apple = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: apple_protection,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="relative z-0 bg-white">
            <Navbar />
            <div>
                <ApplePage />
                <StarsCanvas />
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    );
};

export default Apple;

