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

		// Clear the timeout if the component unmounts before the redirection
		return () => {
			clearTimeout(redirectTimeout);
		};
	}, []);

	return (
		<div className="flex justify-center items-center flex-col min-h-[500px]">
			<p>Redirecting to the home page...</p>
			<p>No route here!</p>
			{/* You can add a loading spinner or other content here */}
		</div>
	);
};

export default RedirectHome;
