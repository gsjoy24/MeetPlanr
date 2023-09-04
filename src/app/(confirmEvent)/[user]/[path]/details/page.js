import EventDetails from '@/EventDetails/eventDetals';
import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <EventDetails path={params?.path}></EventDetails>
        </div>
    );
};

export default page;