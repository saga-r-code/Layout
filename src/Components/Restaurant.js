import React from 'react';
import Hotel from '../Assets/Hotel.png'
import courier from '../Assets/courier.png'
import delivery from '../Assets/delivery.png'
import Swiggy from '../Assets/Swiggy.png'
import Zomoto from '../Assets/Zomato.png'

const Restaurant = () => {

  return (
    <div className="p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto 2xl:w-[95%] 2xl:m-auto">
      <div className='heading'>
      <h4 className="text-red-700 text-sm xl:text-lg font-semibold mx-12 mb-5 md:mx-0 ">EATOFY</h4>
      <div className='flex justify-center items-center gap-2 mt-2 lg:mt-2'>
      <h1 className="text-lg lg:text-xl xl:text-2xl font-semibold ">RESTAURANT</h1>
      <img src={Hotel} alt='hotel' className='h-4 inline-block '  />
      </div>
      </div>

      <div className='order mt-4 '>
        <ul className='flex flex-wrap sm:gap-x-12 gap-x-4 gap-y-5 justify-center items-center'>
          <li className='p-2 sm:p-3 rounded-full'><img src={courier} alt='courier' className='h-4 md:h-5'/>TakeAway</li>
          <li className='p-2 sm:p-3 rounded-full'><img src={delivery} alt='delivery' className='h-4 md:h-5' />Dilvery</li>
          <li className='p-2 sm:p-3 bg-gradient-to-r from-red-400 via-red-600 to-red-700 rounded-full '><img src={Zomoto} alt='Zomoto' className='h-4 md:h-5' />Zomoto</li>
          <li className='p-2 sm:p-3 bg-gradient-to-r from-[#c95311] via-[#A1430D] to-[#83360B] rounded-full'><img src={Swiggy} alt='Swiggy'className='h-4 md:h-5' />Swiggy</li>
        </ul>
      </div>

    <div className="table-category mt-8 flex justify-end">
      <ul className='grid grid-cols-2 justify-center items-center gap-1 flex-wrap text-sm font-semibold'>
        <li className='text-yellow-500'>Booked</li>
        <li className='text-slate-400'>Merge Table</li>
        <li className='text-green-700'>Payment</li>
        <li className='text-red-800'>Reservation</li>
      </ul>
    </div>

    <div className="floor flex justify-center flex-col gap-5 mt-10">
      <div className='main-hall  flex flex-col justify-center items-start'>
      <h1 className='py-1 px-2 sm:p-2 rounded-full w-fit text-sm text-white'>Main Hall</h1>
      <div className="cards flex justify-center items-center flex-wrap gap-5 mt-5 text-amber-800 font-medium float-left lg:mx-10">

        <div className="card-1 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T1</p>
        <p className="h-[2px] md:h-1 bg-blue-500 rounded-lg w-20"></p>
        </div>

        <div className="card-2 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T2</p>
        <p>Payment to</p>
        <p className="h-1 bg-green-700 rounded-lg w-20"></p>
        <p>(Rs. 1000)</p>
        </div>

        <div className="card-3 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T3</p>
        <p className="h-[2px] md:h-1 bg-yellow-500 rounded-lg w-20"></p>
        </div>

        <div className="card-4 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T4</p>
        <p className="h-[2px] md:h-1 bg-red-800 rounded-lg w-20"></p>

        </div>

        <div className="card-4 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs  h-[8em] md:h-[10em]">
        <p>Table T5</p>
        <p className="h-[2px] md:h-1 bg-slate-400 rounded-lg w-20"></p>
        </div>

      </div>
      
      </div> 
      {/* Main-hall closing */}

      <div className="first-floor flex flex-col justify-center items-start ">
      <h1 className='py-1 px-2 sm:p-2 rounded-full w-fit text-sm text-white'>First Floor</h1>
      <div className="cards flex justify-center items-center flex-wrap gap-5 mt-5 text-amber-800 font-medium float-left lg:mx-10">

        <div className="card-1 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T1</p>
        <p className="h-[2px] md:h-1 bg-blue-500 rounded-lg w-20"></p>
        </div>

        <div className="card-2 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T2</p>
        <p>Payment to</p>
        <p className="h-1 bg-green-700 rounded-lg w-20"></p>
        <p>(Rs. 1000)</p>
        </div>

        <div className="card-3 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T3</p>
        <p className="h-[2px] md:h-1 bg-yellow-500 rounded-lg w-20"></p>
        </div>

        <div className="card-4 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs h-[8em] md:h-[10em]">
        <p>Table T4</p>
        <p className="h-[2px] md:h-1 bg-red-800 rounded-lg w-20"></p>
        </div>

        <div className="card-4 border border-blue-950 p-1 md:p-3 rounded-md shadow-lg flex flex-col gap-3 justify-center items-center text-xs  h-[8em] md:h-[10em]">
        <p>Table T5</p>
        <p className="h-[2px] md:h-1 bg-slate-400 rounded-lg w-20"></p>
        </div>

      
      </div>

      </div>
      {/* First floor closing */}

    </div>

    </div>
  );
};

export default Restaurant;
