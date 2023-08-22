'use client';
import Container from '@/components/container';
import React from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/animation_ll3za900.json';
import Button from '@/common/Button';
import Link from 'next/link';
const Banner = () => {
	return (
		<Container>
			<div className="my-12 grid lg:grid-cols-2 gap-8 items-center">
				<div className="order-2 lg:order-1">
					<h1 className="text-2xl sm:text-6xl lead font-bold ">MeetPlanr Appointment Scheduling</h1>
					<p className="mt-7 text-[20px] text-[#5A7795] mb-5">
						MeetPlanr is the most flexible, comprehensive appointment scheduling software for professionals, SMEs, and
						enterprises.
					</p>
					<Link href="/solutions">
						<Button>Create Event</Button>
					</Link>
				</div>
				<div className="order-1 lg:order-2 max-w-md mx-auto">
					<Lottie animationData={animation} loop={true} />
				</div>
			</div>
		</Container>
	);
};

export default Banner;
