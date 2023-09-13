import Image from 'next/image';
import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const FeatureCard = ({ feature }) => {
	const { description, icon, image, name } = feature || {};
	const [showModal, setShowModal] = useState(false);
	const [showAll, setShowAll] = useState(false);
	return (
		<>
			<div className="ft_hover grid p-5 border-2 rounded-md shadow-lg">
				<div className=" max-w-[120px] max-h-[120px] p-4 flex justify-center items-center rounded-full mx-auto bg-white">
					<Image width={100} height={100} src={icon} className="rounded-3xl" alt="Feature icon" />
				</div>
				<h3 className="mt-7 text-2xl font-semibold text-center">{name}</h3>
				{showAll ? (
					<p className="py-5">
						{description}{' '}
						<button className="hover:underline font-semibold" onClick={() => setShowAll(false)}>
							See less.
						</button>
					</p>
				) : (
					<p className="py-5">
						{description.slice(0, 120)}...{' '}
						<button className="hover:underline font-semibold" onClick={() => setShowAll(true)}>
							See more.
						</button>
					</p>
				)}

				<button
					onClick={() => setShowModal(true)}
					className="bg-[#465AF7] hover:bg-sky-950 active:scale-95 duration-200 text-white px-6 py-3 rounded-lg"
				>
					Learn more
				</button>
			</div>
			{showModal && (
				<div className="bg-slate-800 bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen">
					<div className="w-4/5 h-[90vh] bg-white overflow-auto p-5">
						<Image
							width={600}
							height={300}
							src={image}
							className="w-4/5 p-5 mx-auto border-2 rounded-lg shadow-lg"
							alt="Features Image"
						/>
						<h2 className="my-5 text-3xl font-semibold">{name}</h2>
						<p>{description}</p>
						<button
							onClick={() => setShowModal(false)}
							className="text-3xl text-red-600 fixed top-4 rounded-full bg-white z-50 right-[9%]"
						>
							<FaTimesCircle className="" />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default FeatureCard;
