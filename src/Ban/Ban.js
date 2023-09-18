import bgVideo from '../assets/bg-video.mp4';

const Ban = () => {
	return (
		<div className="bg-red-300">
			<video autoPlay muted width={500} height={300}>
				<source src={'https://www.youtube.com/watch?v=LSRNmhLS76o&t=30s'} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Ban;
