'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ReportPage = () => {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: { errors },
		register,
		reset
	} = useForm();
	const [selectedSubject, setSelectedSubject] = useState('');

	const handleSubjectChange = (e) => {
		setSelectedSubject(e.target.value);
	};

	const onSubmit = async (data) => {
		const date = new Date();
		const timestamp = date.toISOString().replace('Z', '+00:00');
		if (selectedSubject) {
			const subject = selectedSubject === 'others' ? data?.otherSubject : selectedSubject;
			const report = {
				name: data.name,
				email: data.email,
				phone: data.mobile,
				description: data.description,
				subject
			};
			const response = await axios.post('/api/report', { ...report, timestamp });
			if (response?.data?.insertedId) {
				reset();
				router.push('/')
				Swal.fire({
					icon: 'success',
					title: 'Reported success!',
					showConfirmButton: false,
					timer: 1500
				});
			}
		} else {
			alert('Please select a Issue subject!');
		}
	};

	return (
		<div className=" flex items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-4 rounded-md">
				<h2 className="mb-6 text-2xl font-semibold text-center">Contact Us</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-thin text-gray-700" htmlFor="name">
							Name
						</label>
						<Controller
							name="name"
							control={control}
							render={({ field }) => <input {...field} placeholder="Your Name" type="text" className={`mp_input`} />}
							rules={{ required: 'Name is required' }}
						/>
						{errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
					</div>
					<div className="mb-4">
						<label className=" block mb-2 text-sm font-thin text-gray-700" htmlFor="email">
							Email
						</label>
						<Controller
							name="email"
							control={control}
							render={({ field }) => <input {...field} type="text" className={`mp_input`} placeholder="Your Email" />}
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address'
								}
							}}
						/>
						{errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
					</div>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-thin text-gray-700" htmlFor="mobile">
							Mobile Number (optional)
						</label>
						<Controller
							name="mobile"
							control={control}
							render={({ field }) => (
								<input {...field} type="text" className={`mp_input`} placeholder="Your Mobile Number" />
							)}
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-thin text-gray-700" htmlFor="subject">
							Issue Subject
						</label>
						<select name="subject" value={selectedSubject} onChange={handleSubjectChange} className={`mp_input`}>
							<option value="">Select Subject</option>
							<option value="authentication">Authentication</option>
							<option value="scheduling">Scheduling</option>
							<option value="others">Others</option>
						</select>
						{!selectedSubject && <span className="text-sm text-red-500">Issue Subject is required</span>}
						{selectedSubject === 'others' && (
							<input
								type="text"
								className={`mp_input`}
								placeholder="Specify the subject"
								{...register('otherSubject', { required: 'Other subject is required' })}
							/>
						)}
					</div>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-thin text-gray-700" htmlFor="description">
							Issue Description
						</label>
						<Controller
							name="description"
							control={control}
							render={({ field }) => (
								<textarea
									{...field}
									rows="4"
									className={`mp_input min-h-[130px]`}
									placeholder="Please provide details about the issue"
								/>
							)}
							rules={{ required: 'Issue description is required' }}
						/>
						{errors.description && <span className="text-sm text-red-500">{errors.description.message}</span>}
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
