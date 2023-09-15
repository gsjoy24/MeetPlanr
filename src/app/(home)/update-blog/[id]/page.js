'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { UploadPicture } from '@/utils/uploadPicture';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const BlogEditForm = ({ params }) => {
	const [blog, setBlog] = useState({});
	const [loading, setLoading] = useState(true);
	const [updating, setUpdating] = useState(false);

	useEffect(() => {
		async function fetchData() {
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

		fetchData();
	}, [params]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	const onSubmit = async (data) => {
		const { image, ...restData } = data;
		toast.error('This feature is under development!');

		// if (data.image.length) {
		// 	console.log('object');
		// } else {
		// 	console.log('dsdasd');
		// }

		// setUpdating(true);

		// UploadPicture(data.image[0], data.title)
		// 	.then((data) => {
		// 		const blogData = { ...restData, timestamp: new Date(), image: data.data.data.url };
		// 		if (data.data.data.url) {
		// 			axios
		// 				.post('/api/blog', blogData)
		// 				.then((response) => {
		// 					Swal.fire({
		// 						icon: 'success',
		// 						title: '<span class="text-xl">Submitted <br> Have a quick look!</span>',
		// 						html: `<a class='text-xs'
		// 									href=${`/blogs/${response.data.insertedId}`}
		// 									target="_blank">
		// 									${`https://meet-planr.vercel.app/blogs/${response.data.insertedId}`}
		// 									</a>`,
		// 						showConfirmButton: false,
		// 						showCloseButton: true
		// 					});
		// 					reset();
		// 					setUpdating(false);
		// 				})
		// 				.catch((e) => {
		// 					console.log(e.message);
		// 					setUpdating(false);
		// 				});
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.log(error.message);
		// 		setUpdating(false);
		// 	});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg p-4 mx-auto">
			<h2 className="mb-5 text-3xl font-extrabold">Post a New Blog</h2>
			{/* title */}
			<div>
				<label className="label">
					<span className="label-text">Blog Title</span>
				</label>
				<input
					defaultValue={blog?.title}
					className="mp_input"
					type="text"
					placeholder="Title"
					autoComplete="title"
					{...register('title', { required: true })}
				/>

				{errors.title?.type === 'required' && (
					<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
						<BiSolidErrorAlt size={17} /> <span>Title is required!</span>
					</p>
				)}
			</div>
			{/* subtitle */}
			<div>
				<label className="label">
					<span className="label-text">Sub Title</span>
				</label>
				<input
					defaultValue={blog?.subtitle}
					className="mp_input"
					type="text"
					placeholder="Subtitle"
					autoComplete="subtitle"
					{...register('subtitle', { required: true })}
				/>
				{errors.subTitle?.type === 'required' && (
					<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
						<BiSolidErrorAlt size={17} /> <span>Title is required!</span>
					</p>
				)}
			</div>
			{/* content */}
			<div>
				<label className="label">
					<span className="label-text">Blog Content</span>
				</label>
				<textarea
					defaultValue={blog?.content}
					className="mp_input min-h-[130px]"
					placeholder="Content"
					{...register('content', { required: true })}
				/>
				{errors.content?.type === 'required' && (
					<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
						<BiSolidErrorAlt size={17} /> <span>Content is required!</span>
					</p>
				)}
			</div>
			{/* Image */}
			<div>
				<label className="label">
					<span className="label-text">Add Photo</span>
				</label>
				<input
					type="file"
					accept="image/*"
					{...register('image')}
					className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 block w-full text-sm text-gray-500"
				/>
			</div>
			<button
				className="bg-[#465AF7] hover:bg-sky-950 duration-200 text-white py-2 w-full rounded-lg mt-6"
				type={updating ? 'button' : 'submit'}
			>
				{updating ? 'Updating' : 'Update'}
			</button>
		</form>
	);
};

export default BlogEditForm;
