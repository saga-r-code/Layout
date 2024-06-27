import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import chart from '../Assets/chart.webp'



const Dashboard = () => {
  return (
    <div className="p-5 w-full h-screen md:px-20 pt-1 md:py-5 overflow-auto 2xl:w-[95%] 2xl:m-auto">
      <div className='heading flex justify-between items-center'>
      <h4 className="text-red-700 text-sm xl:text-lg font-semibold mx-12 mb-5 md:mx-0 ">EATOFY</h4>
      <div>
        <ul className=' relative flex justify-center gap-3'>
        <span className="absolute -top-1 left-2 rounded-full bg-red-500 h-4 w-4 text-xs text-center text-red-50">4</span>
            <li><IoIosNotificationsOutline size={18} /></li>
            <li className='md:w-10 md:h-10 h-8 w-8 rounded-full text-center bg-slate-600'><CgProfile size={32} className='md:w-10 md:h-10 h-8 w-8'/></li>
        </ul>
      </div>
      </div>

      <div className="mb-12 mt-5 flex gap-10 flex-wrap  justify-center items-center">
        <div className=" flex flex-col w-full sm:w-[45%] lg:w-[18em] xl:w-[20em] border border-red-500 rounded-xl bg-white text-gray-700 shadow-red-500/50 md:transform md:transition md:duration-500 md:hover:scale-110">
          <div className=" bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg  -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
              <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd"></path>
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
            </svg>
          </div>
          <div className="p-5 text-right -mt-10">
            <p className="block text-sm  text-blue-gray-600">Total Expenses</p>
            <h4 className="block text-2xl font-semibold text-blue-gray-900">&#8377;16,592</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block   text-base  font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div>
        </div>
        
        
        <div className=" flex flex-col w-full sm:w-[45%] lg:w-[18em] xl:w-[20em] border border-green-500 rounded-xl bg-white text-gray-700 shadow-green-400/65 md:transform md:transition md:duration-500 md:hover:scale-110">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg  -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </div>
          <div className="p-4 text-right -mt-10">
            <p className="block  text-sm  text-blue-gray-600">Total Sales</p>
            <h4 className="block text-2xl font-semibold text-blue-gray-900">&#8377;11,592</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block   text-base  font-normal text-blue-gray-600">
              <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>

        <div className=" flex flex-col w-full sm:w-[45%] lg:w-[18em] xl:w-[20em] border border-green-500 rounded-xl bg-white text-gray-700 shadow-green-600/40 md:transform md:transition md:duration-500 md:hover:scale-110 ">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg  -mt-4 grid h-16 w-16 place-items-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="p-4 text-right -mt-10">
            <p className="block   text-sm  text-blue-gray-600">Total Revenue</p>
            <h4 className="block text-2xl font-semibold text-blue-gray-900">&#8377;35,598</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block   text-base  font-normal text-blue-gray-600">
              <strong className="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div>
        </div>

      </div>

    <div className="bar">
        <img src={chart} alt="chart" />
    </div>
      
    </div>
  )
}

export default Dashboard
