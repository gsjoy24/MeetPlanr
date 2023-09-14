'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAllUsers = () => {
	const [allUsers, setAllUsers] = useState(null);
	const [refetch, setRefetch] = useState(false);

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
	}, [refetch]);

	return [allUsers, refetch, setRefetch];
};

export default UseAllUsers;
