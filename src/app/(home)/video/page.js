'use client';
// import bgVideo from '../../../assets/bg-video.mp4';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const Ban = () => {
	return (
		<div className="bg-red-300 overflow-hidden w-full max-h-[80vh] flex justify-center items-center">
			<CldVideoPlayer
				width="1920"
				height="1080"
				src="https://res.cloudinary.com/dt04ucbpl/video/upload/v1695045170/bg-video_h4p1qr.mp4"
				autoPlay="always"
				controls={false}
				loop={true}
			/>
		</div>
	);
};

export default Ban;
