"use client"; 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UserAuth } from '@/providers/AuthProvider'; 
import Swal from 'sweetalert2'; 
import Container from '@/components/container';
import { formatDistanceToNow } from 'date-fns'; 
import { useRouter } from 'next/navigation';


const DetailsPage = ({ params }) => {
	
	const {
		register,
		reset,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// Initialize state variables
	const [blog, setBlog] = useState({});
	const [loading, setLoading] = useState(true);
	const [comments, setComments] = useState([]);
	const [suggestedBlogs, setSuggestedBlogs] = useState([]);
	const [commentRefetch, setCommentRefetch] = useState(false);

	// Use the UserAuth provider to get user information
	const { user, loading: userLoading } = UserAuth();

	// Use the useRouter hook to access the router
	const router = useRouter();

	// Define a function to handle form submission
	const onSubmit = async (data) => {
		if (user) {
			// If the user is logged in, prepare comment data
			const commentData = {
				comment: data?.commentText,
				timeStamp: new Date(),
				blogId: params.id,
				userPhoto: user?.photoURL,
				userName: user?.displayName,
			};
      // Send a POST request to the server
			const response = await axios.post(`/api/blogComment`, commentData); 
			if (response.data.insertedId) {
				reset();
				setCommentRefetch(!commentRefetch);
				
				Swal.fire({
					icon: 'success',
					title: 'Comment successful',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} else {
			
			Swal.fire({
				title: 'Please Login!',
				text: "You can't login without Login.",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login Now.',
			}).then((result) => {
				if (result.isConfirmed) {
					router.push('/login');
				}
			});
		}
	};

	// Use useEffect to fetch blog data and suggested blogs
	useEffect(() => {
		// Fetch blog data
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

		// Fetch suggested blogs
		async function fetchSuggestedBlogs() {
			try {
				const response = await axios.get('/api/blog');
				if (response.data) {
					const filteredBlogs = response.data.filter(
						(suggestedBlog) => suggestedBlog.id !== params.id
					);
					setSuggestedBlogs(filteredBlogs);
				}
			} catch (error) {
				console.error('Error fetching suggested blogs:', error);
			}
		}

		fetchSuggestedBlogs();
	}, [params]);

	// Use useEffect to fetch comments with relative timestamps
	useEffect(() => {
		(async () => {
			const response = await axios(`/api/blogComment?id=${params?.id}`);
			const commentsWithRelativeTime = response.data.map((comment) => ({
				...comment,
				relativeTime: formatDistanceToNow(new Date(comment.timeStamp), {
					addSuffix: true,
				}),
			}));
			setComments(commentsWithRelativeTime);
		})();
	}, [commentRefetch, params]);

	
	return (
		<Container>
			<div className="min-h-screen py-6 flex justify-center ">
				<div className="max-w-screen-lg p-6 ">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Left column: Blog details */}
						<div className="col-span-2">
							<h1 className="text-3xl mb-3 font-semibold">{blog?.title}</h1>
							<Image
								src={blog?.image}
								alt={blog?.title}
								className="w-full mb-4 rounded-md"
								width={1000}
								height={400}
							/>
							<p className="text-gray-600">{blog?.subtitle}</p>
							<p className="mt-4 text-gray-800">{blog?.content}</p>

							<div className="mt-6">
								<h2 className="text-2xl font-semibold">Comments {comments?.length}</h2>
								<ul className="mt-4 space-y-2">
									{comments.map((comment) => (
										<li key={comment._id} className="bg-gray-100 p-2 rounded-lg">
											<div className="flex items-center space-x-2">
												<div className="w-10 h-10">
													<Image
														src={comment.userPhoto}
														alt={comment.userName}
														className="rounded-full"
														width={40}
														height={40}
													/>
												</div>
												<div>
													<p className="font-semibold">{comment.userName}</p>
													<p className="text-sm text-gray-500">{comment.relativeTime}</p>
												</div>
											</div>
											<p className="ml-12 mt-3">{comment.comment}</p>
										</li>
									))}
								</ul>
							</div>

							{/* Comment form */}
							<form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
								<textarea
									{...register('commentText')}
									type="text"
									placeholder="Add a comment..."
									className="mp_input min-h-[120px]"
								></textarea>
								<button
									disabled={userLoading}
									className="disabled:cursor-wait mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
								>
									Post Comment
								</button>
							</form>
						</div>

						{/* Right column: Suggested blogs */}
						<div className="sticky top-24 h-fit">
							<h2 className="text-2xl font-semibold mb-4">More Blog Suggestions</h2>
							{Array.isArray(suggestedBlogs) && suggestedBlogs.length > 0 ? (
								<ul className="space-y-4">
									{suggestedBlogs.slice(0, 5).map((suggestedBlog) => (
										<li key={suggestedBlog.id} className="flex space-x-4">
											<div className="flex-shrink-0 w-20 h-20">
												<Image
													src={suggestedBlog.image}
													alt={suggestedBlog.title}
													className="rounded-lg"
													width={80}
													height={80}
												/>
											</div>
											<div className="flex-1">
												<Link
													className="text-blue-600 hover:text-cyan-700"
													href={`/blogs/${suggestedBlog?._id}`}
												>
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
				</div>
			</div>
		</Container>
	);
};

export default DetailsPage;
