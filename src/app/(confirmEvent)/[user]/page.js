import Image from 'next/image';
import React from 'react';
import image from '@/assets/review-image/img1.jpg'
const page = () => {
	return (
		<div className='w-4/5 mx-auto border-2 shadow-xl my-10 p-10'>
			<div className="text-center">
				<Image src={image} className='w-28 mx-auto h-28 rounded-full object-cover' alt='User Profile image'></Image>
				<h2 className='text-3xl font-semibold mt-5'>Md Jubaer islam</h2>
			</div>
		</div>
	);
};

export default page;