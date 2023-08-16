import SchedulingFeatures from '@/Product/SchedulingFeatures';
import UserDocs from '@/Product/UserDocs';
import WorldWideUsers from '@/Product/WorldWideUsers';
import Container from '@/components/container';
import React from 'react';

const page = () => {
    return (
        <Container>
            <SchedulingFeatures></SchedulingFeatures>
            <WorldWideUsers></WorldWideUsers>
            <UserDocs></UserDocs>
        </Container>
    );
};

export default page;