import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"

import ApplePage from '../Apple/ApplePage';

const Apple = () => {
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

