import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { RiAwardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full h-full py-8 lg:h-[8rem] flex justify-center items-center">
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
                <a
                  href="#"
                  className="text-info uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Features
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  className="text-info uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Pricing
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  className="text-info uppercase font-medium tracking-widest hover:bg-transparent focus:bg-transparent hover:text-soft-red"
                >
                  Contact
                </a>
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
