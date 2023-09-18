'use client';
// import bgVideo from '../../../assets/bg-video.mp4';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const Ban = () => {
	return (
		<div className="bg-gray-300 overflow-hidden w-full max-h-[70vh] flex justify-center items-center relative">
			<CldVideoPlayer
				width="1920"
				height="1080"
				src="https://res.cloudinary.com/dt04ucbpl/video/upload/v1695045170/bg-video_h4p1qr.mp4"
				autoPlay="always"
				controls={false}
				loop={true}
			/>
			<div className="flex justify-center items-center absolute w-full h-full bg-[#00000076]">
				<h1 className="text-3xl md:text-5xl font-bold text-center text-white px-3">Join Us on the Path to Effortless Scheduling</h1>
			</div>
		</div>
	);
};

export default Ban;
