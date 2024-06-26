import React from 'react';
import Hotel from '../Assets/Hotel.png'
import courier from '../Assets/courier.png'
import delivery from '../Assets/delivery.png'
import Swiggy from '../Assets/Swiggy.png'
import Zomoto from '../Assets/Zomato.png'

const Restaurant = () => {
  const categoryhandler = () =>{
    alert("Changes Remaining")
  }
  return (
    < div className=" w-full h-screen  p-3  lg:p-5 ">
      <div className='heading'>
      <h4 className="text-red-700 text-sm xl:text-lg font-semibold ">EATOFY</h4>
      <div className='flex justify-center items-center gap-2 mt-2 lg:mt-2'>
      <h1 className="text-lg lg:text-xl xl:text-2xl font-semibold ">RESTAURANT</h1>
      <img src={Hotel} alt='hotel' className='h-4 inline-block '  />
      </div>
      </div>

      <div className='order mt-4 '>
        <ul className='flex flex-wrap sm:gap-x-12 gap-x-4 gap-y-5 justify-center items-center'>
          <li className='p-3 rounded-full'><img src={courier} alt='courier' className='h-5'/>TakeAway</li>
          <li className='p-3 rounded-full'><img src={delivery} alt='delivery' className='h-5' />Dilvery</li>
          <li className='p-3 bg-gradient-to-r from-red-400 via-red-600 to-red-700 rounded-full z-10'><img src={Zomoto} alt='Zomoto' className='h-5' />Zomoto</li>
          <li className='p-3 bg-gradient-to-r from-[#c95311] via-[#A1430D] to-[#83360B] rounded-full'><img src={Swiggy} alt='Swiggy'className='h-5' />Swiggy</li>
        </ul>
      </div>

    <div className="table-category mt-8 flex justify-end">
      <ul className='grid grid-cols-2 justify-center items-center gap-1 flex-wrap text-sm '>
        <div><li><input type='checkbox' onChange={categoryhandler} />Booked</li></div>
        <div><li><input type='checkbox' onChange={categoryhandler}/>Merge Table</li></div>
        <div><li><input type='checkbox' onChange={categoryhandler} />Payment</li></div>
        <div><li><input type='checkbox' onChange={categoryhandler} />Reservation</li></div>    
      </ul>
    </div>

    </div>
  );
};

export default Restaurant;
