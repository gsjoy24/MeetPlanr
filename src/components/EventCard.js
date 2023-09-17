import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";

const EventCard = ({schedule,handleEdit}) => {
    const {eventName,confirm,duration,scheduleLink,path,eventType} = schedule || {};
    const detailsLink = `${scheduleLink}/details`;
    const [action,setAction] = useState(false)
    const copyLink = () => {
    navigator.clipboard.writeText(scheduleLink).then(() => {
            toast.success("Meeting Link coped");
        });
    };
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
                <div className={`${action ? "block" : "hidden"}`}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <button onClick={()=> setAction(!action)} className="bg-white text-2xl text-[#465AF7]"><AiTwotoneSetting/></button>
            </div>
        </div>
    );
};

export default EventCard;
