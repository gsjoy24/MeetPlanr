/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Button from '@/common/Button';
import Container from '@/components/container';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { FaAngleDown, FaAngleLeft, FaAngleUp } from 'react-icons/fa';
import Swal from 'sweetalert2';
const page = ({params}) => {
    const {register,handleSubmit} = useForm()
    const router = useRouter();
    const onSubmit = async (data) => {
        const res = await fetch('http://localhost:5000/schedule',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const postResponse = await res.json();
        if(postResponse.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Schedule created successfully',
                showConfirmButton: false,
                timer: 1500
              })
              router.push('/solutions')
        }
    }
    
    return (
        <Container>
            <div className="my-8">
                <div className="my-5">
                    <button onClick={()=> router.back()} className='border border-[#465AF7] text-[#465AF7] w-fit h-fit mx-auto px-5 py-4 rounded-3xl hover:bg-[#465AF7] hover:text-[#fff] cursor-pointer transition-all duration-500'><FaAngleLeft className='inline mr-1'/> Back</button>
                </div>
    {/*================= Event Form ====================== =*/}
                <div className='w-4/5 border-2 rounded-md shadow-md mx-auto p-5'>
                    {/* <h2 className='text-3xl font-medium text-center w-full'>Add {params.formType} Event Type</h2> */}
                    <h2 className='text-3xl font-medium text-center w-full'>Add One-on-One Event Type</h2>

                    <form className='flex flex-col w-4/5 mx-auto mt-8' onSubmit={handleSubmit(onSubmit)}>

                        <label className='text-lg font-semibold mb-3' htmlFor='eventName'>Event Name:*</label>
                        <input placeholder='Event Name...' required className='input_field' id='eventName' {...register("eventName")} />         

                        <label className='text-lg font-semibold mb-3 mt-5' htmlFor='eventMethod'>Event Method:*</label> 
                        <select id='eventMethod' className='input_field' {...register("eventMethod")}>
                            <option value="Google Meet"> Google Meet</option>
                            <option value="In location">In Person Meeting</option>
                        </select>
                        
                        <label className='text-lg font-semibold mb-3 mt-8' htmlFor='description'>Description:</label>
                        <textarea placeholder='Write your schedule details....' id='description' className='input_field min-h-[200px] resize-none' {...register("description")}></textarea>

                        <label className='text-lg font-semibold mb-3 mt-8' htmlFor='duration'>Duration:*</label>
                        <select id='duration' className='input_field' {...register("duration")}>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                            <option value="60">60</option>
                        </select>

                        <div className="grid grid-cols-2 gap-5 mt-8">
                            <div className="">
                                <label className='text-lg font-semibold mb-3' htmlFor='eventDate'>Event Date:*</label>
                                <input className='input_field' id='eventDate' {...register("eventDate")} type='date' required/> 
                            </div>
                            <div className="">
                                <label className='text-lg font-semibold mb-3' htmlFor='eventTime'>Event Time:*</label>
                                <input className='input_field' id='eventTime' {...register("eventTime")} type='time' required/> 
                            </div>
                        </div>
                        <input className='mp_btn mt-8' type="submit" />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default page;