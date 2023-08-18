const Button = ({ children }) => {
	return (
		<button className="bg-[#465AF7] hover:bg-sky-950 active:scale-95 duration-200 text-white px-6 py-3 rounded-lg">
			{children}
		</button>
	);
};

export default Button;
