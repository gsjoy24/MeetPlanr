/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "@/assets/events-tabs/placeholder.jpg";
import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import one_one_one from '../assets/events-tabs/one_on_one.png';
import group from '../assets/events-tabs/group.png';
import { FaAngleRight, FaTimesCircle } from "react-icons/fa";
import UseGetCurrentUser from "@/hooks/UseGetCurrentUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";                    

const EventsTabs = () => {
   const [actions,setActions] = useState(false);
   const [tabIndex, setTabIndex] = useState(0);
   const [schedules, setSchedules] = useState([]);
   const [loading,setLoading] = useState(true)
   const currentUser = UseGetCurrentUser();
   const router = useRouter();
   useEffect(() => {
    	(async () => {
			try {
				const res = await fetch(`/api/scheduling?username=${currentUser?.username}`);
				const data = await res.json();
				if(data.length > 0) {
					setSchedules(data);
					setLoading(false)
				}else{
					setLoading(false)
				}	
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		})()
   }, [currentUser]);
   const copyLink = () => {
    navigator.clipboard.writeText(`https://meet-planr.vercel.app/user/${currentUser?.username}`).then(() => {
		toast.success("User Link coped");
        });
    };
	const handleEventType = () => {
		if(currentUser){
			const availableSchedulesQuantity = (currentUser?.plan === "Basic") ? (2 - schedules.length) : (currentUser?.plan === "Standard") ? (10 - schedules.length) : 0 ;
			console.log(availableSchedulesQuantity);
			if(currentUser?.plan === "Premium" || availableSchedulesQuantity > 0){
				setActions(true)
			}else{
				Swal.fire({
					title: 'Your limit is over!',
					text: "If you want more limit for create events please upgrade your plan.",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Upgrade plan'
				  }).then((result) => {
					if (result.isConfirmed) {
						router.push('/pricing')
					}
				  })
			}
		}
	}
	const handleGroupEvent = () => {
		if(currentUser){
			if(currentUser?.plan === "Basic"){
				Swal.fire({
					title: "Upgrade Your Plan!",
					text: "If you want to create group event. please upgrade your plan.",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Upgrade plan'
				}).then((result) => {
					if (result.isConfirmed) {
						router.push('/pricing')
						setActions(false)
					}
				})
			}
	}}
	const handleEdit = (path,confirm,eventType) => {
			if(currentUser?.plan === "Premium"){
				if(!(eventType == "Single" && confirm)){
					router.push(`/editevent/${path}`)
				}else{
					Swal.fire({
						icon: 'warning',
						title: 'Oops...',
						text: "You can't Edit this event. Because it's already confirmed",
					  })
				}
			}else{
				Swal.fire({
					title: "This is the premium Features!",
					text: "If you want to Edit the event. Please Purchase the premium plan.",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Upgrade plan'
				}).then((result) => {
					if (result.isConfirmed) {
						router.push('/pricing')
						setActions(false)
					}
				})
			}
	}
	return (
		<div>
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<div className="shadow-md">
					<Container>
						<TabList className=" flex space-x-10 mt-10">
							<Tab className="border-0 cursor-pointer pb-2">Event Types</Tab>
							<Tab className="border-0 cursor-pointer pb-2">Scheduled Events</Tab>
						</TabList>
					</Container>
				</div>
				<Container>
					<TabPanel>
						<div className="my-8 md:flex lg:flex justify-between items-center">
							<div className="flex items-center gap-2 sm:gap-5">
								<Image src={currentUser ? currentUser?.photoURL : img} alt="User Profile" width={50} height={50} className="w-12 h-12 rounded-full border" />
								<div>
									<h4>{currentUser ? currentUser?.name : "User Name"}</h4>
									<button onClick={copyLink} className="text-[#465AF7] hidden sm:block">
										https://meet-planr.vercel.app/user/{currentUser ? currentUser?.username :'username'}
									</button>
									<button onClick={copyLink} className="text-[#465AF7] text-ellipsis w-[270px] block sm:hidden overflow-hidden whitespace-nowrap">
										https://meet-pla.../user/{currentUser ? currentUser?.username :'username'}
									</button>
								</div>
							</div>

							<div className="mt-6 pt-5 md:pt-0 border-t-2 md:border-0">
								<button disabled={!currentUser} onClick={handleEventType} className="w-full disabled:cursor-wait sm:w-fit border px-5 py-1 rounded-full border-[#465AF7] text-[#465AF7]">
									Create New Event
								</button>
								{
									actions && <div className="w-full h-screen bg-slate-800 bg-opacity-10 fixed top-0 left-0 z-50 flex items-center justify-center">
									<div className="w-fit max-w-[95%] flex flex-col relative">
										<button className="absolute -top-2 -right-2 text-3xl text-red-500 bg-white rounded-full" onClick={()=> setActions(false)}><FaTimesCircle/></button>

										<Link href={"/event/oneOnOne"} className="et_link rounded-t-xl border-2">
											<div className="gap-4 flex items-center">
												<Image src={one_one_one} alt="icon" className="w-20 object-cover"/>
												<div className="flex flex-col">
												<span>One-On-One</span>
												<span><b>One host</b> with <b>one invitee</b></span>
												</div>
											</div>
											<FaAngleRight className="text-xl"/>
										</Link>
										
										<Link href={"/event/hostControlSingle"} className="border-2 border-t-0 hover:border-t-2 et_link">
											<div className="gap-4 flex items-center">
												<Image src={one_one_one} alt="icon" className="w-20 object-cover"/>
												<div className="flex flex-col">
												<span>Host control (one-on-one)</span>
												<span><b>One host</b> with <b>group invitee</b></span>
												</div>
											</div>
											<FaAngleRight className="text-xl"/>
										</Link>

										<button onClick={handleGroupEvent} className="border-2 border-t-0 hover:border-t-2 et_link rounded-b-xl">
											<div className="gap-4 flex items-center">
												<Image src={group} alt="icon" className="w-20 object-cover"/>
												<div className="flex flex-col text-left">
												<span>Host control (Group)</span>
												<span><b>One host</b> with <b>group invitee</b></span>
												</div>
											</div>
											<FaAngleRight className="text-xl"/>
										</button>
									</div>
									</div>
								}
							</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 my-8 justify-center sm:justify-evenly lg:justify-start">
							{
							loading ? 
							<div className="mx-auto sm:col-span-2 lg:col-span-3 py-20">
								<span className="loading loading-bars loading-lg"></span>
							</div> 
							: schedules ? schedules.map((schedule) => (
									<EventCard handleEdit={handleEdit} schedule={schedule} key={schedule?._id}></EventCard>
								)) : <span className='col-span-3 text-4xl text-slate-500 font-bold'>No Schedule available</span>
							}
						</div>
					</TabPanel>
					<TabPanel>
						<p className="text-[#737373] text-xl font-semibold mt-8">No Events Yet</p>
					</TabPanel>
				</Container>
			</Tabs>
		</div>
	);
};

export default EventsTabs;
