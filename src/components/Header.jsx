import React from "react";
import brandLogo from "../assets/brandLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <img src={brandLogo} alt="brand logo" />
      <ul className="flex items-center font-semibold leading-5 text-xl justify-center gap-7 sm:hidden md:hidden">
        <li>Home</li>
        <li>Flashcard</li>
        <li>Contact</li>
        <li>FAQ</li>
        <li className="bg-gradient-to-b text-white  px-10 py-3 from-[#06286E] rounded-[32px]  to-[#164EC0] text-center">
          Login
        </li>
      </ul>
      <GiHamburgerMenu className="text-2xl text-[#092A9F] hidden sm:block md:block " />
    </div>
  );
};

export default Header;
