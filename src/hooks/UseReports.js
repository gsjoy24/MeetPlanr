'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseReports = () => {
	const [allReports, setAllReports] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/report`);
				setAllReports(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [refetch]);
	return [allReports, refetch, setRefetch];
};

export default UseReports;
