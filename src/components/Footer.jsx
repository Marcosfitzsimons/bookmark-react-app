import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { RiAwardFill } from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full h-full py-14 lg:h-[8rem] flex justify-center items-center">
      <div className="container mx-auto flex flex-col gap-4 items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
          <div className="navbar-start">
            <p className="uppercase flex items-center gap-2 text-xl text-bg-color select-none">
              <RiAwardFill className="text-3xl" />
              Bookmark
            </p>
          </div>

          <nav className="xl:pr-20">
            <ul className="menu menu-horizontal p-0">
              <li className="text-sm">
                <Link
                  to="features"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-info uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Features
                </Link>
              </li>
              <li className="text-sm">
                <Link
                  to="download"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-info uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Download
                </Link>
              </li>
              <li className="text-sm">
                <Link
                  to="contact"
                  smooth={true}
                  offset={400}
                  duration={500}
                  className="text-info uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="#" className="">
              <AiFillFacebook className="text-3xl text-bg-color hover:text-soft-red" />
            </a>
          </li>
          <li>
            <a href="#" className="">
              <AiFillTwitterSquare className="text-3xl text-bg-color hover:text-soft-red" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
