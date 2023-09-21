import Image from 'next/image';

const FeatureCard = ({ feature }) => {
	const { description, icon, name } = feature || {};
	return (
		<div className="ft_hover group relative grid p-5 border border-blue-500 rounded-lg shadow-lg">
			<div className="max-w-[90px] max-h-[90px] p-4 flex justify-center items-center rounded-full mx-auto bg-white">
				<Image width={60} height={60} src={icon} alt={name} />
			</div>
			<h3 className="mt-4 text-xl font-semibold text-center">{name}</h3>
			<p className="group-hover:scale-100 absolute bottom-0 flex items-center justify-center w-full h-full p-4 py-5 overflow-hidden text-sm text-center duration-200 scale-0 bg-blue-200 rounded-lg">
				{description}
			</p>
		</div>
	);
};

export default FeatureCard;
