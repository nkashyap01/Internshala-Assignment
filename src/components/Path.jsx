import React from "react";
import home from "../assets/home.svg";
import arrow from "../assets/arrow.svg";

const Path = () => {
  return (
    <div className="text-[#696671] font-bold flex items-center mt-5 gap-1">
      <img src={home} alt="home" className="w-6 h-6" />
      <img src={arrow} alt="arrow" className="w-5 h-5 text-" />
      <p>Flashcard</p>
      <img src={arrow} alt="arrow" className="w-5 h-5" />
      <p>Mathematics</p>
      <img src={arrow} alt="arrow" className="w-5 h-5" />
      <p className="text-[#0C33A7]">Relation and Function</p>
    </div>
  );
};

export default Path;
