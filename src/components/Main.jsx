import React from "react";
import bulb from "../assets/bulb.svg";
import mic from "../assets/mic.svg";
import roundedArrow from "../assets/roundedArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import rectangle from "../assets/rectangle.svg";

const Main = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-[#0C33A7] sm:ml-2 sm:text-2xl">
        Relations and Functions ( Mathematics )
      </h3>
      <ul className="flex items-center font-semibold justify-center gap-10">
        <li className="text-[#0C33A7] font-bold border-b-2 py-1 border-[#0C33A7] my-2 ">
          Study
        </li>
        <li>Quiz</li>
        <li>Test</li>
        <li>Game</li>
        <li>Others</li>
      </ul>
      <div className="flex  items-center flex-col  mt-5 ">
        <div className="h-[333px] relative w-[700px] bg-gradient-to-r from-[#1F80EB] to-[#2284F1] to-[#061C93] to-[#051A91]    rounded-[42px] sm:w-[90%] md:w-[100%]">
          <div className="absolute w-full h-full flex items-center justify-center">
            <p className="leading-5 font-bold text-white text-3xl">
              9 + 6 + 7x - 2x - 3
            </p>
          </div>

          <div className="absolute flex justify-between px-8 pt-8 w-full">
            <img src={bulb} alt="bulb" />
            <img src={mic} alt="bulb" />
          </div>
        </div>

        <div className="flex w-[700px] mt-5 justify-between items-center sm: sm:w-[90%] md:w-[100%]">
          <img src={roundedArrow} alt="roundedArrow" />
          <div className="flex gap-9 items-center justify-center">
            <img src={leftArrow} alt="leftArrow" />
            <p className="text-[#092A9F] font-bold text-xl">01/10</p>
            <img src={rightArrow} alt="rightArrow" />
          </div>
          <img src={rectangle} alt="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Main;
