import React from 'react';
import SUC from '../assets/suc.svg';
import PHONE from '../assets/phone.svg';

const form = () => {
  return (
    <div class="bg-white relative bg-cover z-[0] pb-40">
    <div class="w-full pt-40 px-5">
      <div>
          <img src={SUC} class="absolute top-0 right-2 z-[-1] overflow-hidden "alt="logo" />
        </div>
      {/*<div class="w-full flex justify-center items-center bg-red-300">*/}
        <div class="w-full flex justify-center">    
              <div class=" w-full md:w-2/5 flex md:flex-col justify-center items-center shadow-md bg- bg-gray-100">
                <div class="w-">
                 <div class="">
                    <div>
                      <h1 class="text-red-600 text-4xl font-bold pb-4 pt-6">aquila</h1>
                    </div>
                    <div>
                      <p class="pb-6 text-slate-600 font-medium text-2xl">Start With Your Free Account Today </p>
                    </div>
                  </div>
                  <div class="w-full ">
                  <form>
                  <div class="w-full mx-auto">
                    <div class="flex flex-col justify-between gap-5">
                      <div class="w-full">
                        <input type="text" placeholder="Username" class="py-3  rounded-md px-2 w-full bg-gray-200"/>
                      </div>
                      <div class="w-full">
                        <input type="text" placeholder="Phone number" class="py-3 rounded-md px-2 w-full bg-gray-200"/>
                      </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between gap-5 mt-4">
                      <div class="w-full md:w-1/2">
                        <input type="email" placeholder="Business-Email" class="py-3 rounded-md px-2 w-full bg-gray-200 "/>
                      </div>
                      <div class="w-full md:w-1/2">
                        <input type="text" placeholder="Company-Name" class="py-3 rounded-md px-2 w-full bg-gray-200 "/>
                      </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between gap-5 mt-4">
                      <div class="w-full md:w-1/2">
                        <input type="email" placeholder="Password" class="py-3 rounded-md px-2 w-full bg-gray-200"/>
                      </div>
                      <div class="w-full md:w-1/2">
                        <input type="text" placeholder="Confirm-password" class="py-3 rounded-md px-2 w-full bg-gray-200"/>
                      </div>
                    </div>
                    <div class="flex flex-col justify-between gap-5 mt-4">
                      <div class="w-full">
                        <input type="email" placeholder="How did you hear about us" class="py-3 rounded-md px-2 w-full bg-gray-200"/>
                      </div>
                    </div>
                    <div>
                    <button class="bg-red-600 w-full text-black py-3 mt-4 rounded-md">Sign-up</button>
                    </div>
                  </div>
                </form>
                <br/>
                <div class="pt-4 pb-20 justify-center text-center">
                  Already have an account? <a href="/" class="text-yellow-500 hover:">Sign In</a> 
                </div>
                </div>
                </div>
                </div>
                <br/>
                <div class="hidden md:w-2/5 md:flex lg:flex md:justify-center lg:justify-center md:items-center lg:items-center shadow-md bg-gray-100 ">
                  <div className="login-form2">
                    <div class=" flex justify-center items-center pt-12">
                    <img src={PHONE} alt="profile pics"/>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            </div>    
    
  )
}

export default form
