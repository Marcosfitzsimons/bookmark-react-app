import React from "react";

const Question = ({ question, answer, tabIndex }) => {
  return (
    <div
      tabIndex={tabIndex}
      className="collapse collapse-arrow border bg-base-100 rounded-box lg:max-w-2xl lg:m-auto"
    >
      <div className="collapse-title text-base lg:text-xl font-normal hover:text-soft-red">
        {question}
      </div>
      <div className="collapse-content text-base lg:text-xl">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
