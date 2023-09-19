'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/app/loading';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Container from '@/components/container';

const DetailsPage = ({ params }) => {
	const [blog, setBlog] = useState({});
	const [loading, setLoading] = useState(true);
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const [suggestedBlogs, setSuggestedBlogs] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = async (data) => {
		const timeStamp = new Date();
		const commentData = { comment: data?.commentText, timeStamp };
		const response = await axios.post(`/api/blogComment`, commentData);
	};

	useEffect(() => {
		async function fetchBlogData() {
			try {
				const response = await axios(`/api/blog/${params.id}`);
				if (response.data) {
					setBlog(response.data);
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchBlogData();

		async function fetchSuggestedBlogs() {
			try {
				const response = await axios.get('/api/blog');
				if (response.data) {
					const filteredBlogs = response.data.filter((suggestedBlog) => suggestedBlog.id !== params.id);
					setSuggestedBlogs(filteredBlogs);
				}
			} catch (error) {
				console.error('Error fetching suggested blogs:', error);
			}
		}

		fetchSuggestedBlogs();
	}, [params]);

	// useEffect(() => {
	// 	async function fetchSuggestedBlogs() {
	// 		try {
	// 			const response = await axios.get('/api/blog');
	// 			if (response.data) {
	// 				const filteredBlogs = response.data.filter((suggestedBlog) => suggestedBlog.id !== params.id);
	// 				setSuggestedBlogs(filteredBlogs);
	// 			}
	// 		} catch (error) {
	// 			console.error('Error fetching suggested blogs:', error);
	// 		}
	// 	}

	// 	fetchSuggestedBlogs();
	// }, [params.id]);

	useEffect(() => {
		(async () => {
			const response = await axios('/api/blogComment');
		})();
	});

	if (loading) {
		return <Loading />;
	}

	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:gap-14 py-6">
				<div className="col-span-2">
					<h1 className="text-3xl mb-8 font-semibold">{blog?.title}</h1>
					<Image src={blog?.image} alt={blog?.title} className="w-full mb-4 rounded-md" width={1000} height={400} />
					<p className="text-gray-600">{blog?.subtitle}</p>
					<p className="mt-4 text-gray-800">{blog?.content}</p>

					<div className="mt-6">
						<h2 className="text-2xl font-semibold">Comments</h2>
						<ul className="mt-4 space-y-2">
							{comments.map((comment, index) => (
								<li key={index} className="bg-gray-100 p-2 rounded-lg">
									{comment.text}
								</li>
							))}
						</ul>
					</div>

					<form className="max-w-[400px]" onSubmit={handleSubmit(onSubmit)}>
						<input {...register('commentText')} type="text" placeholder="Add a comment..." className="mp_input" />
						<button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Post Comment</button>
					</form>
				</div>

				<div className="sticky top-24 h-fit">
					<h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
					{Array.isArray(suggestedBlogs) && suggestedBlogs.length > 0 ? (
						<ul className="space-y-4">
							{suggestedBlogs.slice(0, 3).map((suggestedBlog) => (
								<li key={suggestedBlog._id} className="flex space-x-4">
									<div className="flex-shrink-0">
										<Image
											src={suggestedBlog.image}
											alt={suggestedBlog.title}
											className="rounded-lg"
											width={128}
											height={128}
										/>
									</div>
									<div className="flex-1">
										<Link className="text-blue-600 hover:text-cyan-700" href={`/blogs/${suggestedBlog?._id}`}>
											{suggestedBlog.title.split(' ').slice(0, 7).join(' ')}
										</Link>
									</div>
								</li>
							))}
						</ul>
					) : (
						<p>No suggested blogs available</p>
					)}
				</div>
			</div>
		</Container>
	);
};

export default DetailsPage;
