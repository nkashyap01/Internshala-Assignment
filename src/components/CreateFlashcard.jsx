import React from "react";
import logo from "../assets/logo.svg";
import brandName from "../assets/brandName.svg";
import plus from "../assets/plus.svg";

const CreateFlashcard = () => {
  return (
    <div className="mt-10 sm:flex-col sm:items-center sm:justify-center  flex justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-3 ">
          <p>Published By</p>
          <img src={brandName} alt="brandName" />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center leading-3 ">
        <img src={plus} alt="plus" />
        <p className="text-[#092A9F] font-bold text-2xl">Create Flashcard</p>
      </div>
    </div>
  );
};

export default CreateFlashcard;
