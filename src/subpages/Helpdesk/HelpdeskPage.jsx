import React from 'react';
import HelpdeskHero from './HelpdeskHero';
import HelpdeskServices from './HelpdeskServices';
import HelpdeskReasons from './HelpdeskReasons';

const HelpdeskPage = () => {
    return (
        <section>
            <HelpdeskHero />
            <div>
                <HelpdeskServices />
                <HelpdeskReasons />
            </div>
        </section>
    )
}

export default HelpdeskPage