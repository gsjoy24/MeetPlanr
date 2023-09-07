'use client';
import Lottie from 'lottie-react';
import errorImg from '../assets/error.json';
import Button from '@/common/Button';
import Link from 'next/link';

const Error = () => {
	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			<div className="max-w-[700px] mx-auto flex flex-col justify-center items-center gap-4">
				<Lottie animationData={errorImg}></Lottie>
				<Button>
					<Link href="/">Back to home</Link>
				</Button>
			</div>
		</div>
	);
};

export default Error;
