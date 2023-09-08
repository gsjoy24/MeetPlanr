"use client"
import axios from 'axios';
import React, { useState } from 'react';
import {  Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ReportPage = () => {
  
  const { control, handleSubmit, formState: { errors }, register } = useForm();
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const onSubmit = async(data) => {
    if(selectedSubject){
      const subject = selectedSubject ==="others" ? data?.otherSubject : selectedSubject;
      const report = {
        name: data.name,
        email: data.email,
        phone: data.mobile,
        description: data.description,
        subject
      }
      console.log(report);
      const response = await axios.post('/api/report',{...report})
      if(response?.data?.insertedId){
        Swal.fire({
          icon: 'success',
          title: 'Reported successf!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }else{
      alert('Please select a Issue subject')
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-4   rounded-md">
        <h2 className="text-2xl text-center  font-semibold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="name">
              Name
            </label>
            <Controller
              name="name"
              control={control}                  
              render={({ field }) => (
                <input
                {...field}
                  placeholder="Your Name"
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
              )}
              rules={{ required: 'Name is required' }}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-thin mb-2 " htmlFor="email">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Email"
                />
              )}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="mobile">
              Mobile Number
            </label>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Mobile Number"
                />
              )}
              rules={{ required: 'Mobile number is required' }}
            />
            {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
          </div>
          <div className="mb-4">
      <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="subject">
        Issue Subject
      </label>
      <select
        name="subject"
        value={selectedSubject}
        onChange={handleSubjectChange}
        className={`w-full p-2 border rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">Select Subject</option>
        <option value="authentication">Authentication</option>
        <option value="scheduling">Scheduling</option>
        <option value="others">Others</option>
      </select>
      {!selectedSubject && <span className="text-red-500 text-sm">Issue Subject is required</span>}
      {selectedSubject === 'others' && (
        <input
          type="text"
          className={`w-full p-2 mt-2 border rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Specify the subject"
          {...register('otherSubject', { required: 'Other subject is required' })}
        />
      )}
    </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="description">
              Issue Description
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows="4"
                  className={`w-full p-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Please provide details about the issue"
                />
              )}
              rules={{ required: 'Issue description is required' }}
            />
            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#465AF7] hover:bg-sky-950 duration-200 text-white p-2 rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;
