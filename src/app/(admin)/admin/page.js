const AdminPage = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-5 text-white">
			<div className="bg-[#465AF7] p-8 rounded-2xl min-w-[180px] flex flex-col justify-center items-center gap-3">
				<span className="text-6xl font-bold">132</span> <span>Users</span>
			</div>
			<div className="bg-[#465AF7] p-8 rounded-2xl min-w-[180px] flex flex-col justify-center items-center gap-3">
				<span className="text-6xl font-bold">42</span> <span>Blogs</span>
			</div>
			<div className="bg-[#465AF7] p-8 rounded-2xl min-w-[180px] flex flex-col justify-center items-center gap-3">
				<span className="text-6xl font-bold">232</span> <span>Schedules</span>
			</div>
			<div className="bg-[#465AF7] p-8 rounded-2xl min-w-[180px] flex flex-col justify-center items-center gap-3">
				<span className="text-6xl font-bold">121</span> <span>Feedbacks</span>
			</div>
		</div>
	);
};

export default AdminPage;
