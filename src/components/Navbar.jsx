import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const socials = [
    {
      id: 1,
      icon: FaGithub,
      url: "https://github.com/Apuri-Amarnath",
    },
    {
      id: 2,
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/amarnath-apuri-533123280/",
    },
    {
      id: 3,
      icon: FaEnvelope,
      url: "mailto:apuriamarnath123@gmail.com",
    },
  ];
  return (
    <div className="flex px-4 justify-between items-center w-full h-20 text-teal-100 bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature">A</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-xl cursor-pointer capitalize font-medium text-teal-100 hover:scale-100 duration-150"
          >
            {link}
          </li>
        ))}
        <div className="flex space-x-4 px-4">
          {socials.map(({ id, icon: Icon, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-100 hover:scale-110 duration-150"
            >
              <Icon size={30} />
            </a>
          ))}
        </div>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        l
        className="cursor-pointer pr-4 z-10 text-teal-100 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-blue-300 text-teal-100">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 text-4xl cursor-pointer capitalize py-6 font-medium text-teal-100 hover:scale-110 duration-150"
            >
              {link}
            </li>
          ))}
          <div className="flex space-x-4 py-4">
            {socials.map(({ id, icon: Icon, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-100 hover:scale-110 duration-150"
              >
                <Icon size={30} />
              </a>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
