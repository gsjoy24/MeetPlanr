'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RedirectHome = () => {
	const router = useRouter();
	useEffect(() => {
		// Redirect to the home route after a delay (e.g., 2 seconds)
		const redirectTimeout = setTimeout(() => {
			router.push('/');
		}, 2000);

		return () => {
			clearTimeout(redirectTimeout);
		};
	}, []);

	return (
		<div className="flex justify-center items-center flex-col min-h-[500px]">
			<p className="text-xl text-red-500">No route here!</p>
			<p>Redirecting to the home page...</p>
		</div>
	);
};

export default RedirectHome;
