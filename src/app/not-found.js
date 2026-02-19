'use client';
import Button from '@/common/Button';
import Link from 'next/link';

const Error = () => {
	return (
		<div className="w-full bg-[#F2F2F2] h-[100vh] flex justify-center items-center">
			<div className="max-w-[700px] flex flex-col justify-center items-center gap-4">
				<h1 className="text-6xl font-bold text-gray-800">404</h1>
				<p className="text-xl text-gray-600">Page Not Found</p>
				<Button>
					<Link href="/">Back to home</Link>
				</Button>
			</div>
		</div>
	);
};

export default Error;
