import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaCalendarTimes } from 'react-icons/fa';
import { MdEditDocument } from 'react-icons/md';
import { HiUserGroup, HiHome } from 'react-icons/hi';
const AdminNavbar = ({ children }) => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<div className="lg:hidden  flex items-center justify-between w-full px-6 py-2 border-b shadow-md text-[#465AF7]">
					<div className="text-2xl font-bold">MeetPlanr</div>
					<label htmlFor="my-drawer-2" className="drawer-button">
						<FaBarsStaggered />
					</label>
				</div>
				<div className="lg:p-10 p-4">{children}</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu w-80 bg-blue-200 text-base-content min-h-full p-4 space-y-3">
					<li className="border-b-2 border-gray-400">
						<div className="text-4xl text-[#465AF7] font-bold">MeetPlanr</div>
					</li>
					<li>
						<Link className="flex items-center" href="/admin/add-new-blog">
							<MdEditDocument size={20} /> <span>Add New Blog</span>
						</Link>
					</li>
					<li>
						<Link className="flex items-center" href="/admin/all-schedule">
							<FaCalendarTimes size={20} /> <span>All Schedule</span>
						</Link>
					</li>
					<li>
						<Link className="flex items-center" href="/admin/all-users">
							<HiUserGroup size={20} /> <span>All users</span>
						</Link>
					</li>

					<li className="mt-auto">
						<Link className="flex items-center border-b" href="/">
							<HiHome size={20} /> <span>Home</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminNavbar;
