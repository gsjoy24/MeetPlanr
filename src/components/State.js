import React from 'react';

const State = ({ num, title }) => {
	return (
		<div className="bg-[#465AF7] p-8 rounded-2xl min-w-[180px] flex flex-col justify-center items-center gap-3">
			<span className="text-6xl font-bold">{num}</span> <span>{title}</span>
		</div>
	);
};

export default State;
