import Image from 'next/image';
import image from '../../../assets/review-image/img1.jpg';
const Apage = () => {
	return (
		<div className="w-4/5 p-10 mx-auto my-10 border-2 shadow-xl">
			<div className="text-center">
				<Image src={image} className="w-28 h-28 object-cover mx-auto rounded-full" alt="User Profile image"/>
				<h2 className="mt-5 text-3xl font-semibold">Md Jubaer islam</h2>
			</div>
		</div>
	);
};

export default Apage;
