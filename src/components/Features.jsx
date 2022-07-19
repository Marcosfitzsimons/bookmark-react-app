import React from "react";

import FeaturesIllustration from "./FeaturesIllustration";
import SectionIntro from "./SectionIntro";

const Features = () => {
  return (
    <section className="h-full w-full py-10 xl:py-20" name="features">
      <SectionIntro
        title="Features"
        text="We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize."
      />
      <nav className="">
        <ul className="flex flex-col items-center justify-center w-[85%] mx-auto my-8 xl:flex-row">
          <li className="cursor-pointer border-b border-t w-full flex flex-col justify-center items-center pt-6 xl:border-t-0 xl:h-[5rem]">
            <p className=" text-base lg:text-lg pb-6">Simple Bookmarking</p>
            <div className="w-[35%] h-1 bg-soft-red relative top-[1px] xl:w-full"></div>
          </li>
          <li className="cursor-pointer border-b w-full flex flex-col justify-center items-center pt-6 xl:h-[5rem]">
            <p className=" text-base lg:text-lg pb-6">Speedy Searching</p>
            <div className="w-[35%] h-1 bg-soft-red relative top-[1px] xl:w-full hidden"></div>
          </li>
          <li className="cursor-pointer border-b w-full flex flex-col justify-center items-center pt-6 xl:h-[5rem]">
            <p className=" text-base lg:text-lg pb-6">Easy Sharing</p>
            <div className="w-[35%] h-1 bg-soft-red relative top-[1px] xl:w-full hidden"></div>
          </li>
        </ul>
      </nav>

      <FeaturesIllustration />
    </section>
  );
};

export default Features;
