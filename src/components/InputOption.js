"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaTimes } from 'react-icons/fa';
import meetlogo from '@/assets/event-form/meet.png';
import locationLogo from '@/assets/event-form/location.png';
import phoneLogo from '@/assets/event-form/phone.png';

const InputOption = ({method,setMethod,setValue}) => {
	const [action, setAction] = useState(false);
   const clearMethod = () =>{
      setMethod(null)
      setValue('methodInfo',"")
   }
    return (
        <div
        className={`rounded-md p-3 w-full relative 
        ${
           action
              ? "border-2 border-[#00a4f8]"
              : "border border-[#9ab2cc]"
        }`}
     >
        {method == "Google Meet" ? (
           <div className="relative flex gap-3">
              <Image className="object-contain w-6" alt="meet icon" src={meetlogo} />
              <p className="text-lg font-medium">Google Meet</p>
              <span onClick={clearMethod} className="right-1 top-1 absolute text-lg cursor-pointer" >
                 <FaTimes />
              </span>
           </div>
        ) : method == "Phone Call" ? (
            <div className="relative flex gap-3">
               <Image className="object-contain w-6 rounded-full" alt="meet icon" src={phoneLogo} />
               <p className="text-lg font-medium">
                  Phone Call
               </p>
               <span
                  onClick={clearMethod}
                  className="top-1 absolute right-0 text-lg cursor-pointer"
               >
                  <FaTimes />
               </span>
            </div>
         ) : method == "In Person" ? (
           <div className="relative flex gap-3">
              <Image className="object-contain w-6 rounded-full" alt="meet icon" src={locationLogo} />
              <p className="text-lg font-medium">
                 In-person Meeting
              </p>
              <span
                 onClick={clearMethod}
                 className="top-1 absolute right-0 text-lg cursor-pointer"
              >
                 <FaTimes />
              </span>
           </div>
        ) : (
           <div
              onClick={() => setAction(!action)}
              className="cursor-pointer"
           >
              <div className="flex items-center justify-between">
                 <p>Select a Method</p>
                 {action ? (
                    <FaAngleUp className="text-xl" />
                 ) : (
                    <FaAngleDown className="text-xl" />
                 )}
              </div>
              {action && (
                 <div className="">
                    <div onClick={() => setMethod("Google Meet")} className="flex gap-3 border-t-2 border-[#00a4f8] mt-2 py-2" >
                       <Image className="object-contain w-6" alt="meet icon" src={meetlogo} />
                       <p className="text-lg font-medium"> Google Meet </p>
                    </div>
                    <div onClick={() => setMethod("Phone Call")} className="flex gap-3 border-t-2 border-[#00a4f8] py-2" >
                       <Image className="object-contain w-6" alt="meet icon" src={phoneLogo} />
                       <p className="text-lg font-medium">Phone Call</p>
                    </div>
                    <div onClick={() => setMethod("In Person")} className="flex gap-3 border-t-2 border-[#00a4f8] pt-2" >
                       <Image className="object-contain w-6" alt="meet icon" src={locationLogo} />
                       <p className="text-lg font-medium"> In-person Meeting </p>
                    </div>
                 </div>
              )}
           </div>
        )}
     </div>
    );
};

export default InputOption;