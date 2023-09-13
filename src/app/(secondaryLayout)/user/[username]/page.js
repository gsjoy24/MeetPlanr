"use client"
import Image from 'next/image';
import image from '../../../../assets/review-image/img1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import EventCard from '@/components/EventCard';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import LoadingSpinner from '@/shareComponents/LoadingSpinner';
const AccountPage = () => {
	const [schedules,setSchedules] = useState([]);
	const [loading,setLoading] = useState(true);
	const params = useParams();
	const currentUser = UseGetCurrentUser();
	useEffect(()=>{
		(async()=> {
			const response = await axios(`/api/scheduling?username=${params?.username}`)
			setSchedules(response?.data)
			if(response?.data){
				setLoading(false)
			}
		})()
	},[params])
	console.log(schedules);
	if(loading || !currentUser){
		return <LoadingSpinner/>
	}
	return (
		<div className="w-4/5 p-5 mx-auto my-10 border-2 shadow-xl">
			<div className="text-center">
				<Image src={currentUser?.photoURL} width={110} height={110} className="w-28 h-28 object-cover mx-auto rounded-full" alt="User Profile image"/>
				<h2 className="mt-4 text-3xl font-semibold">{currentUser?.name}</h2>
				<h2 className="mt-1 text-base font-semibold"><b>User Name: </b> {currentUser?.username}</h2>
				<h2 className="mt-1 text-base font-semibold"><b>Email: </b> {currentUser?.email}</h2>
			</div>
			<div className="grid grid-cols-3 gap-5 my-8">
				{
					schedules? schedules.map(schedule => <EventCard schedule={schedule} key={schedule?._id}></EventCard>) : <span className='col-span-3 text-4xl text-slate-500 font-bold'>No Schedule available</span>
				}
			</div>
		</div>
	);
};

export default AccountPage;
