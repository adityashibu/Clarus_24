import React from 'react';
import HelpdeskHero from './HelpdeskHero';
import HelpdeskServices from './HelpdeskServices';

const HelpdeskPage = () => {
    return (
        <section>
            <HelpdeskHero />
            <div>
                <HelpdeskServices />
            </div>
        </section>
    )
}

export default HelpdeskPage