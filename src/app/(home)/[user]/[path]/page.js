"use client"
import Button from "@/common/Button";
import Container from "@/components/container";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaRegClock, FaTimesCircle, FaVideo } from "react-icons/fa";
import Swal from "sweetalert2";

const EventSchedule = ({params}) => {
    const {register,handleSubmit,reset} = useForm()
    const [scheduleInfo,setScheduleInfo] = useState({});
    const [loading,setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const {_id,timeRange,scheduleLink,path,hostName,method,eventName,hostEmail,duration,description} = scheduleInfo || {};
    const {startDate,endDate} = timeRange || {};
    const [scheduleDate, setScheduleDate] = useState(null);
    const minDate = new Date(startDate);
    const maxDate = endDate ?  new Date(endDate) : null;
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
    const onSubmit = async(data) => {
        const {inviteeEmail,inviteeName} = data;
        const res = await axios.put(`/api/scheduling/${path}`,{inviteeEmail,inviteeName,scheduleDate})
        if(res?.data?.modifiedCount > 0){
            Swal.fire({
                icon: 'success',
                title: 'Event confirm successfully',
                text: 'More information sent to your email.',
              })
              setShowModal(false);
              reset();
              setConfirm(true);
            const inviteeEmailSend = axios.post(`/api/sendmail`,);
            const hostEmailSend = axios.post(`/api/sendmail`,);
        }
    };

    if(loading){
        return <Container><p className="text-5xl py-40 mt-20 text-center">loading....</p></Container>
    }

    if(scheduleInfo){
        // if(scheduleInfo.confirm){
        //     return <Container><p className="text-5xl font-bold text-slate-500 py-40 mt-20 text-center">This Event already Confirmed...</p></Container>
        // }
    }
    else{
        return <Container><p className="text-5xl py-40 mt-20 text-center">No Schedule available in this link</p></Container>
    }
    return (
        <Container>
            <div className="pt-28 my-10">
                <div className="flex justify-center items-center gap-5"  >
                    <div className="w-[40%] border rounded-md p-5">
                        <h3 className="text-lg font-bold">Invitee:</h3>
                        <p className="font-medium text-xl mt-1">{hostName}</p>
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
                scheduleDate && <div onClick={()=> setShowModal(true)} className="w-fit mx-auto mt-5">
                    <Button>Confirm</Button>
                </div>
                }
            </div>
{/*===================== Model =================== */}
            {
                confirm && <div className="fixed flex justify-center items-center bg-slate-800 bg-opacity-30 top-0 left-0 w-full h-screen z-50">
                    <p className="text-5xl text-center font-bold text_shadow">Confirmed</p>
                </div>
            }
            {
            showModal && <div className="fixed flex justify-center items-center bg-slate-800 bg-opacity-40 top-0 left-0 w-full h-screen z-40">
                <div className="w-fit h-fit relative bg-white rounded-lg p-10 text-center">
                    <h2 className='text-3xl font-semibold '>Confirm Schedule</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Enter your Name....." className="input_field my-5" required {...register("inviteeName")} />

                        <input placeholder="Enter your Email...." className="input_field my-5" required type="email" {...register("inviteeEmail")} />

                        <input type="submit" value={'Confirm'} className="mp_btn mt-6"/>
                    </form>


                    <button onClick={()=> setShowModal(false)} className='text-3xl text-red-600 absolute rounded-full bg-white z-50 -right-2 -top-2'><FaTimesCircle className=''/></button>
                </div>
            </div>
            }
        </Container>
    );
};

export default EventSchedule;