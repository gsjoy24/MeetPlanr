"use client"
import Container from '@/components/container';
import React from 'react';
import Lottie from "lottie-react";
import animation from '../assets/animation_ll3za900.json'
const Banner = () => {
    return (
       <Container>
          <div className="my-12 grid lg:grid-cols-2 gap-8 items-center">
             <div className="order-2 lg:order-1">
                <h1 className="text-2xl sm:text-6xl leading-normal font-bold">
                   MeetPlanr Appointment Scheduling
                </h1>
                <p className="mt-7 text-[20px] text-[#5A7795]">
                   MeetPlanr is the most flexible, comprehensive appointment
                   scheduling software for professionals, SMEs, and enterprises.
                </p>
                <button className="ft_btn">Purchase</button>
             </div>
             <div className="order-1 lg:order-2">
                <Lottie animationData={animation} loop={true} />
             </div>
          </div>
       </Container>
    );
};

export default Banner;