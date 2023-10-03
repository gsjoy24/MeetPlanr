import Link from 'next/link';

const Banner = () => {
	return (
		<div className="bg-gray-800 overflow-hidden w-full max-h-[95vh] flex justify-center items-center relative">
			<div className="blur-sm w-full h-[95vh]">
				<video
					className="w-full h-full object-cover"
					muted
					autoPlay
					loop
					src="https://res.cloudinary.com/dt04ucbpl/video/upload/v1696311399/bg-video_zhyurh.mp4"
				></video>
			</div>
			<div className="flex justify-center items-center text-white text-center absolute w-full h-full bg-[#0000009e]">
				<div className="p-4 max-w-[700px] space-y-4">
					<h1 className="text-4xl md:text-5xl md:leading-tight font-bold " data-aos="fade-in">
						Join Us on the Path to Effortless Scheduling
					</h1>
					<p>
						MeetPlanr is the most flexible, comprehensive appointment scheduling software for professionals, SMEs, and
						enterprises.
					</p>
					<Link
						className="inline-block bg-[#465AF7] py-2 px-3 hover:bg-sky-950 active:scale-95 duration-200 text-white font-semibold rounded-md text-sm md:text-base"
						data-testid="createEvent"
						href="/my-account"
					>
						Create Event
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
