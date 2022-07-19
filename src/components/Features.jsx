import React from "react";
import FeaturesIllustration from "./FeaturesIllustration";
import SectionIntro from "./SectionIntro";

const Features = () => {
  return (
    <section className="h-full w-full py-10 xl:py-20" name="features">
      <SectionIntro
        title="Features"
        text="Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go."
      />
      <nav className="">
        <ul className="flex flex-col items-center justify-center w-[85%] mx-auto my-8 xl:flex-row max-w-[820px]">
          <li className="cursor-pointer border-b border-t w-full flex flex-col justify-center items-center pt-6 xl:border-t-0 xl:h-[5rem] xl:mb-12">
            <p className="text-base lg:text-lg xl:text-xl pb-6">
              Simple Bookmarking
            </p>
            <div className="w-[35%] h-[4px] bg-soft-red relative top-[1px] xl:w-full"></div>
          </li>
          <li className="cursor-pointer border-b w-full flex flex-col justify-center items-center pt-6 xl:h-[5rem] xl:mb-12">
            <p className=" text-base lg:text-lg xl:text-xl pb-6">
              Speedy Searching
            </p>
            <div className="w-[35%] h-[4px] bg-soft-red relative top-[1px] xl:w-full hidden"></div>
          </li>
          <li className="cursor-pointer border-b w-full flex flex-col justify-center items-center pt-6 xl:h-[5rem] xl:mb-12">
            <p className=" text-base lg:text-lg xl:text-xl pb-6">
              Easy Sharing
            </p>
            <div className="w-[35%] h-[4px] bg-soft-red relative top-[1px] xl:w-full hidden"></div>
          </li>
        </ul>
      </nav>

      <FeaturesIllustration
        title="Bookmark in one click"
        text="Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites."
      />
      <FeaturesIllustration
        title="Intelligent search"
        text="Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks."
      />
      <FeaturesIllustration
        title="Share your bookmarks"
        text="Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button."
      />
    </section>
  );
};

export default Features;
