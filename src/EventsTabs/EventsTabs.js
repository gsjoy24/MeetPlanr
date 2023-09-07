/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosAdd } from "react-icons/io";
import img from "@/assets/events-tabs/placeholder.jpg";
import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import one_one_one from '../assets/events-tabs/one_on_one.png';
import group from '../assets/events-tabs/group.png';
import { FaAngleRight, FaTimesCircle } from "react-icons/fa";
import UseGetCurrentUser from "@/hooks/UseGetCurrentUser";
import LoadingSpinner from "@/shareComponents/LoadingSpinner";
import Swal from "sweetalert2";

const EventsTabs = () => {
   const [actions,setActions] = useState(false);
   const [tabIndex, setTabIndex] = useState(0);
   const [schedules, setSchedules] = useState([]);
   const [loading,setLoading] = useState(true)
   const currentUser = UseGetCurrentUser();
   useEffect(() => {
    	(async () => {
			try {
				const res = await fetch(`/api/scheduling?username=${currentUser?.username}`);
				const data = await res.json();
				console.log(data);
				if(data){
					setSchedules(data);
					setLoading(false)
				}	
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		})()
   }, [currentUser]);
   const copyLink = () => {
    navigator.clipboard.writeText(`https://meet-planr.vercel.app/${currentUser?.username}`).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Link coped',
                showConfirmButton: false,
                timer: 1500
            })
        });
    };
	return (
		<div>
			{/* <div className="flex justify-between my-8">
				<h2 className="text-3xl">My MeetPlanr</h2>
				<button className="bg-[#465AF7] hover:bg-sky-950 text-white px-4 py-3 rounded-full flex items-center space-x-1 font-semibold">
					<span>
						<IoIosAdd className="text-xl" />
					</span>
					<span>Create</span>
				</button>
			</div> */}
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
						<div className="flex items-center space-x-5">
							<Image src={img} alt="User Profile" className="w-12 h-12 rounded-full border" />
							<div>
								<h4>{currentUser ? currentUser?.name : "User Name"}</h4>
								<button onClick={copyLink} className="text-[#465AF7]">
									https://meet-planr.vercel.app/{currentUser ? currentUser?.username :'username'}
								</button>
							</div>
						</div>

                  <div className="mt-6">
                     <button onClick={() => setActions(true)} className="border px-5 py-1 rounded-full border-[#465AF7] text-[#465AF7]">
                        Create New Event
                     </button>
                     {
                        actions && <div className="w-full h-screen bg-slate-800 bg-opacity-10 fixed top-0 left-0 z-50 flex items-center justify-center">
                           <div className=" w-fit flex flex-col relative">
                              <button className="absolute -top-2 -right-2 text-3xl text-red-500 bg-white rounded-full" onClick={()=> setActions(false)}><FaTimesCircle/></button>
                              <Link href={"/event/one-on-one"} className="et_link rounded-t-xl border-2">
                                 <div className="gap-4 flex items-center">
                                    <Image src={one_one_one} alt="icon" className="w-20 object-cover"/>
                                    <div className="flex flex-col">
                                       <span>One-On-One</span>
                                       <span><b>One host</b> with <b>one invitee</b></span>
                                    </div>
                                 </div>
                                 <FaAngleRight className="text-xl"/>
                              </Link>
                              <Link href={"/event/group"} className="border-2 border-t-0 hover:border-t-2 et_link rounded-b-xl">
                                 <div className="gap-4 flex items-center">
                                    <Image src={group} alt="icon" className="w-20 object-cover"/>
                                    <div className="flex flex-col">
                                       <span>Group</span>
                                       <span><b>One host</b> with <b>group invitee</b></span>
                                    </div>
                                 </div>
                                 <FaAngleRight className="text-xl"/>
                              </Link>
                           </div>
                        </div>
                     }
                  </div>
					</div>
					<div className="grid grid-cols-3 gap-5 my-8">
						{
						loading ? 
						<div className="mx-auto col-span-3 py-20">
							<span className="loading loading-bars loading-lg"></span>
						</div> 
						: schedules.map((schedule) => (
								<EventCard schedule={schedule} key={schedule?._id}></EventCard>
							))
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
