import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const KOTList = () => {
  return (
    <div className='p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto 2xl:w-[95%] 2xl:m-auto'>
    <div className='heading flex justify-between items-center'>
      <h4 className="text-red-700 text-medium md:text-lg xl:text-2xl font-semibold mx-12 mb-5 md:mx-0">EATOFY</h4>
      <div className='border p-2 rounded-full md:hidden bg-red-800 '><IoSearchOutline color='white'/></div>
      <div class="hidden md:block relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-5 ">
      <IoSearchOutline color='white'/>
      </div>
      <input type="text" id="table-search" class="bg-black  text-sm rounded-lg block w-64 pl-10 p-2  placeholder-gray-400 text-white " placeholder="Search for food, coffe, etc... " />
      </div>
    </div>

    <div className='flex justify-center md:justify-normal items-center gap-2 mt-4 lg:mt-7'>
      <h1 className="text-xl xl:text-2xl font-semibold text-[#E54949]">KOT List</h1>
      </div>

  

    </div>
  )
}

export default KOTList
