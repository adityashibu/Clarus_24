
import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"
import CISOPage from '../CISO/CISOPage';

const CISO = () => {
    return (
        <div className="relative z-0 bg-white">
            <Navbar />
            <div>
                <CISOPage />
                <StarsCanvas />
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    )
}

export default CISO