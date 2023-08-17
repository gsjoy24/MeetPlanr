'use client';
import Container from '@/components/container';
import signUpAnimation from '../../assets/signup.json';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { BiSolidErrorAlt } from 'react-icons/bi';

import { UserAuth } from '@/providers/AuthProvider';
import { toast } from 'react-hot-toast';

const signUp = () => {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState('');
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();

	const { loading, setLoading, createUser, updateUserProfile } = UserAuth();

	const onSubmit = (formData) => {
		const { name, email, password, photoURL } = formData;

		createUser(email, password)
			.then((data) => {
				updateUserProfile(name, photoURL).then(() => {
					console.log('profile updated');
				});

				reset();
				setLoading(false);
				toast.success('Successfully signed up!');
				router.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
			});
	};

	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
				<div className="max-w-lg h-64 -mt-12 mb-8 md:m-auto md:h-auto ">
					<Lottie animationData={signUpAnimation} />
				</div>
				<form className="md:p-12" onSubmit={handleSubmit(onSubmit)}>
					<h2 className="text-3xl font-bold text-center mb-8">Sign Up Now</h2>
					{/* name */}
					<div>
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							className="input input-bordered focus:outline-none w-full text-sm"
							type="text"
							placeholder="Name"
							{...register('name', { required: true })}
						/>
						{errors.name?.type === 'required' && (
							<p className="text-xs text-red-500 flex items-center gap-2 pt-2 ml-1" role="alert">
								<BiSolidErrorAlt size={17} /> <span>Name is required!</span>
							</p>
						)}
					</div>

					{/* photoURL */}
					<div>
						<label className="label">
							<span className="label-text">Your online photo URL</span>
						</label>
						<input
							className="input input-bordered focus:outline-none w-full text-sm"
							type="text"
							placeholder="Photo URL"
							{...register('photoURL', { required: true })}
						/>
						{errors.photoURL?.type === 'required' && (
							<p className="text-xs text-red-500 flex items-center gap-2 pt-2 ml-1" role="alert">
								<BiSolidErrorAlt size={17} /> <span>Photo URL is required!</span>
							</p>
						)}
					</div>

					{/* email */}
					<div>
						<label className="label">
							<span className="label-text">What is your email?</span>
						</label>
						<input
							className="input input-bordered focus:outline-none w-full text-sm"
							type="email"
							placeholder="Email"
							{...register('email', { required: true })}
						/>
						{errors.email?.type === 'required' && (
							<p className="text-xs text-red-500 flex items-center gap-2 pt-2 ml-1" role="alert">
								<BiSolidErrorAlt size={17} /> <span>Email is required!</span>
							</p>
						)}
					</div>

					{/* password */}
					<div className="relative">
						<label className="label">
							<span className="label-text">Create a new password</span>
						</label>
						<input
							className="input input-bordered focus:outline-none w-full text-sm"
							type={showPass ? 'text' : 'password'}
							placeholder="Password"
							{...register('password', {
								required: 'Password is required',
								minLength: { value: 6, message: 'Password must be at least 6 characters' }
							})}
							autoComplete="current-password"
						/>
						<p className="absolute top-12 right-5 active:scale-90" onClick={() => setShowPass(!showPass)}>
							{showPass ? <BsEyeSlashFill size={20} /> : <BsEyeFill size={20} />}
						</p>

						{errors.password && (
							<p className="text-xs text-red-500 flex items-center gap-2 pt-2 ml-1">
								<BiSolidErrorAlt size={17} /> <span>{errors.password.message}!</span>
							</p>
						)}
					</div>
					{error && <p className="mt-2 ml-1 text-red-600 text-xs">{error}</p>}

					<button
						className="bg-[#465AF7] hover:bg-sky-950 duration-200 text-white py-2 w-full rounded-lg mt-6"
						type={loading ? 'button' : 'submit'}
					>
						{loading ? 'Please wait' : 'Sign Up'}
					</button>
				</form>
			</div>
		</Container>
	);
};

export default signUp;
