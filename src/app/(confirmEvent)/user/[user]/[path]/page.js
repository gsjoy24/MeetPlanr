'use client';
import Button from '@/common/Button';
import Container from '@/components/container';
import LoadingSpinner from '@/shareComponents/LoadingSpinner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaRegClock, FaTimesCircle, FaVideo } from 'react-icons/fa';
import Swal from 'sweetalert2';

const EventSchedule = ({ params }) => {
	const { register, handleSubmit, reset } = useForm();
	const [scheduleInfo, setScheduleInfo] = useState({});
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const { timeRange, path, hostName, method, eventName, hostEmail, duration } = scheduleInfo || {};
	const { startDate, endDate } = timeRange || {};
	const [scheduleDate, setScheduleDate] = useState(null);
	const minDate = new Date(startDate);
	const maxDate = endDate ? new Date(endDate) : null;
	useEffect(() => {
		(async () => {
			const res = await axios(`/api/scheduling/${params.path}`);
			const data = res?.data;
			if (data) {
				setLoading(false);
			}
			{
				setLoading(false);
			}
			setScheduleInfo(data);
		})();
	}, [params]);
	const onSubmit = async (data) => {
		const { inviteeEmail, inviteeName } = data;
		const res = await axios.put(`/api/scheduling/${path}`, { inviteeEmail, inviteeName, scheduleDate });
		if (res?.data?.modifiedCount > 0) {
			Swal.fire({
				icon: 'success',
				title: 'Event confirm successfully',
				text: 'More information sent to your email.'
			});
			setShowModal(false);
			reset();
			setConfirm(true);
			const inviteeEmailSend = await axios.post(`/api/sendmailinvitee`, {
				inviteeName,
				inviteeEmail,
				eventName,
				hostEmail,
				scheduleDate,
				method
			});
			const hostEmailSend = axios.post(`/api/sendmailhost`, {
				inviteeName,
				inviteeEmail,
				eventName,
				hostEmail,
				scheduleDate,
				method,
				hostName
			});
		}
	};

	if (loading) {
		return (
			<LoadingSpinner/>
		);
	}

	if (scheduleInfo) {
		if (scheduleInfo.confirm) {
			return (
				<Container>
					<p className="text-slate-500 py-40 mt-20 text-5xl font-bold text-center">This Event already Confirmed...</p>
				</Container>
			);
		}
	} else {
		return (
			<Container>
				<p className="py-40 mt-20 text-5xl text-center">No Schedule available in this link</p>
			</Container>
		);
	}
	return (
		<Container>
			<div className="pt-28 my-10">
				<div className="flex items-center justify-center gap-5">
					<div className="w-[40%] border rounded-md p-5">
						<h3 className="text-lg font-bold">Invitee:</h3>
						<p className="mt-1 text-xl font-medium">{hostName}</p>
						<h3 className="mt-4 text-lg font-bold">Meeting Name:</h3>
						<p className="mt-1 text-3xl font-semibold">{eventName}</p>
						<h3 className="mt-4 text-lg font-bold">Meeting duration:</h3>
						<div className="flex items-center gap-2 my-3">
							<FaRegClock className="text-2xl font-medium" />
							<span className="text-lg font-medium">{duration} minutes</span>
						</div>
						<h3 className="mt-4 text-lg font-bold">location:</h3>
						<div className=" mt-2">
							{method == 'Google Meet' ? (
								<div className="flex items-center gap-2">
									<FaVideo className="text-2xl font-medium" />
									<span className="text-lg font-medium">Google Meet</span>
								</div>
							) : method == 'In Person' ? (
								<div className="flex items-center gap-2">
									<FaMapMarkerAlt className="text-2xl font-medium" />
									<span className="text-lg font-medium">In Person</span>
								</div>
							) : (
								<p>no location added</p>
							)}
						</div>
						<p className="mt-2 font-bold text-red-500">If not select any time it automatic select 12:00 AM.</p>
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
				{scheduleDate && (
					<div onClick={() => setShowModal(true)} className="w-fit mx-auto mt-5">
						<Button>Confirm</Button>
					</div>
				)}
			</div>
			{/*===================== Model =================== */}
			{confirm && (
				<div className="bg-slate-800 bg-opacity-30 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen">
					<p className="text_shadow text-5xl font-bold text-center">Confirmed</p>
				</div>
			)}
			{showModal && (
				<div className="bg-slate-800 bg-opacity-40 fixed top-0 left-0 z-40 flex items-center justify-center w-full h-screen">
					<div className="w-fit h-fit relative p-10 text-center bg-white rounded-lg">
						<h2 className=" text-3xl font-semibold">Confirm Schedule</h2>

						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								placeholder="Enter your Name....."
								className="input_field my-5"
								required
								{...register('inviteeName')}
							/>

							<input
								placeholder="Enter your Email...."
								className="input_field my-5"
								required
								type="email"
								{...register('inviteeEmail')}
							/>

							<input type="submit" value={'Confirm'} className="mp_btn mt-6" />
						</form>

						<button
							onClick={() => setShowModal(false)}
							className="-right-2 -top-2 absolute z-50 text-3xl text-red-600 bg-white rounded-full"
						>
							<FaTimesCircle className="" />
						</button>
					</div>
				</div>
			)}
		</Container>
	);
};

export default EventSchedule;