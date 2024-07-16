import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (nav) => {
    if (nav.id === 'profile' || nav.id === 'projects') {
      navigate(`/${nav.id}`);
    } else {
      navigate(`/#${nav.id}`);
    }
    setActive(nav.title);
    setToggle(false);
  }

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          variants={fadeIn('down', 'spring')}
          initial="hidden"
          animate="show"
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-customBlue text-[25px] font-bold cursor-pointer flex -mx-11 sm:-mx-1 font-aquirebold">Clarus24</p>
        </motion.Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}
              className={`
                ${active == link.title ? "text-customBlue" : "text-gray-400"} hover:text-customBlue text-[15px] cursor-pointer
              `}
              onClick={() => handleNavClick(link)}
            >
              {link.id === 'profile' || link.id === 'projects' ? (
                <Link to={`/${link.id}`}>{link.title}</Link>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-gray-400" : "text-white"
                    }`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.id === 'profile' || nav.id === 'projects' ? (
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar