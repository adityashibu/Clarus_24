import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import NavLinks from "./NavLinks";
import Socials from "../Socials";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-customBlue z-50 md:fixed md:w-full">
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
          <li className="cursor-pointer">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="py-7 px-3 inline-block text-white font-aquirebold"
              activeClass="underline"
            >
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="py-7 px-3 inline-block text-white font-aquirebold"
              activeClass="underline"
            >
              About
            </ScrollLink>
          </li>
          <NavLinks />
          <li className="cursor-pointer">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="py-7 px-3 inline-block text-white font-aquirebold"
              activeClass="underline"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="md:block hidden">
          <Socials />
        </div>

        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-customBlue fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 z-50
            transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-[-100%]"}
          `}
        >
          <div
            className="text-3xl text-white z-60 absolute top-5 right-5 pt-2"
            onClick={() => setOpen(false)}
          >
            <ion-icon name="close"></ion-icon>
          </div>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="py-7 px-3 inline-block text-white font-aquirebold"
              activeClass="underline"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="py-7 px-3 inline-block text-white font-aquirebold"
              activeClass="underline"
            >
              About
            </ScrollLink>
          </li>
          <NavLinks />
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="py-7 px-3 inline-block text-white font-aquirebold"
              activeClass="underline"
            >
              Contact
            </ScrollLink>
          </li>
          <div className="py-5 px-3">
            <Socials />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
