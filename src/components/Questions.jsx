import React from "react";
import SectionIntro from "./SectionIntro";
import Question from "./Question";
import ButtonInfo from "./ButtonInfo";

const Questions = () => {
  return (
    <section className="h-full w-full py-12 pb-24 xl:py-20">
      <div className="relative bottom-9 w-[75%] m-auto">
        <SectionIntro
          title="Frequently Asked Questions"
          text="Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us."
        />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-[90%]">
          <Question
            question="What is Bookmark?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            tabIndex="0"
          />
        </div>
        <div className="w-[90%]">
          <Question
            question="How can I request a new browser?"
            answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            tabIndex="0"
          />
        </div>
        <div className="w-[90%]">
          <Question
            question="Is there a mobile app?"
            answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum."
            tabIndex="0"
          />
        </div>
        <div className="w-[90%]">
          <Question
            question="What about other Chromium browsers?"
            answer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
            tabIndex="0"
          />
        </div>
        <div className="pt-10 lg:pt-16">
          <ButtonInfo />
        </div>
      </div>
    </section>
  );
};

export default Questions;
