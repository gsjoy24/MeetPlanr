import EventDetails from '@/EventDetails/eventDetals';
import React from 'react';

const Page = ({params}) => {
    return (
        <div>
            <EventDetails path={params?.path}></EventDetails>
        </div>
    );
};

export default Page;