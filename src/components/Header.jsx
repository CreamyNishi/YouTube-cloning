import React from "react";
import Burger from "../assets/burger.svg";
import Logo from "../assets/logo.svg";
import Magni from "../assets/magni.svg";
import Mic from "../assets/mic.svg";
import Plus from "../assets/plus.svg";
import Bell from "../assets/bell.svg";
import Pfp from "../assets/pfp.jpg";

function Header() {
  return (
    <header className="h-14 flex items-center justify-between px-4 border-b">
      {/* Kaliwa */}
      <div className="flex items-center gap-4">
        <img
          className="w-6 h-6 cursor-pointer rounded-full hover:bg-gray-300"
          src={Burger}
          alt="menu"
        />
        <img className="h-5 cursor-pointer" src={Logo} alt="logo" />
      </div>

      {/* Gitna */}
      <div className="flex items-center flex-1 max-w-180 mx-6 gap-3">
        <div className="flex flex-1">
          <input
            className="h-9 flex-1 border border-gray-300 rounded-l-full px-4 outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="h-9 w-16 border border-gray-300 border-l-0 rounded-r-full flex items-center justify-center bg-gray-100">
            <img className="w-5 h-5 cursor-pointer" src={Magni} alt="search" />
          </button>
        </div>

        {/* MIC — moved here */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-300">
          <img className="w-5 h-5 cursor-pointer" src={Mic} alt="mic" />
        </button>
      </div>

      {/* Kanan */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 h-9 px-4 rounded-full border border-gray-300 hover:bg-gray-300">
          <img className="w-4 h-4" src={Plus} alt="plus" />
          Create
        </button>

        <img
          className="w-5 h-5 cursor-pointer rounded-full hover:bg-gray-300"
          src={Bell}
          alt="bell"
        />

        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src={Pfp}
          alt="profile"
        />
      </div>
    </header>
  );
}

export default Header;
