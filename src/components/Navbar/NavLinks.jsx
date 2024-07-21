import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, linkid) => (
        <div key={linkid}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group font-aquirebold"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block centered-menu shadow-xl">
                <div className="py-3"></div>
                <div className="grid grid-cols-4 gap-10 border-t border-gray-300">
                  {link.sublinks.map((mysublinks, mysublinksid) => (
                    <div
                      key={mysublinksid}
                      className={`p-5 rounded-2xl ${mysublinksid === 0 || mysublinksid === 1 || mysublinksid === 2 || mysublinksid === 3 ? "bg-customOrange bg-opacity-20 -mt-5 shadow-lg border-2 border-customOrange" : ""}`}
                    >
                      <h1 className="text-2xl font-semibold text-customBlue font-aquire">
                        {mysublinks.Head}
                      </h1>
                      <div className="mt-5">
                        {mysublinks.sublink.map((slink, slinkid) => (
                          <li className="text-sm text-gray-600 my-2.5" key={slinkid}>
                            <Link to={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks, slinksid) => (
              <div key={slinksid}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                    }
                    className="py-4 pl-7 md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5 font-aquire"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink, slinkid) => (
                      <li className="py-3 pl-14" key={slinkid}>
                        <Link to={slink.link} className="font-aquirelight">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
