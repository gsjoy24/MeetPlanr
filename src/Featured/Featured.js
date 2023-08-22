'use client';
import Button from '@/common/Button';
/* eslint-disable react/no-unescaped-entities */
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/container';
import React, { useEffect } from 'react';
import { FaCalendarAlt, FaCalendarCheck, FaDatabase, FaLink, FaMoneyCheckAlt, FaRegEnvelope } from 'react-icons/fa';
const Featured = () => {
	return (
		<section className="" style={{ marginTop: '64px', marginBottom: '64px' }}>
			<Container>
				<SectionTitle title={'Features'}></SectionTitle>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					<div className="border-2 p-5 rounded-md shadow-lg grid ft_hover">
						<div className="border w-[120px] h-[120px] ft_icon flex justify-center items-center rounded-full mx-auto text-[#00a4f8]">
							<FaCalendarCheck className=" text-6xl" />
						</div>
						<h3 className="font-semibold text-2xl mt-7 text-center">Calender</h3>
						<p className="my-5">
							The calendar feature is the backbone of our platform, allowing users to set their availability and view
							upcoming interview appointments. Users can sync their schedules with popular calendar services like Google
							Calendar, ensuring a seamless integration with their existing commitments
						</p>
						<Button>Learn more</Button>
					</div>
					<div className="border-2 p-5 grid rounded-md shadow-lg ft_hover">
						<div className="border w-[120px] h-[120px] ft_icon flex justify-center items-center rounded-full mx-auto text-[#00a4f8]">
							<FaRegEnvelope className="text-6xl" />
						</div>
						<h3 className="font-semibold text-2xl mt-7 text-center">Reminder Emails</h3>
						<p className="my-5">
							To reduce no-shows and enhance communication, your platform sends automated reminder emails to both
							interviewers and interviewees before the scheduled interview. This feature helps to keep participants
							informed and engaged, improving the overall scheduling experience.
						</p>
						<Button>Learn more</Button>
					</div>
					<div className="border-2 p-5 grid rounded-md shadow-lg ft_hover">
						<div className="border w-[120px] h-[120px] ft_icon flex justify-center items-center rounded-full mx-auto text-[#00a4f8]">
							<FaCalendarAlt className=" text-6xl" />
						</div>
						<h3 className="font-semibold text-2xl mt-7 text-center">Scheduling</h3>
						<p className="my-5">
							Your platform offers a user-friendly and efficient scheduling process. Interviewees can easily view
							interviewers' availability and select suitable time slots for their interviews. The system ensures that
							interviewers' calendars are up-to-date to avoid conflicts and double bookings.
						</p>
						<Button>Learn more</Button>
					</div>
					<div className="border-2 p-5 grid rounded-md shadow-lg ft_hover">
						<div className="border w-[120px] h-[120px] ft_icon flex justify-center items-center rounded-full mx-auto text-[#00a4f8]">
							<FaLink className="text-6xl" />
						</div>
						<h3 className="font-semibold text-2xl mt-7 text-center">Embedding Options</h3>
						<p className="my-5">
							To enhance accessibility and convenience, your platform provides embedding options. Users can embed
							interview scheduling forms or links directly into their websites or emails. This feature allows
							interviewees to schedule interviews without leaving the organization's web page or email interface.
						</p>
						<Button>Learn more</Button>
					</div>
					<div className="border-2 p-5 grid rounded-md shadow-lg ft_hover">
						<div className="border w-[120px] h-[120px] ft_icon flex justify-center items-center rounded-full mx-auto text-[#00a4f8]">
							<FaDatabase className="text-6xl" />
						</div>
						<h3 className="font-semibold text-2xl mt-7 text-center">Database support</h3>
						<p className="my-5">
							Your platform offers seamless integration with external databases or Applicant Tracking Systems (ATS).
							This integration allows interviewers to access candidates' information and interview details directly from
							the ATS or database, streamlining the interview process and enhancing collaboration.
						</p>
						<Button>Learn more</Button>
					</div>
					<div className="border-2 p-5 grid rounded-md shadow-lg ft_hover">
						<div className="border w-[120px] h-[120px] ft_icon flex justify-center items-center rounded-full mx-auto text-[#00a4f8]">
							<FaMoneyCheckAlt className="text-6xl" />
						</div>
						<h3 className="font-semibold text-2xl mt-7 text-center">Payment</h3>
						<p className="my-5">
							{' '}
							As an optional feature, your platform provides payment integration for premium or advanced services. Users
							can choose to charge interviewees for specialized interview sessions, consultations, or access to
							exclusive features. This payment integration ensures a secure and hassle-free transaction process.
						</p>
						<Button>Learn more</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Featured;
