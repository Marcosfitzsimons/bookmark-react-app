import React from "react";

import HeroImg from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section name="home" id="home">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col sm:flex-row lg:container lg:m-auto p-0">
          <div className="hero-illustration-container relative sm:order-2 lg:w-[50%]">
            <div className="hero-img-container lg:w-full lg:flex lg:justify-center lg:items-center">
              <img
                src={HeroImg}
                className="w-[24rem] rounded-lg lg:w-[35rem] xl:w-[100%] xl:relative xl:left-[7rem]"
                alt="screen"
              />
              <div className="xl:w-[60rem] xl:right-[-30rem] xl:h-[25rem] bg-hero absolute h-[12rem] w-[30rem] lg:h-[18rem] lg:w-[38rem] lg:right-[-20rem] bg-soft-blue/60 right-[-13rem] bottom-0 xl:bottom-[-2rem] rounded-t-[15rem] rounded-b-[15rem] -z-10"></div>
            </div>
          </div>
          <div className="sm:order-1 lg:w-[50%] text-center lg:text-start">
            <h1 className="text-3xl lg:text-6xl font-bold w-[85%]">
              A Simple Bookmark Manager
            </h1>
            <p className="py-14 max-w-md m-auto lg:m-0 w-[90%] xl:w-full lg:text-xlxl:text-base">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="xl:text-base  btn btn-primary text-start normal-case text-bg-color bg-soft-blue/60 font-medium shadow-xl hover:bg-transparent hover:border-2 hover:text-soft-blue">
                Get it on Chrome
              </button>
              <button className="xl:text-base  btn btn-active bg-bg-color hover:bg-soft-blue/5 normal-case font-medium shadow-xl hover:text-bg-color hover:border-2 hover:border-info ">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
