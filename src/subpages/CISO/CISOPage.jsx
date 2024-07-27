import React from 'react';

import CISOHero from './CISOHero';
import CISOServices from './CISOServices';
import CISOServices1 from './CISOServices1';
import CISOServices2 from './CISOServices2';

const CISOPage = () => {
    return (
        <section>
            <CISOHero />
            <div>
                <CISOServices />
                <CISOServices1 />
                <CISOServices2 />
            </div>
        </section>
    )
}

export default CISOPage