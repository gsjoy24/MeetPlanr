'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseReviews = () => {
	const [reviews, setReviews] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/reviews`);
				setReviews(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, []);
	return reviews;
};

export default UseReviews;
