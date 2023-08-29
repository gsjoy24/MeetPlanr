import React from 'react';
import Swal from 'sweetalert2';

const EventCard = ({schedule}) => {
    const {eventName,description,duration,scheduleLink} = schedule || {};
    
   const copyLink = () => {
    navigator.clipboard.writeText(scheduleLink).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Link coped',
                showConfirmButton: false,
                timer: 1500
            })
        });
    };
    return (
        <div className='border-2 shadow-md p-5 rounded-ss-2xl rounded-br-2xl grid'>
            <h2 className='text-lg font-medium'>{eventName}</h2>
            <p className='my-1'>{duration}mins, One-on-One</p>
            <h3 className='font-semibold mt-2'>Description:</h3>
            <p className='my-1'>{description}</p>
            <div className="text-right mt-2 self-end">
                <button onClick={copyLink} className='px-4 rounded-3xl py-2 border border-[#465AF7]'>Copy Link</button>
            </div>
        </div>
    );
};

export default EventCard;