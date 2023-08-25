'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { UserAuth } from '@/providers/AuthProvider';
import Container from '@/components/container';

const CreateEventPage = () => {
	const [eventDetails, setEventDetails] = useState({
		summary: 'Sample Event',
		description: 'A sample event description',
		startDateTime: '2023-08-25T10:00',
		endDateTime: '2023-08-25T12:00'
	});

	const { user } = UserAuth();

	const handleCreateEvent = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/create-event', {
				uid: user.uid,
				eventDetails
			});

			console.log(response.data.message);
		} catch (error) {
			console.error('Error:', error.message);
		}
	};

	return (
		<Container>
			<div className="max-w-md mx-auto mt-32 p-4 bg-white rounded shadow">
				<h1 className="text-2xl font-bold mb-4">Create Event</h1>
				<form onSubmit={handleCreateEvent}>
					<input
						type="text"
						placeholder="Event Title"
						className="block w-full p-2 border rounded mb-2"
						value={eventDetails.summary}
						onChange={(e) => setEventDetails({ ...eventDetails, summary: e.target.value })}
						required
					/>
					<textarea
						placeholder="Event Description"
						className="block w-full p-2 border rounded mb-2"
						value={eventDetails.description}
						onChange={(e) => setEventDetails({ ...eventDetails, description: e.target.value })}
						required
					/>
					<input
						type="datetime-local"
						className="block w-full p-2 border rounded mb-2"
						value={eventDetails.startDateTime}
						onChange={(e) => setEventDetails({ ...eventDetails, startDateTime: e.target.value })}
						required
					/>
					<input
						type="datetime-local"
						className="block w-full p-2 border rounded mb-2"
						value={eventDetails.endDateTime}
						onChange={(e) => setEventDetails({ ...eventDetails, endDateTime: e.target.value })}
						required
					/>
					<button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
						Create Event
					</button>
				</form>
			</div>
		</Container>
	);
};

export default CreateEventPage;
