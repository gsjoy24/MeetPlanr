'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { UploadPicture } from '@/utils/uploadPicture';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';

const BlogEditForm = ({ params }) => {
	const router = useRouter();
	const [blog, setBlog] = useState(null);
	const [updating, setUpdating] = useState(false);

	useEffect(() => {
		// fetching the data from database
		async function fetchData() {
			try {
				const response = await axios(`/api/blog/${params.id}`);
				if (response.data) {
					setBlog(response.data);
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
		// destructuring  to grab the image
		const { image, ...restData } = data;
		setUpdating(true);
		if (data.image.length) {
			UploadPicture(data.image[0], data.title)
				.then((data) => {
					const blogData = { ...restData, timestamp: new Date(), image: data.data.data.url };
					if (data.data.data.url) {
						axios
							.put(`/api/update-blog/${blog?._id}`, blogData)
							.then((data) => {
								if (data.data.modifiedCount) {
									toast.success('Blog Updated Successfully!');
									reset();
									router.push('/dashboard/all-blogs');
								} else {
									toast.error('Something went wrong! Please Try again later!');
								}
								setUpdating(false);
							})
							.catch((e) => {
								console.log(e.message);
								setUpdating(false);
								toast.error('Something went wrong! Please Try again later!');
							});
					}
				})
				.catch((error) => {
					console.log(error.message);
					setUpdating(false);
					toast.error('Something went wrong! Please Try again later!');
				});
		} else {
			const blogData = { ...restData, timestamp: new Date() };
			axios
				.put(`/api/update-blog/${blog?._id}`, blogData)
				.then((data) => {
					if (data.data.modifiedCount) {
						toast.success('Blog Updated Successfully!');
						reset();
						router.push('/dashboard/all-blogs');
					}
					setUpdating(false);
				})
				.catch((e) => {
					console.log(e.message);
					toast.error('Something went wrong! Please Try again later!');
					setUpdating(false);
				});
		}
	};

	return blog ? (
		<form
			data-aos="zoom-in"
			data-aos-duration="300"
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-lg p-4 mx-auto"
		>
			<h2 className="mb-5 text-3xl text-center">Update</h2>
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
					<span className="label-text">Choose a photo if you want to replace the current one</span>
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
	) : (
		<Loading />
	);
};

export default BlogEditForm;
