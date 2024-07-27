import React from 'react';

import CISOHero from './CISOHero';
import CISOServices from './CISOServices';

const CISOPage = () => {
    return (
        <section>
            <CISOHero />
            <div>
                <CISOServices />
            </div>
        </section>
    )
}

export default CISOPage