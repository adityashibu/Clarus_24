
import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"
import MobileManager from '../MobileManager/MobileManagerPage';

const Mobile = () => {
    return (
        <div className="relative z-0 bg-white">
            <Navbar />
            <div>
                <MobileManager />
                <StarsCanvas />
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    )
}

export default Mobile