import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import dishe from '../Assets/dishes.jpg'

const Menu = ({menuShown, togglemMenu}) => {
  return (
    <div className="p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto 2xl:w-[95%] 2xl:m-auto">
      <div className='heading flex justify-between items-center'>
        <h4 className="text-red-700 text-medium md:text-lg xl:text-2xl font-semibold mx-12 mb-5 md:mx-0">EATOFY</h4>
        <div className='border p-2 rounded-full md:hidden bg-red-800 '><IoSearchOutline color='white'/></div>
        <div class="hidden md:block relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
        <IoSearchOutline color='white'/>
				</div>
				<input type="text" id="table-search" class="bg-black  text-sm rounded-lg block w-64 pl-10 p-2  placeholder-gray-400 text-white " placeholder="Search for food, coffe, etc... " />
        </div>
      </div>

      <div className='flex justify-center items-center'>
      <p className="dishes sm:hidden w-32 text-center font-bold mt-5 mx-5 p-2 sm:p-3 bg-gradient-to-r from-red-400 via-red-600 to-red-700 rounded-full" onClick={togglemMenu}>Dishes</p>
      </div>
      <ul className={`menu flex flex-col justify-center text-white gap-8 font-semibold  mt-5 p-5  text-sm text-center items-center  bg-black rounded-md sm:p-0 sm:text-black sm:bg-transparent sm:rounded-none sm:flex-row sm:flex lg:justify-normal ${menuShown ? 'block' : 'hidden '}`}>
        <li>NonVeg</li>
        <li>Veg</li>
        <li>Breakfast</li>
        <li className='sm:hidden md:block'>Hot Dishes</li>
        <li>Rice</li>
        <li className='sm:hidden lg:block'>South Indian</li>
        <li className='sm:hidden lg:block'>Cold Dishes</li>
        <li>Grill</li>
        <li>Soup</li>
        <li>Grill</li>
        <li className='md:hidden xl:block'>Appetizer</li>
        <li>Dessert</li>
      </ul>
      <div className='w-full h-0.5 bg-black mt-3 hidden sm:block'></div>

      {/* dropdown */}
      <div className='dropdown'>
      <div className="flex justify-center sm:justify-end items-center pt-5">
        <select name="cars" id="cars" className="outline-none border border-gray-300 rounded-md px-2 py-1 text-gray-700 bg-gray-50 focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 font-semibold">
          <option value="Dine In" className="p-3">Dine In</option>
          <option value="Take Away" className="p-3">Take Away</option>
        </select>
      </div>
    </div>

      <div>
        <h1 className='text-xl text-center md:text-start font-semibold mt-7'>Choose Dishes</h1>
      </div>

      <div className="dishes mt-10 list-none grid gap-y-5 gap-x-3 grid-cols-2 sm:grid-cols-3 md:gap-y-7 md:gap-x-5 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-10 xl:gap-y-20"> 

      <div className="dish-1 border-2 border-red-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt='dishe'/></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
        </div>

        <div className="dish-2  border-2 border-green-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
          </div>

          <div className="dish-2  border-2 border-green-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
          </div>

          <div className="dish-1 border-2 border-red-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt='dishe'/></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
        </div>

        <div className="dish-1 border-2 border-red-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt='dishe'/></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
        </div>

        <div className="dish-2  border-2 border-green-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
          </div>

          <div className="dish-2  border-2 border-green-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
          </div>

          <div className="dish-2  border-2 border-green-600 pb-8 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <p className='w-24 h-24 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='food-details flex flex-col mt-2'>
            <span>Spicy Seasoned</span>
            <span>seafood noodles</span>
            </div>
          </div>

         

      </div>
      {/* dishes class close */}


     
    </div>
   

  );
}

export default Menu;
