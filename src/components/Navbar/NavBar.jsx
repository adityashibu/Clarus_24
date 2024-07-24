import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from "react-scroll";
import NavLinks from "./NavLinks";
import Socials from "../Socials";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useFooterObserver from "../../hooks/useFooterObserver";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useIntersectionObserver(navLinks);
  const isFooterVisible = useFooterObserver();

  const handleLinkClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true, state: { scrollTo: sectionId } });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);

  const firstTwoLinks = navLinks.slice(0, 2);
  const contact = navLinks[2];

  return (
    <nav className={`bg-customBlue z-50 md:fixed md:w-full transition-opacity duration-300 ${isFooterVisible ? 'opacity-100 md:opacity-0' : 'opacity-100'}`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <a className="block xl:mr-8 font-aquirebold text-white text-[200%]" href="#home">
            Clarus<span className="font-altedinbold">24</span>
          </a>
          <div
            className="text-3xl md:hidden text-white z-60 pt-2"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          {firstTwoLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              <ScrollLink
                to={link.url.substring(1)}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick(link.url.substring(1))}
                className={`py-7 px-3 inline-block text-white font-aquirebold navbar-link ${link.url.substring(1) === activeSection ? "active" : ""}`}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
          <NavLinks />
          {contact && (
            <li key={contact.id} className="cursor-pointer">
              <ScrollLink
                to={contact.url.substring(1)}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick(contact.url.substring(1))}
                className={`py-7 px-3 inline-block text-white font-aquirebold navbar-link ${contact.url.substring(1) === activeSection ? "active" : ""}`}
              >
                {contact.title}
              </ScrollLink>
            </li>
          )}
        </ul>
        <div className="md:block hidden">
          <Socials />
        </div>

        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-customBlue fixed top-0 left-0 w-full h-full overflow-y-auto py-24 pl-4 z-50
            transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div
            className="text-3xl text-white z-60 absolute top-5 right-5 pt-2"
            onClick={() => setOpen(false)}
          >
            <ion-icon name="close"></ion-icon>
          </div>
          {firstTwoLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.url.substring(1)}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleLinkClick(link.url.substring(1));
                  setOpen(false);
                }}
                className={`py-7 px-3 inline-block text-white font-aquirebold`}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
          <NavLinks />
          {contact && (
            <li key={contact.id}>
              <ScrollLink
                to={contact.url.substring(1)}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleLinkClick(contact.url.substring(1));
                  setOpen(false);
                }}
                className={`py-7 px-3 inline-block text-white font-aquirebold`}
              >
                {contact.title}
              </ScrollLink>
            </li>
          )}
          <div className="py-5 px-3">
            <Socials />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
