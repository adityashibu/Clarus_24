import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HelpdeskButton = () => {
    return (
        <Link to="/helpdesk" className="flex flex-col items-center bg-customOrange pt-1 pb-1 md:pr-5 pl-5 rounded-lg shadow-lg text-white font-aquirebold hover:bg-orange-600 transition-colors sm:max-w-sm">
            <div className="flex items-center mb-2">
                <FaPhoneAlt className="text-3xl mr-2" />
                <div className="mt-2">
                    <div className="text-lg sm:text-xl">Helpdesk</div>
                    <div className="text-xs sm:text-sm">24/7 * 365</div>
                </div>
            </div>
        </Link>
    );
};

export default HelpdeskButton;
