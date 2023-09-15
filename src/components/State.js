import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { RiArticleFill } from 'react-icons/ri';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';

const State = ({ num, title }) => {
	let stateIcon;
	switch (title) {
		case 'Users':
			stateIcon = <FaUsers size={18} />;
			break;
		case 'Blogs':
			stateIcon = <RiArticleFill size={18} />;
			break;
		case 'Schedules':
			stateIcon = <BsFillCalendar2WeekFill size={16} />;
			break;
		case 'Feedbacks':
			stateIcon = <BiSolidCommentDetail size={18} />;
			break;
		default:
			stateIcon = null; // Render nothing for unsupported cases
	}
	return (
		<div className="bg-[#465AF7] hover:bg-[#364cf7] duration-200 p-3 sm:p-8 rounded-2xl min-w-[145px] sm:min-w-[170px] flex flex-col justify-center items-center gap-2">
			<span className="text-5xl font-bold">
				{num ? num : <span className="loading loading-spinner loading-lg">{num}</span>}
			</span>
			<span className="flex items-center justify-center gap-2 text-sm">
				{stateIcon}
				{title}
			</span>
		</div>
	);
};

export default State;
