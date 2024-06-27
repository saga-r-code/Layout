import React from "react";
import Hotel from '../Assets/Hotel.png'
import { IoSettingsOutline } from "react-icons/io5";

const BankOffice = () => {
  return (
    <div className="p-5 w-full h-screen md:px-20 py-2 md:py-5 overflow-auto">
      <div className="heading flex justify-between items-center">
        <h4 className="text-red-700 text-sm xl:text-lg font-semibold mx-10 mb-5 md:mx-0 ">
          EATOFY
        </h4>
      </div>

      <div className="card-container xl:w-[80%] xl:m-auto">
        <div className="cards grid gap-y-5 gap-x-4 grid-cols-2 md:grid-cols-3 md:gap-y-7 md:gap-x-10 list-none text-center mt-5 text-amber-800 font-medium  xl:grid-cols-4 xl:gap-x-20 xl:gap-y-20">
          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Hotal Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><IoSettingsOutline size={25}/></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Setting</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Order History</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">CRM Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Expired Stock</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Damage Stock</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Menu Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Report</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Inventory</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Subscribe Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Expenses Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Supplier Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Table Management</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Staff Scheduling</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Event Booking</ h4></li>
          </div>

          <div className="card-1 border border-red-600 p-4 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs md:transition md:duration-500 md:hover:scale-110 ">
            <li><img src={Hotel} alt="hotel" className="h-5" /></li>
            <li><h4 className="text-red-600 text-sm md:text-base font-semibold">Order Management</ h4></li>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BankOffice;
