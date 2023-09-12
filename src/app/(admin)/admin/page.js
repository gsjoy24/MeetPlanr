import State from '@/components/State';

const AdminPage = () => {
	return (
		<div>
			<h1 className=" md:text-2xl mb-5 text-xl font-bold">Admin Dashboard</h1>
			<div className="flex flex-wrap items-center justify-center gap-5 text-white">
				<State num={'132'} title="Users" />
				<State num={'42'} title="Blogs" />
				<State num={'232'} title="Schedules" />
				<State num={'121'} title="Feedbacks" />
			</div>
		</div>
	);
};

export default AdminPage;
