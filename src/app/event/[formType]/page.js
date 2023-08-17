/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Button from '@/common/Button';
import Container from '@/components/container';
import React from 'react';
import { useForm } from "react-hook-form"
import { FaMeetup } from 'react-icons/fa';
const page = ({params}) => {
    const {register,handleSubmit,} = useForm()
    console.log(params);
    const onSubmit = (data) => console.log(data)
    return (
        <Container>
            <div className="">
                <div className=" py-5">
                    <Button>Back</Button>
                </div>
    {/*================= Event Form ====================== =*/}
                <div className='w-4/5 border-2 rounded-md shadow-md mx-auto p-5'>
                    <h2 className='text-3xl font-medium text-center w-full'>Add {params.formType} Event Type</h2>

                    <form className='flex flex-col w-4/5 mx-auto mt-8' onSubmit={handleSubmit(onSubmit)}>

                        <label className='text-lg font-semibold mb-3' htmlFor='eventName'>Event Name:*</label>
                        <input placeholder='Event Name...' required className='input_field' id='eventName' {...register("eventName")} />         

                        <label className='text-lg font-semibold mb-3 mt-5' htmlFor='eventName'>Event Method:*</label> 
                        <select id='eventMethod' className='input_field' {...register("eventMethod")}>
                            <option value="Google Meet">Google Meet</option>
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
                                <label className='text-lg font-semibold mb-3' htmlFor='eventName'>Event Name:*</label>
                                <input className='input_field' id='eventName' {...register("eventName")} type='date' required/> 
                            </div>
                            <div className="">
                                <label className='text-lg font-semibold mb-3' htmlFor='eventName'>Event Name:*</label>
                                <input className='input_field' id='eventName' {...register("eventName")} type='time' required/> 
                            </div>
                        </div>

                        <input className='ft_btn' type="submit" />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default page;