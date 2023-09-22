import EventDetails from '@/EventDetails/eventDetals';
import React from 'react';

const EventDetailsPage = ({params}) => {
    return (
        <div>
            <EventDetails path={params?.path}></EventDetails>
        </div>
    );
};

export default EventDetailsPage;