import React, { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { VscPieChart } from "react-icons/vsc";
import { GiChefToque } from 'react-icons/gi';
import { FaConciergeBell } from 'react-icons/fa';
import { FaCashRegister } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar)
  };

  return (
    <div>
      <div ><MdOutlineMenu onClick={toggleNavbar} className="text-[#E54949]  h-7 w-6 m-2 md:hidden"/></div>
      <nav className={`fixed left-0 top-0 h-screen md:flex md:flex-col items-center gap-6 xl:gap-10 px-4 py-5 bg-black rounded-e-md ${showNavbar ? 'block' : 'hidden '}`}>
        <ul className="flex flex-col items-center gap-6 xl:gap-10">
          <li className="close md:hidden"><IoMdClose className="text-[#E54949] hover:text-white h-6 w-6  " onClick={toggleNavbar}/></li>
          <li><a><FaHotel className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white"/></a></li>
          <li><a><IoHomeOutline className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><RiBillLine className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><VscPieChart className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><GiChefToque className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><FaConciergeBell className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><FaCashRegister className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><IoSettingsOutline className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
          <li><a><IoExitOutline className="text-[#E54949] h-6 w-6 lg:h-7 hover:text-white" /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
