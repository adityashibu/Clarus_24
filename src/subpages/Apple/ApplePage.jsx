import AppleHero from './AppleHero';

import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { styles } from '../../styles';

import { SectionWrapper } from '../../hoc';
import AppleAbout from './AppleAbout';

const ApplePage = () => {
    return (
        <section>
            <AppleHero />
            <div>
                <AppleAbout />
            </div>
        </section>
    );
};

export default SectionWrapper(ApplePage, "ApplePage");

