import React from "react";

const Question = ({ question, answer, tabIndex }) => {
  return (
    <div
      tabIndex={tabIndex}
      className="collapse collapse-arrow border bg-base-100 rounded-box lg:max-w-2xl lg:m-auto"
    >
      <div className="collapse-title text-xl font-normal hover:text-soft-red">
        {question}
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
