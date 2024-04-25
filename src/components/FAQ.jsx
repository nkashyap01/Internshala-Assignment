import React from "react";
import downArrow from "../assets/downArrow.svg";

const FAQ = () => {
  const data = [
    "Can education flashcards be used for all age groups?",
    "How do education flashcards work?",
    "Can education flashcards be used for test preparation?",
  ];

  return (
    <div className="mt-10">
      <h3 className="text-4xl font-bold  text-[#092A9F]">FAQ</h3>
      <div className="flex flex-col gap-5 mt-5">
        {data.map((item) => {
          return (
            <div className="flex items-center justify-between w-[800px] p-3 border-2 sm:w-10/12 md:9/12 lg:w-10/12 rounded-lg border-[#2284F1] font-semibold">
              <p>{item}</p>
              <img src={downArrow} alt="downArrow" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
