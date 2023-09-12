'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAllUsers = () => {
	const [allUsers, setAllUsers] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/users`);
				setAllUsers(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, []);
	return allUsers;
};

export default UseAllUsers;
