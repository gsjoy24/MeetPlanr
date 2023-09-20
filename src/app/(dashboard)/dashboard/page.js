'use client';
import BarChartPage from '@/Dashboard/BarChart';
import Stat from '@/components/Stat';
import UseAllUsers from '@/hooks/UseAllUsers';
import UseBlogs from '@/hooks/UseBlogs';
import UseReviews from '@/hooks/UseReviews';
import UseSchedule from '@/hooks/UseSchedule';

const AdminPage = () => {
	const [allUsers] = UseAllUsers();
	const [allBlogs] = UseBlogs();
	const allSchedule = UseSchedule();
	const reviews = UseReviews();

	return (
		<div>
			<h1 className=" md:text-2xl mb-5 text-xl font-bold">Admin Dashboard</h1>
			<div className="flex flex-wrap items-center justify-center gap-5 text-white">
				<Stat num={allUsers ? allUsers?.length : false} title="Users" />
				<Stat num={allBlogs ? allBlogs?.length : false} title="Blogs" />
				<Stat num={allSchedule ? allSchedule?.length : false} title="Schedules" />
				<Stat num={reviews ? reviews?.length : false} title="Reviews" />
			</div>
			<div>
				<BarChartPage />
			</div>
		</div>
	);
};

export default AdminPage;
