import React from 'react'
import Hotel from '../Assets/Hotel.png'
import { IoSettingsOutline } from "react-icons/io5";


const InventoryManagement = () => {
  return (
    <div className="p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto 2xl:w-[95%] 2xl:m-auto">
      <div className='heading'>
      <h4 className="text-red-700 text-sm xl:text-lg font-semibold mx-12 mb-5 md:mx-0 ">EATOFY</h4>
      <div className='flex justify-center items-center gap-2 mt-2 lg:mt-2 underline underline-offset-8'>
      <h1 className="text-lg lg:text-xl xl:text-2xl font-semibold ">Inventory <span className='text-red-500'>Management</span></h1>
      </div>
      </div>

      <div className="invetory-container xl:w-[80%] xl:m-auto list-none grid grid-cols-1 gap-y-4 my-10 sm:grid-cols-2 xl:my-16 sm:gap-x-5 lg:gap-x-12 xl:grid-cols-3">
        <div className="inventory-1 text-start mt-5 font-medium  border-2 border-green-700 rounded-md p-3  md:transition md:duration-500 md:hover:scale-110">
          <div className=" p-3  flex gap-3 justify-start items-center text-xs ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm font-semibold">Item Management</ h4></li>
          </div>

          <div className=' p-3 text-xs text-slate-600 text-semibold'>
            <p>Initiate Request For Purchase(PO) and
            Keep Track Of The Purchase Request</p>
          </div>
          </div>

          <div className="inventory-2 text-start mt-5 font-medium  border-2 border-green-700 rounded-md p-3  md:transition md:duration-500 md:hover:scale-110">
          <div className=" p-3  flex gap-3 justify-start items-center text-xs">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm font-semibold">Available Stock</ h4></li>
          </div>

          <div className=' p-3 text-xs text-slate-600 text-semibold'>
            <p>Available Stock Update closing Stock of
            Raw Materail With Case</p>
          </div>
          </div>

          <div className="inventory-3 text-start mt-5 font-medium  border-2 border-green-700 rounded-md p-3  md:transition md:duration-500 md:hover:scale-110">
          <div className=" p-3  flex gap-3 justify-start items-center text-xs ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm font-semibold">Purchase Management</ h4></li>
          </div>

          <div className=' p-3 text-xs text-slate-600 text-semibold'>
            <p>Keep Track Of Raw Matrial Purchase
            And Inward Entry</p>
          </div>
          </div>

          <div className="inventory-4 text-start mt-5 font-medium  border-2 border-green-700 rounded-md p-3  md:transition md:duration-500 md:hover:scale-110 ">
          <div className=" p-3  flex gap-3 justify-start items-center text-xs">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm font-semibold">Wastage</ h4></li>
          </div>

          <div className=' p-3 text-xs text-slate-600 text-semibold'>
            <p>Enter Wastage Of Your Item/Raw Materail
            & Optimise on Plugging Leakages</p>
          </div>
          </div>

          <div className="inventory-5 text-start mt-5 font-medium  border-2 border-green-700 rounded-md p-3 md:transition md:duration-500 md:hover:scale-110 ">
          <div className=" p-3  flex gap-3 justify-start items-center text-xs ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm font-semibold">Report</ h4></li>
          </div>

          <div className=' p-3 text-xs text-slate-600 text-semibold'>
            <p>Know Your Raw Materail Stock Status And Purchase/Consumption History</p>
          </div>
          </div>


          </div>
      
    </div>
  )
}

export default InventoryManagement
