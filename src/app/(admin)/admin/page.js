'use client';
import State from '@/components/State';
import UseAllUsers from '@/hooks/UseAllUsers';
import UseBlogs from '@/hooks/UseBlogs';
import UseSchedule from '@/hooks/UseSchedule';

const AdminPage = () => {
	const allUsers = UseAllUsers();
	const allBlogs = UseBlogs();
	const allSchedule = UseSchedule();
	return (
		<div>
			<h1 className=" md:text-2xl mb-5 text-xl font-bold">Admin Dashboard</h1>
			<div className="flex flex-wrap items-center justify-center gap-5 text-white">
				<State num={allUsers ? allUsers?.length : false} title="Users" />
				<State num={allBlogs ? allBlogs?.length : false} title="Blogs" />
				<State num={allSchedule ? allSchedule?.length : false} title="Schedules" />
				<State num={'121'} title="Feedbacks" />
			</div>
		</div>
	);
};

export default AdminPage;
