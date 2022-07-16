import React from "react";
import logo from "../assets/logo-bookmark.svg";
import { RiMenu3Line, RiCloseLine, RiAwardFill } from "react-icons/ri";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

// Tomorrow start with Palette Color configurations in DaisyUI...
// Fix some errors, and finish this project. :)

const NavBar = () => {
  return (
    <header className="w-full bg-bg-color h-20 flex fixed shadow-2xl z-50">
      <div className="container m-auto navbar flex justify-between">
        <div className="navbar-start">
          <a className="cursor-pointer">
            <img src={logo} alt="#" />
          </a>
        </div>

        <div className="">
          <nav className="navbar-center hidden lg:flex xl:pr-20">
            <ul className="menu menu-horizontal p-0">
              <li className="text-sm">
                <a
                  href="#"
                  className="text-very-dark-blue uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Features
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  className="text-very-dark-blue uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Pricing
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  className="text-very-dark-blue uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Contact
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="#"
                  className="btn btn-secondary text-bg-color font-medium px-11 tracking-widest shadow-lg hover:bg-transparent active:bg-transparent active:text-soft-red focus:bg-transparent focus:text-soft-red hover:border-2 hover:text-soft-red"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar-end">
            <RiMenu3Line className="lg:hidden text-very-dark-blue text-2xl cursor-pointer" />

            <div className="lg:hidden absolute left-0 top-0 h-full w-full bg-very-dark-blue/90 hidden">
              <div className="flex flex-col w-[92%] h-[90vh] mx-auto">
                <div className="menu-mobile-header flex items-center justify-between pt-9">
                  <p className="uppercase flex items-center gap-2 text-xl text-bg-color select-none">
                    <RiAwardFill className="text-3xl" />
                    Bookmark
                  </p>
                  <RiCloseLine className="text-3xl cursor-pointer text-bg-color" />
                </div>
                <nav>
                  <ul className="menu menu-compact w-[100%] p-2 rounded-box">
                    <li className="text-base border-b border-t rounded-none py-3 mt-8 flex">
                      <a
                        href="#"
                        className="uppercase font-normal self-center text-lg tracking-widest"
                      >
                        Features
                      </a>
                    </li>
                    <li className="border-b py-3 flex">
                      <a
                        href="#"
                        className="uppercase font-normal self-center text-lg tracking-widest"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="border-b py-3 flex">
                      <a
                        href="#"
                        className="uppercase font-normal self-center text-lg tracking-widest"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#"
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
