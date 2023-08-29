/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Button from '@/common/Button';
import Container from '@/components/container';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { FaAngleDown, FaAngleLeft, FaAngleUp, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import meetlogo from '../../../assets/event-form/meet.png'
import locationLogo from '../../../assets/event-form/location.png'
import Image from 'next/image';
import { UserAuth } from '@/providers/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const page = ({params}) => {
    const {register,handleSubmit,reset} = useForm()
    const router = useRouter();
    const [method,setMethod] = useState(null);
    const [dateRange,setDateRange] = useState(null);
    const [action,setAction] = useState(false);
    const { user } = UserAuth()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
    const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
    const clearDateRange = () => {
        setDateRange(null);
        setStartDate(new Date())
        setEndDate(null)
    }
    const onSubmit = async (data) => {
      if(method){
        const {eventName,description,duration,eventDate,eventTime,eventLink}=data;
        const email=user?.email;
        const name=user?.displayName;
        const x= Math.round(Math.random() * 100000)
        const scheduleLink = `http://localhost:3000/${eventLink + x}`;
        try {
            
            const response = await axios.post(`/api/scheduling`, { eventName,description,duration,eventDate,eventTime,method,scheduleLink});
            console.log(response.data);
            if(response.data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Schedule created successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  const sendEmail= await axios.post(`/api/sendmail`,{email,name,scheduleLink});
                  console.log(sendEmail.data);
                  router.back();
                  reset();
            }
            
        } catch (error) {
            console.error('Error submitting form:', error);
        }
      }else{
        alert('Please select a method!')
      }
       
    }
    return (
        <Container>
            <div className="my-8 mt-28">
                <div className="my-5">
                    <button onClick={()=> router.back()} className='border border-[#465AF7] text-[#465AF7] w-fit h-fit mx-auto px-5 py-4 rounded-3xl hover:bg-[#465AF7] hover:text-[#fff] cursor-pointer transition-all duration-500'><FaAngleLeft className='inline mr-1'/> Back</button>
                </div>
    {/*================= Event Form ====================== =*/}
                <div className='md:w-4/5 border-2 border-black rounded-sm shadow-md mx-auto'>
                    {/* <h2 className='text-3xl font-medium text-center w-full'>Add {params.formType} Event Type</h2> */}
                    <h2 className='text-3xl py-5 font-medium text-center w-full border-b'>Add One-on-One Event Type</h2>

                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                    <div className="mx-3 sm:mx-10 my-8 flex flex-col lg:w-1/2">
                        <label className='text-lg font-semibold mb-3' htmlFor='eventName'>Event Name:*</label>
                        <input placeholder='Event Name...' required className='input_field' id='eventName' {...register("eventName")} />         

                        <label className='text-lg font-semibold mb-3 mt-8' htmlFor='eventMethod'>Event Method:*</label> 
                        
                        <div className={`rounded-md p-3 w-full relative 
                        ${action ? "border-2 border-[#00a4f8]" : "border border-gray-800"}`}>
                            {
                                (method == "Google Meet") ? 
                                
                                <div className="flex gap-3 relative">
                                    <Image className='w-6 object-contain' alt='meet icon' src={meetlogo}/>
                                    <p className='text-lg font-medium'>Google Meet</p>
                                    <span onClick={() => setMethod(null)} className='absolute right-1 top-1 text-lg cursor-pointer'><FaTimes/></span>
                                </div>
                                
                                :(method == "In Person") ?                                    
                                
                                <div className="flex gap-3 relative">
                                    <Image className='w-6 object-contain rounded-full' alt='meet icon' src={locationLogo}/>
                                    <p className='text-lg font-medium'>In-person Meeting</p>
                                    <span onClick={() => setMethod(null)} className='absolute right-0 top-1 text-lg cursor-pointer'><FaTimes/></span>
                                </div>

                                : <div onClick={() => setAction(!action)} className="cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <p>Select a Method</p>
                                        {
                                            action ? <FaAngleUp className='text-xl'/> : <FaAngleDown className='text-xl'/>
                                        }
                                    </div>
                                    {
                                        action && <div className="">
                                            <div onClick={() => setMethod('Google Meet')} className="flex gap-3 border-y-2 border-[#00a4f8] my-2 py-2">
                                                <Image className='w-6 object-contain' alt='meet icon' src={meetlogo}/>
                                                <p className='text-lg font-medium'>Google Meet</p>
                                            </div>
                                            <div onClick={() => setMethod('In Person')} className="flex gap-3">
                                                <Image className='w-6 object-contain' alt='meet icon' src={locationLogo}/>
                                                <p className='text-lg font-medium'>In-person Meeting</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    
                        <label className='text-lg font-semibold mb-3 mt-8' htmlFor='description'>Description:</label>
                        <textarea placeholder='Write your schedule details....' id='description' className='input_field min-h-[200px] resize-none' {...register("description")}></textarea>

                        <label className='text-lg font-semibold mb-3 mt-8' htmlFor='duration'>Duration:*</label>
                        <select id='duration' className='input_field' {...register("duration")}>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                            <option value="60">60</option>
                        </select>

                        <label className='text-lg font-semibold mb-3 mt-8'>Date Range:*</label>
                        <div className={`rounded-md p-3 w-full relative 
                        ${action ? "border-2 border-[#00a4f8]" : "border border-gray-800"}`}>
                            {
                                (dateRange == "Google Meet") ? 
                                
                                <div className="flex gap-3 relative">
                                    <p className='text-lg font-medium'>Indefinitely into the future</p>
                                    <span onClick={() => setDateRange(null)} className='absolute right-1 top-1 text-lg cursor-pointer'><FaTimes/></span>
                                </div>
                                
                                :(dateRange == "In Person") ?                                    
                                
                                <div className="flex gap-3 relative">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={onChange}
                                            startDate={startDate}
                                            endDate={endDate}
                                            selectsRange
                                            withPortal
                                            />
                                    <span onClick={clearDateRange} className='absolute right-1 top-1 text-lg cursor-pointer'><FaTimes/></span>
                                </div>

                                : <div onClick={() => setAction(!action)} className="cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <p> Date Range</p>
                                        {
                                            action ? <FaAngleUp className='text-xl'/> : <FaAngleDown className='text-xl'/>
                                        }
                                    </div>
                                    {
                                        action && <div className="">
                                            <div onClick={() => setDateRange('Google Meet')} className="flex gap-3 border-y-2 border-[#00a4f8] my-2 py-2">
                                                <p className='text-lg font-medium'>Indefinitely into the future</p>
                                            </div>
                                            <div onClick={() => setDateRange('In Person')} className="flex gap-3">
                                                <p className='text-lg font-medium'>Select a date range</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>

                        <label className='text-lg font-semibold mb-3 mt-8' htmlFor='eventLink'>Event Link:*</label>
                        <label className='font-medium my-2' htmlFor='eventLink'>http://localhost:3000/user</label>
                        <div className="input_field flex gap-1 overflow-hidden">
                        <label className='font-medium my-2' htmlFor='eventLink'>/jmjubaer/</label>
                            <input placeholder='Link path...' required className='outline-none' id='eventLink' {...register("eventLink")} />
                        </div>  
                    </div>

                    <div className="text-right p-3 border-t">
                        <input className='bg-[#465AF7] py-2 px-4 rounded-full cursor-pointer text-white' type="submit" value={"Create Event"}/>
                    </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default page;