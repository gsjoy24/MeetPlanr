'use client';
import Container from '@/components/container';
import signUpAnimation from '../../../assets/signup.json';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { UserAuth } from '@/providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import SocialAuth from '@/components/SocialAuth';
import addUserToServer from '@/utils/addUserToServer';
import { UploadPicture } from '@/utils/uploadPicture';
import { MdFrontHand } from 'react-icons/md';

const SignUp = () => {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState('');
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();

	const { loading, setLoading, createUser, updateUserProfile, verifyEmail } = UserAuth();
	const onSubmit = async (formData) => {
		const { name, email, password, image } = formData;

		// uploading user profile picture on imgbb
		UploadPicture(image[0], name)
			.then((data) => {
				const photoURL = data.data.data.url;
				createUser(email, password)
					.then(() => {
						// adding picture and name to firebase
						updateUserProfile(name, photoURL)
							.then(() => console.log('profile updated'))
							.catch((err) => console.log(err.message));

						// adding user info to server
						addUserToServer(name, email, photoURL);

						// sending verification email.
						verifyEmail()
							.then(() => console.log('verification email send!'))
							.catch((err) => console.error(err));
						reset();
						toast.success('Successfully signed up!');
						router.push('/');
						setLoading(false);
					})
					.catch((err) => {
						console.log(err.message);
						setError(err.message);
						setLoading(false);
					});
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<Container>
			<div className="md:grid-cols-2 grid items-center justify-center grid-cols-1">
				<div className="md:m-auto lg:h-auto max-w-lg mx-auto -mt-12">
					<Lottie animationData={signUpAnimation} />
				</div>
				<div className="md:p-12 space-y-6">
					<form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
						<h2 className="mb-8 text-3xl font-bold text-center">Sign Up Now</h2>
						{/* name */}
						<div>
							<label className="label">
								<span className="label-text">What is your name?</span>
							</label>
							<input className="mp_input" type="text" placeholder="Name" {...register('name', { required: true })} />
							{errors.name?.type === 'required' && (
								<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
									<BiSolidErrorAlt size={17} /> <span>Name is required!</span>
								</p>
							)}
						</div>

						{/* Image */}
						<div>
							<label className="label">
								<span className="label-text">Choose profile photo</span>
							</label>
							<input
								type="file"
								accept="image/*"
								{...register('image', { required: true })}
								className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 block w-full text-sm text-gray-500"
							/>
							{/* <input type="file" /> */}
							{errors.image?.type === 'required' && (
								<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
									<BiSolidErrorAlt size={17} /> <span>Image is required!</span>
								</p>
							)}
						</div>

						{/* email */}
						<div>
							<label className="label">
								<span className="label-text">What is your email?</span>
							</label>
							<input
								className="mp_input"
								type="email"
								placeholder="Email"
								autoComplete="username"
								{...register('email', { required: true })}
							/>
							{errors.email?.type === 'required' && (
								<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
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
								className="mp_input"
								type={showPass ? 'text' : 'password'}
								placeholder="Password"
								{...register('password', {
									required: 'Password is required',
									minLength: { value: 6, message: 'Password must be at least 6 characters' }
								})}
								autoComplete="current-password"
							/>
							<p className="top-12 right-5 active:scale-90 absolute" onClick={() => setShowPass(!showPass)}>
								{showPass ? <BsEyeSlashFill size={20} /> : <BsEyeFill size={20} />}
							</p>

							{errors.password && (
								<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500">
									<BiSolidErrorAlt size={17} /> <span>{errors.password.message}!</span>
								</p>
							)}
						</div>
						{error && (
							<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
								<BiSolidErrorAlt size={17} /> <span>{error}</span>
							</p>
						)}
						<button
							className="bg-[#465AF7] hover:bg-sky-950 duration-200 text-white py-2 w-full rounded-lg mt-6"
							type={loading ? 'button' : 'submit'}
						>
							{loading ? (
								<p className="flex items-center justify-center gap-2">
									<MdFrontHand />
									<span>Have Patients...</span>
								</p>
							) : (
								'Sign Up'
							)}
						</button>
						<p className="mt-3 text-xs">
							<span>Already have an account?</span>
							<Link className="text-[#465AF7] ml-2" href="/login">
								Login Now!
							</Link>
						</p>
					</form>
					<SocialAuth setError={setError} router={router} />
				</div>
			</div>
		</Container>
	);
};

export default SignUp;
