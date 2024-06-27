import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


const EatofySetting = () => {
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

      <div className="conatiner my-10 ">
        <ul className='flex justify-center flex-col gap-3 md:gap-5 border-2 p-5 shadow-lg rounded-md'>
            <div className='setting-list group '>
                <l className='setting-name'>KOT Setup</l>
                <li className='setting-ico group-hover:block hidden'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>Meal Scheduling</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>General</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>Resturant Specific</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>Payment Modes</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>Pickup Setup</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>Service Charges & Tax</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>UPI Setting</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
            <div className='setting-list'>
                <li className='setting-name'>Eatofy Dashboard</li>
                <li className='setting-ico'><IoSettingsOutline size={20} /></li>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default EatofySetting
