import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import dishe from '../Assets/dishes.jpg'
import { ImCheckboxChecked } from "react-icons/im";


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

    <div className='order-list overflow-auto overflow-x-scrollt p-3'>
        <h3 className='font-medium'>Order List</h3>
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

    {/* <div className="orders-details mt-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3  sm:gap-x-4 2xl:w-[90%] 2xl:m-auto"> */}
    <div className="orders-details flex justify-center flex-wrap gap-6 md:justify-start items-center mt-5   2xl:w-[90%] 2xl:m-auto">
        <div className="order-1 border border-red-800 p-5 ">
            <div className='order flex flex-col justify-center items-start gap-1 leading-tight'>
            <p>Order #351</p>
            <p className='text-slate-500 text-xs '>05 Feb 2023, 08:28 PM</p>
            </div>
            
           <div className=' dishes flex justify-center items-start flex-col'>

           <div className="dish-1 mt-8 flex gap-5 justify-center items-center">
            <p className='w-16 h-16 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='text-xs'>
              <p className='font-semibold'>Vegetable Mixups</p>
              <p className='text-slate-500'>Vegetable Fritters with Egg</p>
              <div className='flex justify-between my-2 font-medium '>
                <p>Rs155</p>
                <p className='font-semibold'>Qty: 1</p>
              </div>
              <div className='w-full m-auto bg-slate-300 h-[1px] mt-4'></div>
            </div>
            </div>

            <div className="dish-2 my-5 flex gap-5 justify-center items-center">
            <p className='w-16 h-16 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='text-xs '>
              <p className='font-semibold'>Vegetable Mixups</p>
              <p className='text-slate-500'>Vegetable Fritters with Egg</p>
              <div className='flex justify-between my-2 font-medium '>
                <p>Rs155</p>
                <p className='font-semibold'>Qty: 1</p>
              </div>
            </div>
            </div>
           </div> 
           {/* dishes class */}
           <hr />

           <div className='flex justify-between items-center items-s p-3'>
            <p className='text-sm text-slate-500'>X2 Item</p>
                <div className='bg-green-400 border-2 border-green-400 rounded-md inline-flex items-center p-1'>
                <ImCheckboxChecked size={20} color='white' />
            <span className='text-white ml-2 text-sm font-semibold'>Completed</span>
                 </div>
           </div>
           
            
        </div>
        {/* order-1 class */}
        

        <div className="order-2 border border-red-800 p-5">
            <div className='order flex flex-col justify-center items-start gap-1 leading-tight'>
            <p>Order #351</p>
            <p className='text-slate-500 text-xs '>05 Feb 2023, 08:28 PM</p>
            </div>
            
           <div className=' dishes flex justify-center items-start flex-col'>

           <div className="dish-1 mt-8 flex gap-5 justify-center items-center">
            <p className='w-16 h-16 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='text-xs'>
              <p className='font-semibold'>Vegetable Mixups</p>
              <p className='text-slate-500'>Vegetable Fritters with Egg</p>
              <div className='flex justify-between my-2 font-medium '>
                <p>Rs155</p>
                <p className='font-semibold'>Qty: 1</p>
              </div>
              <div className='w-full m-auto bg-slate-300 h-[1px] mt-4'></div>
            </div>
            </div>

            <div className="dish-2 my-5 flex gap-5 justify-center items-center">
            <p className='w-16 h-16 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='text-xs '>
              <p className='font-semibold'>Vegetable Mixups</p>
              <p className='text-slate-500'>Vegetable Fritters with Egg</p>
              <div className='flex justify-between my-2 font-medium '>
                <p>Rs155</p>
                <p className='font-semibold'>Qty: 1</p>
              </div>
            </div>
            </div>
           </div> 
           {/* dishes class */}
           <hr />

           <div className='flex justify-between items-center p-3'>
            <p className='text-sm text-slate-500'>X2 Item</p>
            <p className='bg-green-400 border-2 border-green-400 rounded-md'><ImCheckboxChecked  size={25}  color='white' /></p>
           </div>
           
            
        </div>
        {/* order-2 class */}

        <div className="order-3 border border-red-800 p-5 ">
            <div className='order flex flex-col justify-center items-start gap-1 leading-tight'>
            <p>Order #351</p>
            <p className='text-slate-500 text-xs '>05 Feb 2023, 08:28 PM</p>
            </div>
            
           <div className=' dishes flex justify-center items-start flex-col'>

           <div className="dish-1 mt-8 flex gap-5 justify-center items-center">
            <p className='w-16 h-16 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='text-xs'>
              <p className='font-semibold'>Vegetable Mixups</p>
              <p className='text-slate-500'>Vegetable Fritters with Egg</p>
              <div className='flex justify-between my-2 font-medium '>
                <p>Rs155</p>
                <p className='font-semibold'>Qty: 1</p>
              </div>
              <div className='w-full m-auto bg-slate-300 h-[1px] mt-4'></div>
            </div>
            </div>

            <div className="dish-2 my-5 flex gap-5 justify-center items-center">
            <p className='w-16 h-16 rounded-full overflow-hidden '><img src={dishe} alt="dishe"  /></p>
            <div className='text-xs '>
              <p className='font-semibold'>Vegetable Mixups</p>
              <p className='text-slate-500'>Vegetable Fritters with Egg</p>
              <div className='flex justify-between my-2 font-medium '>
                <p>Rs155</p>
                <p className='font-semibold'>Qty: 1</p>
              </div>
            </div>
            </div>
           </div> 
           {/* dishes class */}
           <hr />

           <div className='flex justify-between items-center p-3'>
            <p className='text-sm text-slate-500'>X2 Item</p>
            <p className='bg-green-400 border-2 border-green-400 rounded-md'><ImCheckboxChecked  size={25}  color='white' /></p>
           </div>
           
           
            
        </div>
        {/* order-3 class */}

    </div>
      
    </div>
  )
}

export default KitchenChef
