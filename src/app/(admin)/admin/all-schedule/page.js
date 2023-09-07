const SchedulePage = () => {
	return (
		<div>
			<div className="md:p-12">
				<form>
					<h2 className="mb-8 text-3xl font-bold text-center">Login Now</h2>

					{/* email */}
					<div>
						<label className="label">
							<span className="label-text">Enter your email</span>
						</label>
						<input className="mp_input" type="email" placeholder="Email" />
					</div>
					{/* password */}
					<div className="relative">
						<label className="label">
							<span className="label-text">Enter your password</span>
						</label>
						<input
							className="input input-bordered focus:outline-none w-full text-sm"
							placeholder="Password"
							autoComplete="current-password"
						/>
					</div>

					<span className="text-xs p-2 cursor-pointer hover:text-[#465AF7] duration-200">forgot password?</span>
					<button className="bg-[#465AF7] hover:bg-sky-950 duration-200 text-white py-2 w-full rounded-lg mt-6">
						vhfgh
					</button>

					<p className="mt-3 text-xs">
						<span>New here?</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SchedulePage;
