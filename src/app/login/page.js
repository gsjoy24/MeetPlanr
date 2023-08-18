'use client';
import Container from '@/components/container';
import signUpAnimation from '../../assets/register.json';
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

const LoginPage = () => {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState('');
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();

	const { loading, setLoading, loginWithEmail } = UserAuth();

	const onSubmit = (formData) => {
		const { email, password } = formData;

		loginWithEmail(email, password)
			.then((data) => {
				reset();
				setLoading(false);
				toast.success('Successfully logged in!');
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
			<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center pb-12">
				<div className="max-w-lg md:min-w-[400px] lg:min-w-[600px] mb-8 md:m-auto mx-auto md:h-auto ">
					<Lottie animationData={signUpAnimation} />
				</div>
				<div className="md:p-12">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className="text-3xl font-bold text-center mb-8">Login Now</h2>

						{/* email */}
						<div>
							<label className="label">
								<span className="label-text">Enter your email</span>
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
								<span className="label-text">Enter your password</span>
							</label>
							<input
								className="input input-bordered focus:outline-none w-full text-sm"
								type={showPass ? 'text' : 'password'}
								placeholder="Password"
								{...register('password', {
									required: 'Password is required'
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
						{error && (
							<p className="text-xs text-red-500 flex items-center gap-2 pt-2 ml-1" role="alert">
								<BiSolidErrorAlt size={17} /> <span>{error}</span>
							</p>
						)}

						<button
							className="bg-[#465AF7] hover:bg-sky-950 duration-200 text-white py-2 w-full rounded-lg mt-6"
							type={loading ? 'button' : 'submit'}
						>
							{loading ? 'Please wait' : 'Login'}
						</button>

						<p className="text-xs mt-3">
							<span>New here?</span>
							<Link className="text-[#465AF7] ml-2" href="/sign-up">
								Sign Up Now!
							</Link>
						</p>
					</form>
					<SocialAuth setError={setError} router={router} />
				</div>
			</div>
		</Container>
	);
};

export default LoginPage;
