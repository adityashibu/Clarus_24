import { Footer, Navbar, ScrollUp } from '../../components';
import { Analytics } from "@vercel/analytics/react"

import ApplePage from '../Subpage components/ApplePage';

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
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    );
};

export default Apple;

