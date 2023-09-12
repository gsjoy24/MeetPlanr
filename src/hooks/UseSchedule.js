'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseSchedule = () => {
	const [allSchedule, setAllSchedule] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/scheduling`);
				setAllSchedule(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, []);
	return allSchedule;
};

export default UseSchedule;
