'use client';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import axios from 'axios';
import Lottie from 'lottie-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import animation from '@/assets/payment_success.json';
import Container from '@/components/container';
import Button from '@/common/Button';
import Link from 'next/link';
const SuccessPage = () => {
	const { price } = useParams();
	const currentUser = UseGetCurrentUser();
	const plan = price == 15 ? 'Standard' : price == 25 ? 'Premium' : 'Basic';
	const router = useRouter();
	useEffect(() => {
		(async () => {
			if (currentUser) {
				const userResponse = await axios.put(`/api/users/${currentUser?.username}`, { plan });
				if (userResponse.data) {
					router.push('/');
				}
			}
		})();
	}, [currentUser, plan]);
	return (
		<div className="bg-slate-100 w-full min-h-screen flex items-center justify-center">
			<Container>
				<div className="bg-white md:w-1/2 max-w-[500px] h-fit mx-auto relative rounded-lg shadow-lg">
					<div className="w-[350px] md:w-[450px] mx-auto absolute sm:bottom-[180px] md:bottom-40 bottom-48 left-1/2 -translate-x-1/2">
						<Lottie animationData={animation} loop={false} />
					</div>
					<div className="pt-20 text-center p-5">
						<h2 className="text-4xl font-bold my-4 text-gray-400">Awesome!</h2>
						<p className="text-lg font-medium">Your Plan has been upgrade</p>
						<p className="text-lg font-medium mb-7">Enjoy our more features</p>
						<Button>
							<Link href={'/'}>Go Home</Link>
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default SuccessPage;
