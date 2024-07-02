import React, { useState } from 'react';
import { ImCheckboxChecked } from 'react-icons/im';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-red-800 h-screen w-full flex items-center justify-center p-1 md:p-0">
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <form method="POST" action="">
          <div className="py-8 flex flex-col justify-center items-center gap-2 text-center">
              <span className="text-3xl font-bold">Sign In</span>
              <span className="text-sm font-semibold">   Welcome To Eatofy Become To Start Your 
              Journey </span>
          </div>

          <div>
            <input 
              type='email' 
              name='email'
              placeholder='Enter your email'
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] placeholder:text-black placeholder:font-medium" 
            />                        
          </div>

          <div className="mt-4">
            <div className="relative">
              <input 
                id="password" 
                type={passwordVisible ? "text" : "password"} 
                name="password" 
                placeholder="Enter your password" 
                required 
                autoComplete="current-password" 
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] placeholder:text-black placeholder:font-medium"
              />

              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <button 
                  type="button" 
                  id="togglePassword" 
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
                    <path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path>
                  </svg>                        
                </button>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <label htmlFor="remember_me" className="flex items-center">
              <input 
                type="checkbox" 
                id="remember_me" 
                name="remember" 
                className="rounded border-gray-300 text-indigo-600 shadow-sm"
              />
              <span className="ml-1 text-sm text-red-500">Remember Me</span>
            </label>
          </div>

          <div className="flex items-center justify-end mt-4">
            <a 
              className="hover:underline text-sm text-red-500 hover:text-red-700 rounded-md " 
              href="/"
            >
              Forgot your password?
            </a>
            <button 
              className="ml-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800  transition ease-in-out duration-150"
            >
              Sign In
            </button> 
          </div>

          <div className='my-5'>
            <hr /><p className='text-slate-400 text-center text-sm'>Or continue with</p>
          </div>
        </form>                
      </div>
    </div>
  );
}

export default LoginPage;
