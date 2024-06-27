import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Menu = ({menuShown, togglemMenu}) => {
  return (
    <div className="p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto">
      <div className='heading flex justify-between items-center'>
        <h4 className="text-red-700 text-sm xl:text-lg font-semibold mx-12 mb-5 md:mx-0">EATOFY</h4>
        <div className='border p-2 rounded-full md:hidden bg-red-800 '><IoSearchOutline color='white'/></div>
        <div class="hidden md:block relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
        <IoSearchOutline color='white'/>
				</div>
				<input type="text" id="table-search" class="bg-black  text-sm rounded-lg block w-64 pl-10 p-2  placeholder-gray-400 text-white " placeholder="Search for food, coffe, etc... " />
        </div>
      </div>

      <div className="dishes sm:hidden text-center font-bold mt-5 mx-5 p-2 sm:p-3 bg-gradient-to-r from-red-400 via-red-600 to-red-700 rounded-full" onClick={togglemMenu}>Dishes</div>
      <ul className={`menu flex flex-col justify-center sm:flex-row sm:flex gap-8 font-semibold items-center mt-10 text-sm text-center  xl:justify-normal ${menuShown ? 'block' : 'hidden '}`}>
        <li>NonVeg</li>
        <li>Veg</li>
        <li>Breakfast</li>
        <li>Hot Dishes</li>
        <li>Rice</li>
        <li>South Indian</li>
        <li>Cold Dishes</li>
        <li>Grill</li>
        <li>Soup</li>
        <li>Grill</li>
        <li>Appetizer</li>
        <li>Dessert</li>
      </ul>
      <div className='w-full h-0.5 bg-black mt-3 hidden md:block'></div>

      <div className="dishes mt-10 list-none grid grid-cols-2 gap-3">

      <div className="dish-1 border-2 border-red-600 pb-10 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-14 h-14 bg-gray-500 rounded-full'></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
        </div>

        <div className="dish-2  border-2 border-green-600 pb-10 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-14 h-14 bg-gray-500 rounded-full'></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
          </div>
      </div>


     
    </div>

  );
}

export default Menu;
