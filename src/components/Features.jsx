import React from "react";
import FeaturesIllustration from "./FeaturesIllustration";
import SectionIntro from "./SectionIntro";

const Features = () => {
  const showIllustration1 = () => {
    let illustration1 = document.querySelector(".illustration-one");
    let illustration2 = document.querySelector(".illustration-two");
    let illustration3 = document.querySelector(".illustration-three");
    illustration1.classList.remove("hidden");
    illustration2.classList.add("hidden");
    illustration3.classList.add("hidden");
    let border1 = document.querySelector(".border-one");
    let border2 = document.querySelector(".border-two");
    let border3 = document.querySelector(".border-three");
    border1.classList.remove("hidden");
    border2.classList.add("hidden");
    border3.classList.add("hidden");
  };

  const showIllustration2 = () => {
    let illustration1 = document.querySelector(".illustration-one");
    let illustration2 = document.querySelector(".illustration-two");
    let illustration3 = document.querySelector(".illustration-three");
    illustration1.classList.add("hidden");
    illustration2.classList.remove("hidden");
    illustration3.classList.add("hidden");
    let border1 = document.querySelector(".border-one");
    let border2 = document.querySelector(".border-two");
    let border3 = document.querySelector(".border-three");
    border1.classList.add("hidden");
    border2.classList.remove("hidden");
    border3.classList.add("hidden");
  };

  const showIllustration3 = () => {
    let illustration1 = document.querySelector(".illustration-one");
    let illustration2 = document.querySelector(".illustration-two");
    let illustration3 = document.querySelector(".illustration-three");
    illustration1.classList.add("hidden");
    illustration2.classList.add("hidden");
    illustration3.classList.remove("hidden");
    let border1 = document.querySelector(".border-one");
    let border2 = document.querySelector(".border-two");
    let border3 = document.querySelector(".border-three");
    border1.classList.add("hidden");
    border2.classList.add("hidden");
    border3.classList.remove("hidden");
  };

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
          <li
            className="cursor-pointer border-b border-t w-full flex flex-col justify-center items-center pt-6 xl:border-t-0 xl:h-[5rem] xl:mb-12"
            onClick={showIllustration1}
          >
            <p className="text-base lg:text-lg xl:text-xl pb-6">
              Simple Bookmarking
            </p>
            <div className="border-one w-[35%] h-[4px] bg-soft-red relative top-[1px] xl:w-full"></div>
          </li>
          <li
            className="cursor-pointer border-b w-full flex flex-col justify-center items-center pt-6 xl:h-[5rem] xl:mb-12"
            onClick={showIllustration2}
          >
            <p className="text-base lg:text-lg xl:text-xl pb-6">
              Speedy Searching
            </p>
            <div className="border-two w-[35%] h-[4px] bg-soft-red relative top-[1px] xl:w-full hidden"></div>
          </li>

          <li
            className="cursor-pointer border-b w-full flex flex-col justify-center items-center pt-6 xl:h-[5rem] xl:mb-12"
            onClick={showIllustration3}
          >
            <p className="text-base lg:text-lg xl:text-xl pb-6">Easy Sharing</p>
            <div className="border-three w-[35%] h-[4px] bg-soft-red relative top-[1px] xl:w-full hidden"></div>
          </li>
        </ul>
      </nav>

      <div className="illustration-one">
        <FeaturesIllustration
          title="Bookmark in one click"
          text="Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites."
        />
      </div>
      <div className="illustration-two hidden">
        <FeaturesIllustration
          title="Intelligent search"
          text="Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks."
        />
      </div>
      <div className="illustration-three hidden">
        <FeaturesIllustration
          title="Share your bookmarks"
          text="Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button."
        />
      </div>
    </section>
  );
};

export default Features;
