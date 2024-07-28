import React from 'react'
import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"
import WebAppPage from '../WebAppTesting/WebAppPage';

const WebAppTesting = () => {
    return (
        <div className="relative z-0 bg-white">
            <Navbar />
            <div>
                <WebAppPage />
                <StarsCanvas />
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    )
}

export default WebAppTesting