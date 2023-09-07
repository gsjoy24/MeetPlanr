"use client"
import Image from 'next/image';
import customer from '../../../assets/Untitled-design-6.jpg';
import mobile from '../../../assets/phone.webp';
import ios from '../../../assets/icon-apple.png';
import android from '../../../assets/icon-android.png';
import people from '../../../assets//setmore-people-community.webp';

import Link from 'next/link';
import Container from '@/components/container';
import Button from '@/common/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '@/components/BlogCard';

const Page = () => {
	const [blogs,setBlogs] = useState([])
	useEffect(() => {
		( async() => {
			const data =await axios('/api/blog');
			setBlogs(data.data);
		}
		)()
	})
	return (
		<section>
			<Container>
				<div className="lg:flex lg:p-8 items-center justify-center p-4 space-y-3">
					<div className="md:pr-8 flex flex-col items-center">
					<Image className="w-full" src={customer} alt="customer" width={500} height={500} />

					</div>
					<div className="lg:pl-8 flex flex-col">
						<p className="mb-4 text-sm font-thin">FEATURES — 5 MIN READ</p>
						<h1 className="mb-4 text-2xl font-bold">
							The perfect fit: Choosing the <br></br> best scheduling app for your <br></br> small business.
						</h1>
						<p>
							Streamlining your scheduling process is crucial in helping small <br></br> businesses find time to serve
							more customers. Managing appointments <br></br> efficiently, enhancing…
						</p>
						<Link className="hover:underline mt-2 text-blue-500" href="/your-target-page">
							Read article
						</Link>
					</div>
				</div>

				{/* card section  */}

				<div className="md:grid-cols-2 lg:grid-cols-3 mt-14 grid grid-cols-1 gap-12">
					{
						blogs.map(blog => <BlogCard blog={blog} key={blog?._id}></BlogCard>)
					}
				</div>

				<div className="flex justify-center m-12">
					<Button>Learn more</Button>
				</div>

				<div className="md:flex-row-reverse md:mb-0 flex flex-col items-center justify-center gap-5 mb-8">
					<div className="flex flex-col items-center">
						<Image src={mobile} alt="" width={500} height={500} />
					</div>
					<div className="">
						<h1 className="mb-4 text-2xl font-bold">Get the freedom to book Anywhere.</h1>
						<p>
							For teams on-the-move, Setmore Free comes in a pocket-<br></br>friendly edition for your Android or iOS
							device. Your<br></br>appointments are just a tap away.
						</p>
						<div className="flex mt-5">
							<button className="hover:bg-slate-300 hover:text-white flex items-center justify-center px-4 py-2 mr-2 font-thin text-blue-500 border border-blue-500 rounded">
								<Image src={ios} alt="iOS Icon" className="w-4 h-5 mb-1 mr-2" /> iOS
							</button>
							<button className="hover:bg-slate-300 hover:text-white flex items-center justify-center px-4 py-2 font-thin text-blue-500 border border-blue-500 rounded">
								<Image src={android} alt="Android Icon" className="w-4 h-5 mr-2" /> Android
							</button>
						</div>
					</div>
				</div>

				<div className=" flex items-center justify-center">
					<Image width="1440" height="280" src={people} alt="" loading="lazy" />
				</div>
			</Container>
			<div className="blue-section h-96 flex flex-col items-center justify-center w-full mb-10 text-white bg-blue-500">
				<p className="md:text-4xl max-w-xl px-2 mb-8 text-2xl font-bold leading-tight text-center">
					Make the magic happen, we’ll make sure it happens on time.
				</p>
				<div className="mt-4">
					<button className=" hover:bg-slate-300 hover: flex items-center justify-center px-4 py-2 font-thin text-blue-500 bg-white rounded">
						Sign Up
					</button>
				</div>
			</div>
		</section>
	);
};

export default Page;
