'use client';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json';

const Loading = () => {
	return (
		<div className="max-w-sm mx-auto overflow-hidden">
			<Lottie animationData={loadingAnimation} />
		</div>
	);
};

export default Loading;
