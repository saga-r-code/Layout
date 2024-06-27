import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import dishe from '../Assets/dishes.jpg'


const KitchenChef = () => {
  return (
    <div className="p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto 2xl:w-[95%] 2xl:m-auto">
    <div className='heading flex justify-between items-center'>
      <h4 className="text-red-700 text-medium md:text-lg xl:text-2xl font-semibold mx-12 mb-5 md:mx-0">EATOFY</h4>
      <div className='border p-2 rounded-full md:hidden bg-red-800 '><IoSearchOutline color='white'/></div>
      <div class="hidden md:block relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
      <IoSearchOutline color='white'/>
              </div>
              <input type="text" id="table-search" class="bg-black  text-sm block w-64 pl-10 p-2  placeholder-gray-400 text-white " placeholder="Search for food, coffe, etc... " />
      </div>
    </div>

    <div className='order-lis overflow-auto overflow-x-scrollt p-3'>
        <h3 className='fixed lg:static left-[35%] md:left-28 font-medium'>Order List</h3>
        <ul className="list text-green-700 flex gap-5 mt-10 lg:mt-5">
            <li className=''><IoMdCheckmark className='inline-block' />#345</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#346</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#347</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#348</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#349</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#340</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#341</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#342</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#343</li>
            <li className=''><IoMdCheckmark className='inline-block '/>#345</li>
        </ul>
    </div>

    <div className="orders-details">
        <div className="order-1 border border-red-800">
            <div className='order flex flex-col justify-start items-center gap-1'>
            <p>Order #351</p>
            <p className='text-slate-500 text-sm'>05 Feb 2023, 08:28 PM</p>
            </div>

            <div className='dishes flex flex-col gap-3 w-[30%]'>
            <li className=' rounded-full overflow-hidden '><img src={dishe} alt='dishe' className='w-10 h-10 rounded-full'/>
            <div className='dish-name flex flex-col'>
                <p>Vegetable Mixups</p>
                <p className='text-xs'>Vegetable Fritters With Egg</p>
            </div>
            <div className='dish-price flex justify-between items-center'>
                <p>Rs155</p>
                <p>Qty: 1</p>
            </div>
            </li>
            <hr />
            <li className='rounded-full overflow-hidden '><img src={dishe} alt='dishe' className='w-10 h-10 rounded-full '/>
            <div className='dish-name flex flex-col'>
                <p>Vegetable Mixups</p>
                <p className='text-xs'>Vegetable Fritters With Egg</p>
            </div>
            <div className='dish-price flex justify-between items-center'>
                <p>Rs155</p>
                <p>Qty: 1</p>
            </div>
            </li>
            <hr />
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default KitchenChef
