import React from 'react'
import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"
import ComingSoonPage from '../ComingSoon/ComingSoonPage';

const ComingSoon = () => {
    return (
        <div className="relative z-0 bg-white">
            <Navbar />
            <div>
                <ComingSoonPage />
                <StarsCanvas />
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    )
}

export default ComingSoon