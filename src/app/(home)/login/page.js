'use client';
import Container from '@/components/container';
import signUpAnimation from '../../../assets/register.json';
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
import Swal from 'sweetalert2';
import { MdFrontHand } from 'react-icons/md';

const LoginPage = () => {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState('');
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch
	} = useForm();

	const { loading, setLoading, loginWithEmail, resetPass } = UserAuth();

	// handling the user login
	const handleLogin = (formData) => {
		const { email, password } = formData;
		loginWithEmail(email, password)
			.then(() => {
				setError('');
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

	// handing password reset system
	const resetPassEmail = watch('email');
	const handleResetPass = () => {
		// validating email format
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const email = emailRegex.test(resetPassEmail);
		if (!email) {
			setError('The email is not valid!');
		} else {
			setError('');
			resetPass(resetPassEmail)
				.then(() => {
					Swal.fire({
						icon: 'success',
						title: 'Email send!',
						confirmButtonColor: '#465AF7',
						html: `<p class="text-xs">We've sent you an email! Please check your inbox and follow the steps provided to regain access to your account. If you don't receive the email within a few minutes, please check your spam folder. If you continue to experience issues, feel free to contact our support team for assistance.</p>`,
						footer: `<a class='text-xs hover:underline duration-200' href="https://mail.google.com/" target='_blank'>Open Gmail</a>`
					});
				})
				.catch((err) => {
					setError(err.message);
				});
		}
	};

	return (
		<Container>
			<div className="md:grid-cols-2 grid items-center justify-center grid-cols-1 pb-12">
				<div className="max-w-lg md:min-w-[400px] lg:min-w-[600px] mb-8 md:m-auto mx-auto md:h-auto ">
					<Lottie animationData={signUpAnimation} />
				</div>
				<div className="md:p-12">
					<form onSubmit={handleSubmit(handleLogin)}>
						<h2 className="mb-8 text-3xl font-bold text-center">Login Now</h2>

						{/* email */}
						<div>
							<label className="label">
								<span className="label-text">Enter your email</span>
							</label>
							<input className="mp_input" type="email" placeholder="Email" {...register('email', { required: true })} />
							{errors.email?.type === 'required' && (
								<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
									<BiSolidErrorAlt size={17} /> <span>Email is required!</span>
								</p>
							)}
							{error && (
								<p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
									<BiSolidErrorAlt size={17} /> <span>{error}</span>
								</p>
							)}
						</div>
						{/* password */}
						<div className="relative">
							<label className="label">
								<span className="label-text">Enter your password</span>
							</label>
							<input
								className="mp_input"
								type={showPass ? 'text' : 'password'}
								placeholder="Password"
								{...register('password', {
									required: 'Password is required'
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

						<span onClick={handleResetPass} className="text-xs p-2 cursor-pointer hover:text-[#465AF7] duration-200">
							forgot password?
						</span>
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
								'Login'
							)}
						</button>

						<p className="mt-3 text-xs">
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
