"use client"
import Container from '@/components/container';
import LoadingSpinner from '@/shareComponents/LoadingSpinner';
import axios from 'axios';
import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCalendar, FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import meetlogo from '@/assets/event-form/meet.png';
import locationLogo from '@/assets/event-form/location.png';
import phoneLogo from '@/assets/event-form/phone.png';
const EventDetails = ({path}) => {
    const [details,setDetails] = useState({});
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        (async() => {
            const eventDetails = await axios(`/api/scheduling/${path}`)
            if(eventDetails.data){
                setDetails(eventDetails.data)
                setLoading(false)
            }
        })()
    },[path])
    console.log(details);
    const {confirm,description,duration,eventName,hostEmail,hostName,inviteeEmail,inviteeName,method,scheduleDate,methodInfo} = details || {};

    if(loading){
        return <LoadingSpinner/>
    }
    return (
        <Container>
            <div className="w-2/3 p-5 my-20 border-2 shadow-xl mx-auto rounded-3xl rounded-tl-none rounded-br-none">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h2 className='text-md font-semibold'>Event Name:</h2>
                        <p className='text-2xl font-medium'>{eventName}</p>
                        <h2 className='text-md font-semibold mt-2'>Event Duration:</h2>
                        <div className="flex gap-2 items-center mt-1">
                            <FaRegClock className='text-xl'/>
                            <p className='font-medium'>{duration}min</p>
                        </div>
                        {
                            description && <div>
                                <h2 className='text-md font-semibold mt-2'>Event Description:</h2>
                                <p className=' font-medium'>{description}</p>
                            </div>
                        }
                    </div>
                    <div className="">
                        <h2 className='text-md font-semibold mt-2'>Event Date/Time:</h2>
                        {
                            details?.scheduleDate 
                            ? <div className="flex gap-2 items-center mt-1">
                                <FaCalendarAlt className='text-xl'/>
                                <p className='font-medium'>{moment(scheduleDate).format("dddd, MMMM d YYYY, h:mm A")}.</p>
                            </div>
                            : "Schedule not Confirmed"
                        }
                        <h2 className='text-md font-semibold mt-2'>Event Location:</h2>
                        {method == 'Google Meet' ? (
								<Link target='_blank' href={methodInfo} className="flex items-center text-blue-500 hover:underline gap-2">
									<Image width={30} height={30} src={meetlogo} alt='icon' />
									<span className="text-lg font-medium">Google Meet</span>
								</Link>
							) : method == 'Phone Call' ? (
								<div className="flex items-center gap-2">
									<Image width={30} height={30} src={phoneLogo} alt='icon' />
									<span className="text-lg font-medium">{methodInfo}</span>
								</div>
							) : method == 'In Person' ? (
								<div className="flex items-center gap-2">
									<Image width={30} height={30} src={locationLogo} alt='icon' />
									<span className="text-lg font-medium">{methodInfo}</span>
								</div>
							) : (
								<p>no location added</p>
							)}
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-5'>
                    <div className="border-2 p-3">
                        <h2 className='text-xl text-center font-semibold'>Host</h2>
                        <div className="flex flex-wrap gap-2">
                            <h3 className='font-bold'>Name:</h3>
                            <p>{hostName}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <h3 className='font-bold'>Email:</h3>
                            <a className='text-blue-500 hover:underline' href={`mailto:${hostEmail}`}>{hostEmail}</a>
                        </div>
                    </div>
                    <div className="px-5 border-l-0 border-2 p-3">
                        <h2 className='text-xl text-center font-semibold'>Invitee</h2>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <h3 className='font-bold'>Name:</h3>
                            <p>{inviteeName ? inviteeName : "Event not confirm"}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <h3 className='font-bold'>Email:</h3>
                            <p>{inviteeEmail ? <a className='text-blue-500 hover:underline' href={`mailto:${inviteeEmail}`}>{inviteeEmail}</a> : "Event not confirm"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default EventDetails;