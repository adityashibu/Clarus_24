import AppleHero from './AppleHero';
import { SectionWrapper } from '../../hoc';
import AppleAbout from "../Apple/AppleAbout"
import AppleServices from './AppleServices';
import AppleReasons from './AppleReasons';

const ApplePage = () => {
    return (
        <section>
            <AppleHero />
            <div>
                <AppleAbout />
                <AppleServices />
                <AppleReasons />
            </div>
        </section>
    );
};

export default SectionWrapper(ApplePage, "ApplePage");

