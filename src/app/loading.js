'use client';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json';

const Loading = () => {
	return (
		<div className="w-full h-[100vh] mx-auto overflow-hidden flex justify-center items-center">
			<div className="max-w-sm">
				<Lottie animationData={loadingAnimation} />
			</div>
		</div>
	);
};

export default Loading;
