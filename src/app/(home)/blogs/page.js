'use client';
import Image from 'next/image';
import customer from '../../../assets/Untitled-design-6.jpg';
import mobile from '../../../assets/phone.webp';
import ios from '../../../assets/icon-apple.png';
import android from '../../../assets/icon-android.png';
import people from '../../../assets//setmore-people-community.webp';
import Link from 'next/link';
import Container from '@/components/container';
import Button from '@/common/Button';
import BlogCard from '@/components/BlogCard';
import UseBlogs from '@/hooks/UseBlogs';
import Loading from '@/app/loading';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Page = () => {
	const [allBlogs] = UseBlogs();
	const [showAll, setShowAll] = useState(false);
	const [allBlog, setAllBlog] = useState(null);
	let firstBlog = {};
	let restBlogs = [];
	let BlogContent;

	useEffect(() => {
		if (showAll) {
			setAllBlog(allBlogs);
		} else {
			setAllBlog(allBlogs?.slice(0, 7));
		}
	}, [showAll, allBlogs]);

	const truncateContent = (text = ' ') => {
		const words = text.split(' ') || [];
		if (words.length > 17) {
			return words.slice(0, 17).join(' ') + '...';
		} else {
			return text;
		}
	};

	if (Array.isArray(allBlog)) {
		[firstBlog, ...restBlogs] = allBlog;
		BlogContent = truncateContent(firstBlog?.content);
	}

	return (
		<section>
			<Container>
				{allBlog && Array.isArray(allBlog) ? (
					<>
						<div className="lg:flex lg:p-8 items-center justify-center p-4 space-y-3">
							<div className="md:pr-8 flex flex-col items-center">
								<Image
									className="w-full min-w-[340px]"
									src={firstBlog?.image ? firstBlog.image : 'https://i.ibb.co/Ytbhzg4/blank.jpg'}
									alt="customer"
									width={500}
									height={500}
								/>
							</div>
							<div className="lg:pl-8 flex flex-col">
								<p className="mb-4 text-sm font-thin">{firstBlog?.title && firstBlog?.title}</p>
								<h1 className="mb-4 text-2xl font-bold">{firstBlog?.title ? firstBlog?.title : 'loading'}</h1>
								<p>{BlogContent ? BlogContent : 'loading'}</p>

								<span className="inline-block w-36 mt-3">
									<Link href={`/blogs/${firstBlog?._id}`} className="group flex items-center gap-2 text-blue-600">
										<span>Read more</span> <AiOutlineArrowRight className="group-hover:translate-x-1 duration-200" />
									</Link>
								</span>
							</div>
						</div>
						{/* card section  */}
						<div className="md:grid-cols-2 lg:grid-cols-3 mt-14 grid grid-cols-1 gap-12">
							{restBlogs ? (
								restBlogs.map((blog) => (
									<BlogCard blog={blog} key={blog?._id} truncateContent={truncateContent}></BlogCard>
								))
							) : (
								<Loading />
							)}
						</div>

						<div onClick={() => setShowAll(!showAll)} className="flex justify-center m-12">
							<Button>{showAll ? 'Show less' : 'Show more'}</Button>
						</div>
					</>
				) : (
					<Loading />
				)}

				<div className="md:flex-row-reverse md:mb-0 flex flex-col items-center justify-center gap-5 mb-8">
					<div className="flex flex-col items-center">
						<Image src={mobile} alt="" width={500} height={500} />
					</div>
					<div className="">
						<h1 className="mb-4 text-2xl font-bold">Get the freedom to book Anywhere.</h1>
						<p>
							For teams on-the-move, Set more Free comes in a pocket-<br></br>friendly edition for your Android or iOS
							device. Your<br></br>appointments are just a tap away.
						</p>
						<div className="flex mt-5">
							<button
								title="Upcoming"
								className="hover:bg-slate-200 duration-200 flex items-center justify-center px-4 py-2 mr-2 font-thin text-blue-500 border border-blue-500 rounded"
							>
								<Image src={ios} alt="iOS Icon" className="w-4 h-5 mb-1 mr-2" /> iOS
							</button>
							<Link
								target="_blank"
								title="Google drive link"
								href={'https://drive.google.com/file/d/1zGCnyTxGIQctuTTpnKeU-3dhw0rhyZZC/view?usp=drivesdk'}
								className="hover:bg-slate-200 duration-200 flex items-center justify-center px-4 py-2 font-thin text-blue-500 border border-blue-500 rounded"
							>
								<Image src={android} alt="Android Icon" className="w-4 h-5 mr-2" /> Android
							</Link>
						</div>
					</div>
				</div>

				<div className=" flex items-center justify-center">
					<Image width="1440" height="280" src={people} alt="" loading="lazy" />
				</div>
			</Container>
			<div className="blue-section h-64 flex flex-col items-center justify-center w-full mb-10 text-white bg-blue-500">
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
