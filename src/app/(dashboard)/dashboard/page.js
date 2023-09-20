'use client';
import BarChartPage from '@/Dashboard/BarChart';
<<<<<<< HEAD
// import State from '@/components/State';
=======
>>>>>>> 704ba079b6a4e5fe8fa01a80866b276a6ccda9be
import Stat from '@/components/Stat';
import UseAllUsers from '@/hooks/UseAllUsers';
import UseBlogs from '@/hooks/UseBlogs';
import UseSchedule from '@/hooks/UseSchedule';

const AdminPage = () => {
	const [allUsers] = UseAllUsers();
	const [allBlogs] = UseBlogs();

	const allSchedule = UseSchedule();

	return (
		<div>
			<h1 className=" md:text-2xl mb-5 text-xl font-bold">Admin Dashboard</h1>
			<div className="flex flex-wrap items-center justify-center gap-5 text-white">
				<Stat num={allUsers ? allUsers?.length : false} title="Users" />
				<Stat num={allBlogs ? allBlogs?.length : false} title="Blogs" />
				<Stat num={allSchedule ? allSchedule?.length : false} title="Schedules" />
				<Stat num={'32'} title="Feedbacks" />
			</div>
			<div>
				<BarChartPage />
			</div>
		</div>
	);
};

export default AdminPage;
