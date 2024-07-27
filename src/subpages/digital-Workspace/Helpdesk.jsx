import React from 'react'
import { Footer, Navbar, ScrollUp, StarsCanvas } from '../../components';
import { Analytics } from "@vercel/analytics/react"
import HelpdeskPage from '../Helpdesk/HelpdeskPage';

const Helpdesk = () => {
    return (
        <div className="relative z-0 bg-white">
            <Navbar />
            <div>
                <HelpdeskPage />
                <StarsCanvas />
            </div>
            <ScrollUp />
            <Footer />
            <Analytics />
        </div>
    )
}

export default Helpdesk