import React from "react";
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

               {/* These texts are for arrangement purposes only, they should be
               deleted when adding the calendar. */}
               <div className="mt-8 p-5">
                  <h2 className="text-3xl font-bold mb-3">
                     Scheduling Calendar
                  </h2>
                  <p>
                     There are many variations of passages of Lorem Ipsum
                     available, but the majority have suffered alteration in
                     some form, by injected humour, or randomised words which do
                     not look even slightly believable. If you are going to use
                     a passage of Lorem Ipsum, you need to be sure there is not
                     anything embarrassing hidden in the middle of text.
                  </p>
                  <br />
                  <p>
                     All the Lorem Ipsum generators on the Internet tend to
                     repeat predefined chunks as necessary, making this the
                     first true generator on the Internet. It uses a dictionary
                     of over 200 Latin words, combined with a handful of model
                     sentence structures, to generate Lorem Ipsum which looks
                     reasonable. The generated Lorem Ipsum is therefore always
                     free from repetition, injected humour, or
                     non-characteristic words etc.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CalenderModal;
