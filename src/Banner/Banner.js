import Container from '@/components/container';
import React from 'react';
// import videos from '../media/banner.mp4'
const Banner = () => {
    return (
        <Container>
            <div className='my-12 grid grid-cols-2 gap-8'>
                <div className="">
                    <h1 className='text-6xl leading-tight font-bold'>MeetPlanr Appointment Scheduling</h1>
                    <p className='mt-7'>MeetPlanr is the most flexible, comprehensive appointment scheduling software for professionals, SMEs, and enterprises.</p>
                    <button className='ft_btn'>Purchase</button>
                </div>
                <div className="border">
                    <video autoPlay controls src="../media/banner.mp4"></video>
                </div>
            </div>
        </Container>
    );
};

export default Banner;