import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const CalenderModal = ({ isVisible, onClose }) => {
   if (!isVisible) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
         <div className="w-[700px]">
            <div className="bg-white p-2 rounded-md relative">
               <button
                  className="text-[12px] absolute right-2"
                  onClick={() => onClose()}
               >
                  <IoIosCloseCircleOutline className="text-[30px] text-red-400 hover:text-red-500 duration-400 font-thin" />
               </button>

               <div>
                  <p>Modal content</p>
                  <p>Modal content</p>
                  <p>Modal content</p>
                  <p>Modal content</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CalenderModal;