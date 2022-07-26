import React from "react";
import logo from "../assets/logo-bookmark.svg";
import { RiMenu3Line, RiCloseLine, RiAwardFill } from "react-icons/ri";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Tomorrow start with Palette Color configurations in DaisyUI...
// Fix some errors, and finish this project. :)

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleMenu = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <header className="w-full h-[10vh] bg-bg-color flex fixed shadow-2xl z-50">
      <div className="container m-auto navbar flex justify-between">
        <div className="navbar-start">
          <a className="cursor-pointer" href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="">
          <nav className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="text-sm">
                <Link
                  onClick={handleClose}
                  to="features"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-very-dark-blue uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Features
                </Link>
              </li>
              <li className="text-sm">
                <Link
                  onClick={handleClose}
                  to="download"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-very-dark-blue uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Download
                </Link>
              </li>
              <li className="text-sm">
                <Link
                  onClick={handleClose}
                  to="contact"
                  smooth={true}
                  offset={400}
                  duration={500}
                  className="text-very-dark-blue uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Contact
                </Link>
              </li>
              <li className="ml-5">
                <a
                  href="#home"
                  className="btn btn-secondary text-bg-color font-medium px-11 tracking-widest shadow-lg hover:bg-transparent active:bg-transparent active:text-soft-red focus:bg-transparent focus:text-soft-red hover:border-2 hover:text-soft-red"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar-end">
            <RiMenu3Line
              className="md:hidden text-very-dark-blue text-2xl cursor-pointer"
              onClick={handleMenu}
            />

            <div
              className={
                !nav
                  ? "hidden"
                  : "md:hidden absolute left-0 top-0 h-screen w-screen bg-very-dark-blue/90"
              }
            >
              <div className="flex flex-col w-[92%] h-[90vh] mx-auto">
                <div className="menu-mobile-header flex items-center justify-between pt-9">
                  <p className="uppercase flex items-center gap-2 text-xl text-bg-color select-none">
                    <RiAwardFill className="text-3xl" />
                    Bookmark
                  </p>
                  <RiCloseLine
                    className="text-3xl cursor-pointer text-bg-color"
                    onClick={handleClose}
                  />
                </div>
                <nav>
                  <ul className="menu menu-compact w-[100%] p-2 rounded-box">
                    <li className="text-base border-b border-t rounded-none py-3 mt-8 flex">
                      <Link
                        onClick={handleClose}
                        to="features"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="uppercase font-normal self-center text-lg tracking-widest"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="border-b py-3 flex">
                      <Link
                        onClick={handleClose}
                        to="download"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="uppercase font-normal self-center text-lg tracking-widest"
                      >
                        Download
                      </Link>
                    </li>
                    <li className="border-b py-3 flex">
                      <Link
                        onClick={handleClose}
                        to="contact"
                        smooth={true}
                        offset={400}
                        duration={500}
                        className="uppercase font-normal self-center text-lg tracking-widest"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="py-3">
                      <a
                        onClick={handleClose}
                        href="#home"
                        className="btn font-normal px-11 bg-accent border-2 border-bg-color text-bg-color text-lg tracking-widest mt-4"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </nav>
                <ul className="w-full flex gap-8 justify-center h-full items-end">
                  <li>
                    <a href="#" className="">
                      <AiFillFacebook className="text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <AiFillTwitterSquare className="text-3xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
