import State from '@/components/State';

const AdminPage = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-5 text-white">
			<State num={'132'} title="Users" />
			<State num={'42'} title="Blogs" />
			<State num={'232'} title="Schedules" />
			<State num={'121'} title="Feedbacks" />
		</div>
	);
};

export default AdminPage;
