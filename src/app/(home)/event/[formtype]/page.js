/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Button from '@/common/Button';
import Container from '@/components/container';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleDown, FaAngleLeft, FaAngleUp, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import InputOption from '@/components/InputOption';
import LoadingSpinner from '@/shareComponents/LoadingSpinner';

const EventPage = ({ params }) => {
	const { register, handleSubmit, reset, watch, setValue } = useForm();
	const [method, setMethod] = useState(null);
	const [dateRange, setDateRange] = useState(null);
	const [action, setAction] = useState(false);
	const eventType = params?.formtype;
	const router = useRouter();
	const user = UseGetCurrentUser();

// conditional Placeholder text for Method info=====================
	const placeholderText =
		method === 'Google Meet'
			? 'Enter google meet link ...'
			: method === 'Phone Call'
			? 'Enter phone number....'
			: method === 'In Person'
			? 'Enter location name..'
			: 'enter method info...';

	const [scheduleDate, setScheduleDate] = useState(null);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);
	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};
	const timeRange = { startDate, endDate };
	const clearDateRange = () => {
		setDateRange(null);
		setStartDate(new Date());
		setEndDate(null);
	};
	const livePath = watch('eventName') ? watch('eventName')?.replace(/\s+/g, '-') : '';
	const liveDuration = watch('duration');

// Create event function===================
	const onSubmit = async (data) => {
		if (method) {
			const { eventName, description, duration, eventLink, methodInfo } = data;
			const hostEmail = user?.email;
			const hostName = user?.name;
			const random = Math.round(Math.random() * 1000000);
			const EventLink = eventLink?.replace(/\s+/g, '-') || livePath;
			const path = EventLink.toLowerCase() + '-' + random;
			const scheduleLink = `https://meet-planr.vercel.app/user/${user?.username}/${path}`;
		// Schedule information============
			const schedule = {
				eventName,
				description,
				duration,
				method,
				scheduleLink,
				hostEmail,
				hostName,
				timeRange,
				path,
				username: user?.username,
				methodInfo,
				scheduleDate,
				eventType: eventType == 'hostControlGroup' ? 'Group' : 'Single',
				timeStamp: new Date(),
				inviteeInfo: []
			};

			try {
				const response = await axios.post(`/api/scheduling`, { ...schedule });

				if (response.data.insertedId) {
					Swal.fire({
						icon: 'success',
						title: 'Schedule created successfully!',
						showConfirmButton: false,
						timer: 1500
					});
					router.push('/my-account');
					reset();
				}
			} catch (error) {
				console.error('Error submitting form:', error);
			}
		} else {
			alert('Please select a method!');
		}
	};
	// if(!user){
	//    return <LoadingSpinner></LoadingSpinner>
	// }
	return (
		<div>
			<Container>
				<div className="mt-24 my-8">
					<div className="my-5">
						<button
							onClick={() => router.back()}
							className="border border-[#465AF7] text-[#465AF7] w-fit h-fit mx-auto px-3 py-2 rounded-full hover:bg-[#e0e8fa] cursor-pointer transition-all duration-400"
						>
							<FaAngleLeft className="inline mr-1" /> Back
						</button>
					</div>

					{/*================= Event Form ====================== =*/}
					<div className="md:w-4/5 mx-auto border-2 border-[#d7e3f0] rounded-xl shadow-md">
					{/* Change able form title base on form type */}
						<h2 className="w-full py-5 text-3xl text-[#0B3558] font-medium text-center border-b">
							Add{' '}
							{eventType == 'oneOnOne'
								? 'One-on-One'
								: eventType == 'hostControlSingle'
								? 'Host control'
								: eventType == 'hostControlGroup'
								? 'Host control'
								: ''}{' '}
							Event Type{' '}
							{eventType == 'hostControlSingle' ? '(one-on-one)' : eventType == 'hostControlGroup' ? '(Group)' : ''}
						</h2>

						<form className="" onSubmit={handleSubmit(onSubmit)}>
							<div className="sm:mx-10 lg:w-1/2 flex flex-col mx-3 my-8">
								<label className="mb-3 text-[#3e5063]" htmlFor="eventName">
									Event Name:*
								</label>
								<input
									placeholder="Event Name..."
									required
									className="input_field"
									id="eventName"
									{...register('eventName')}
								/>

								<label className="mt-8 mb-3 text-[#3e5063]">Event Method:*</label>
								<InputOption setValue={setValue} method={method} setMethod={setMethod} />
								{method && (
									<input
										placeholder={placeholderText}
										type={method === 'Google Meet' ? 'url' : 'text'}
										required
										className="input_field mt-2"
										{...register('methodInfo')}
									/>
								)}

								<label className="mt-8 mb-3 text-[#3e5063]" htmlFor="description">
									Description:
								</label>
								<textarea
									placeholder="Write your schedule details...."
									id="description"
									className="input_field min-h-[200px] resize-none"
									{...register('description')}
								></textarea>

								<label className="mt-8 mb-3 text-[#3e5063]" htmlFor="duration">
									Duration:*
								</label>
								<select id="duration" className="input_field" {...register('duration')}>
									<option value="15">15</option>
									<option value="30">30</option>
									<option value="45">45</option>
									<option value="60">60</option>
								</select>

{/*=========== Conditionally select Date and date range ==============*/}
								{eventType === 'oneOnOne' ? (
									<>
										<label className="mt-8 mb-3 text-[#3e5063]">Date Range:*</label>

										<div className={`rounded-md p-3 w-full relative 
                              ${action ? 'border-2 border-[#00a4f8]' : 'border border-[#9ab2cc]'}`} >
					{/*============= select date range ==================*/}
											{dateRange === 'Select Range' ? (
												<div className="relative flex gap-3">
													<DatePicker
														selected={startDate}
														onChange={onChange}
														startDate={startDate}
														endDate={endDate}
														selectsRange
														withPortal
													/>
													<span onClick={clearDateRange} className="right-1 top-1 absolute text-lg cursor-pointer">
														<FaTimes />
													</span>
												</div>
											) : (
												<div onClick={() => setAction(!action)} className="cursor-pointer">
													<div className="flex items-center justify-between">
														<p className="text-lg font-medium">Indefinitely into the future</p>
														{action ? <FaAngleUp className="text-xl" /> : <FaAngleDown className="text-xl" />}
													</div>
													{action && (
														<div className="">
															<div
																onClick={() => setDateRange('Select Range')}
																className="flex gap-3 border-t-2 border-[#00a4f8] pt-2 mt-2"
															>
																<p className="text-lg font-medium">Select a date range</p>
															</div>
														</div>
													)}
												</div>
											)}
										</div>
									</>
								) : (
									<>
										<label className="mt-8 mb-3 text-[#3e5063]">Select Date/Time:*</label>
										<div className="input_field">
											<DatePicker
												selected={scheduleDate}
												showTimeSelect
												dateFormat="MMMM d, yyyy h:mm aa"
												onChange={(date) => setScheduleDate(date)}
												minDate={new Date()}
												placeholderText="Select a date and time"
												timeIntervals={liveDuration}
												withPortal
												required
											/>
										</div>
									</>
								)}

								<label className="mt-8 mb-1 text-[#3e5063]" htmlFor="eventLink">
									Event Link:*
								</label>
								<label className="my-2 text-[15px] text-[#768ba1]" htmlFor="eventLink">
									https://meet-planr.vercel.app/user
								</label>
								{/* show path name base on event name */}
								<div className="input_field flex gap-1 overflow-hidden">
									<label className="font-medium" htmlFor="eventLink">
										/{user ? user?.username : 'username364'}/
									</label>
									<input
										placeholder="Link path..."
										required
										defaultValue={livePath}
										className="outline-none w-full"
										id="eventLink"
										{...register('eventLink')}
									/>
								</div>
							</div>

							<div className="p-3 text-right border-t">
								<input
									className="border border-[#465AF7] py-2 px-4 rounded-full cursor-pointer text-[15px] text-[#465AF7] hover:text-white hover:border-sky-950 hover:bg-sky-950 duration-300"
									type="submit"
									value={'Create Event'}
								/>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default EventPage;
