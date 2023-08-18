const Button = ({ children }) => {
	return (
		<div>
			<button className="bg-[#465AF7] hover:bg-sky-950 active:scale-95 duration-200 text-white px-8 py-4 rounded-lg">{children}</button>
		</div>
	);
};

export default Button;
