'use client';
import Container from '@/components/container';

import Lottie from 'lottie-react';
import animation from '../assets/animation_ll3za900.json';
import Button from '@/common/Button';
import Link from 'next/link';

const Banner = () => {
	return (
		<div className="bg-[#F7FAFF]">
			<Container>
				<div className="lg:grid-cols-2 grid items-center gap-8 py-6">
					<div className="lg:order-1 order-2">
						<h1 className="sm:text-6xl text-2xl font-bold line_height">MeetPlanr Appointment Scheduling</h1>
						<p className="mt-7 text-[20px] text-[#5A7795] mb-5">
							MeetPlanr is the most flexible, comprehensive appointment scheduling software for professionals, SMEs, and
							enterprises.
						</p>
						<Link className='mt-5 inline-block' href="/solutions">
							<Button>Create Event</Button>
						</Link>
					</div>
					<div className="lg:order-2 order-1">
						<Lottie animationData={animation} loop={true} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Banner;
