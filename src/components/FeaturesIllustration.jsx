import React from "react";
import Feature1Img from "../assets/illustration-features-tab-1.svg";
import ButtonInfo from "./ButtonInfo";

const FeaturesIllustration = ({ title, text }) => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col sm:flex-row lg:container pb-10 lg:m-auto xl:gap-10">
        <div className="relative lg:w-[50%]">
          <div className="lg:w-full lg:flex lg:justify-center lg:items-center">
            <img
              src={Feature1Img}
              className="w-[24rem] rounded-lg lg:w-[35rem] xl:w-[95%]"
            />
            <div className="absolute h-[12rem] w-[30rem] lg:h-[22rem] xl:w-[52rem] lg:left-[-20rem] bg-soft-blue left-[-13rem] bottom-[-2rem] lg:bottom-[-3rem] rounded-t-[5rem] rounded-b-[5rem] -z-10"></div>
          </div>
        </div>

        <div className="lg:w-[50%] lg:flex lg:justify-end lg:items-center py-10">
          <div className="text-center lg:text-start lg:w-[80%] lg:flex lg:flex-col lg:items-start lg:gap-5">
            <h2 className="text-2xl font-medium mt-8 lg:text-4xl">{title}</h2>
            <p className="py-3 w-[90%] m-auto lg:m-0 text-base">{text}</p>
            <ButtonInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesIllustration;
