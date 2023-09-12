'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseBlogs = () => {
	const [allBlogs, setAllBlogs] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/blog`);
				setAllBlogs(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, []);
	return allBlogs;
};

export default UseBlogs;
