import React from 'react';

const EventCard = ({schedule}) => {
    const {eventName,description,duration,eventDate,eventMethod,eventTime,_id} = schedule || {};
    return (
        <div className='border-2 shadow-md p-5 rounded-ss-2xl rounded-br-2xl grid'>
                <h2 className='text-lg font-medium'>{eventName}</h2>
                <p className='my-1'>{duration}mins, One-on-One</p>
                <p>On {eventDate},{eventTime} in {eventMethod}</p>
                <h3 className='font-semibold mt-2'>Description:</h3>
                <p className='my-1'>{description}</p>
            <div className="text-right mt-2 self-end">
                <button className='px-4 rounded-3xl py-2 border border-[#465AF7]'>Copy Link</button>
            </div>
        </div>
    );
};

export default EventCard;