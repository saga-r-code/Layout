import React from "react";
import { FaHotel } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { VscPieChart } from "react-icons/vsc";
import { GiChefToque } from 'react-icons/gi';
import { FaConciergeBell } from 'react-icons/fa';
import { FaCashRegister } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-col items-center gap-6 xl:gap-10 px-4 py-5 bg-black max-w-16 h-screen rounded-e-md">
          <li><a href="/"><FaHotel  className="text-[#E54949] h-6 w-6  lg:h-7 hover:text-white"/></a></li>
          <li><a href="/"><IoHomeOutline  className="text-[#E54949] h-6 w-6  lg:h-7 hover:text-white" /></a></li>
          <li><a href="/"><RiBillLine  className="text-[#E54949] h-6 w-6  lg:h-7 hover:text-white" /></a></li>
          <li><a href="/"><VscPieChart  className="text-[#E54949] h-6 w-6  lg:h-7 hover:text-white" /></a></li>
          <li><a href="/"><GiChefToque  className="text-[#E54949] h-6 w-6  lg:h-7 hover:text-white" /></a></li>
          <li><a href="/"><FaConciergeBell  className="text-[#E54949] h-6 w-6  lg:h-7  hover:text-white" /></a></li>
          <li><a href="/"><FaCashRegister  className="text-[#E54949] h-6 w-6  lg:h-7  hover:text-white" /></a></li>
          <li><a href="/"><IoSettingsOutline  className="text-[#E54949] h-6 w-6  lg:h-7  hover:text-white" /></a></li>
          <li><a href="/"><IoExitOutline  className="text-[#E54949] h-6 w-6  lg:h-7  hover:text-white" /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
