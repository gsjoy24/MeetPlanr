import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

const EventCard = ({schedule,handleEdit,setRefetch}) => {
    const {eventName,confirm,duration,scheduleLink,path,eventType,_id} = schedule || {};
    const detailsLink = `${scheduleLink}/details`;
    const [action,setAction] = useState(false)
    const copyLink = () => {
    navigator.clipboard.writeText(scheduleLink).then(() => {
            toast.success("Meeting Link coped");
        });
    };
    const handleEditEvent = () => {
        handleEdit();
        setAction(false);
    }
    const handleDeleteEvent = () => {
        setAction(false);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                (async() => {
                    const response = await axios.delete(`/api/scheduling/delete/${_id}`)
                    if(response?.data?.deletedCount > 0){
                        setRefetch(true)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }  
                })()
            }
          })

    }
    return (
        <div className='border-2 relative shadow-md p-5 max-w-[400px] w-full mx-auto rounded-ss-2xl rounded-br-2xl grid'>
            <h2 className='text-lg font-medium'>{eventName}</h2>
            <p className='my-1'>{duration}mins, One-on-One</p>
            <Link target='_blank' className='my-5 text-blue-500 hover:underline' href={detailsLink}>View more details</Link>
            <div className="text-right mt-2 self-end">
                <button onClick={copyLink} className='px-4 rounded-3xl py-2 border border-[#465AF7]'>Copy Link</button>
            </div>
            {/* onClick={() => handleEdit(path,confirm,eventType)} */}
            <div className="absolute top-2 right-2">
                <div className={`absolute bg-white p-3 shadow-lg border top-0 right-8 text-sm rounded-md w-32 ${action ? "block" : "hidden"}`}>
                    <button onClick={handleEditEvent} className="flex items-center gap-3"><FaPencilAlt/> Edit</button>
                    <button onClick={handleDeleteEvent} className="flex items-center gap-3 mt-1"><FaTrashAlt/> Delete</button>
                </div>
                <button onClick={()=> setAction(!action)} className={`bg-white text-2xl text-[#465AF7] duration-300 transition-all ${action ? "rotate-90" : "rotate-0"}`}><AiTwotoneSetting/></button>
            </div>
        </div>
    );
};

export default EventCard;
