"use client"
import Button from "@/common/Button";
import Container from "@/components/container";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaRegClock, FaVideo } from "react-icons/fa";

const EventSchedule = ({params}) => {
    const [scheduleInfo,setScheduleInfo] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(()=> {
        (async () => {
            const res = await axios(`/api/scheduling/${params.path}`)
            const data = res?.data;
            if(data){
                setLoading(false);
            }{
                setLoading(false);
            }
            setScheduleInfo(data);
        })();
    },[params])
    console.log(scheduleInfo);
    
    const {_id,timeRange,scheduleLink,path,name,method,eventName,email,duration,description} = scheduleInfo || {};
    const {startDate,endDate} = timeRange || {};
    const [scheduleDate, setScheduleDate] = useState(null);
    const minDate = new Date(startDate);
    const maxDate = endDate ?  new Date(endDate) : null;
    if(loading){
        return <Container><p className="text-5xl py-40 mt-20 text-center">loading....</p></Container>
    }
    if(!scheduleInfo){
    return <Container><p className="text-5xl py-40 mt-20 text-center">No Schedule available in this link</p></Container>
    }
    return (
        <Container>
            <div className="pt-28 my-10">
                <div className="flex justify-center items-center gap-5"  >
                    <div className="w-[40%] border rounded-md p-5">
                        <h3 className="text-lg font-bold">Invitee:</h3>
                        <p className="font-medium text-xl mt-1">{name}</p>
                        <h3 className="font-bold text-lg mt-4">Meeting Name:</h3>
                        <p className="text-3xl font-semibold mt-1">{eventName}</p>
                        <h3 className="font-bold text-lg mt-4">Meeting duration:</h3>
                        <div className="flex gap-2 items-center my-3">
                            <FaRegClock className="text-2xl font-medium"/>
                            <span className="font-medium text-lg">{duration} minutes</span>
                        </div>
                        <h3 className="font-bold text-lg mt-4">location:</h3>
                        <div className=" mt-2">
                            {
                                method == "Google Meet" 
                                ? <div className="flex gap-2 items-center">
                                    <FaVideo className="text-2xl font-medium"/>
                                    <span className="font-medium text-lg">Google Meet</span>
                                </div>
                                :(method == 'In Person') 
                                ? <div className="flex gap-2 items-center">
                                    <FaMapMarkerAlt className="text-2xl font-medium"/>
                                    <span className="font-medium text-lg">In Person</span>
                                </div>
                                : <p>no location added</p>
                            }
                        </div>
                        <p className="text-red-500 mt-2 font-bold">If not select any time it automatic select 12:00 AM.</p>
                    </div>
                    <div className="">
                        <DatePicker
                            selected={scheduleDate}
                            showTimeSelect
                            onChange={(date) => setScheduleDate(date)}
                            minDate={minDate}
                            maxDate={maxDate}
                            timeIntervals={duration}
                            inline
                            fixedHeight
                        />
                    </div>
                </div>
                {
                scheduleDate && <div className="w-fit mx-auto mt-5">
                    <Button>Confirm</Button>
                </div>
                }
            </div>
        </Container>
    );
};

export default EventSchedule;