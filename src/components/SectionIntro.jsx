import React from "react";

const SectionIntro = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center w-[95%] mx-auto lg:container my-8">
      <h2 className="text-2xl text-center font-medium lg:text-start lg:text-4xl">
        {title}
      </h2>
      <p className="text-center w-[90%] max-w-lg text-base lg:text-xl">
        {text}
      </p>
    </div>
  );
};

export default SectionIntro;
