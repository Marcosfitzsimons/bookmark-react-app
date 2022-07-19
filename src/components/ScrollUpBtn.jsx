import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const ScrollUpBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 540 ? setBackToTopBtn(true) : setBackToTopBtn(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      {backToTopBtn && (
        <div className="hover:bg-transparent hover:border-2 transition-colors hover:border-soft-red cursor-pointer fixed right-10 bottom-10 w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] bg-soft-blue flex justify-center items-center rounded-md z-10 md:right-[5rem]">
          <RiArrowDropUpLine
            className="text-4xl text-info-200 hover:text-soft-red lg:text-6xl"
            onClick={scrollUp}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollUpBtn;
