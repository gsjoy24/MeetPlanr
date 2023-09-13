'use client';
import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaCalendarTimes } from 'react-icons/fa';
import { MdEditDocument } from 'react-icons/md';
import { BiArrowFromRight, BiSolidBarChartSquare } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import Container from '@/components/container';

const AdminNavbar = ({ children }) => {
	const path = usePathname();
	//  this function will close the mobile navigation when a user clicks on any route!
	const closeSideNAv = () => {
		const checkbox = document.getElementById('my-drawer-2');
		if (checkbox.checked) {
			checkbox.checked = false;
		}
	};

	return (
		<div className="drawer lg:drawer-open bg-gray-100">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<div className="lg:hidden flex items-center justify-between w-full px-6 py-2 border-b shadow-md text-[#465AF7]">
					<div className="text-2xl font-bold">MeetPlanr</div>
					<label htmlFor="my-drawer-2" className="drawer-button">
						<FaBarsStaggered />
					</label>
				</div>
				<div className="lg:p-10 p-4">{children}</div>
			</div>
			<div className="drawer-side z-50">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu w-80 text-base-content min-h-full p-4 space-y-3 bg-white">
					<div className="text-4xl p-4 text-[#465AF7] font-bold border-b border-gray-300">MeetPlanr</div>

					<li>
						<Link
							onClick={closeSideNAv}
							className={`flex items-center py-3 ${path == '/admin' && 'bg-[#465AF7] text-white'}`}
							href="/admin"
						>
							<BiSolidBarChartSquare size={20} /> <span>Dashboard</span>
						</Link>
					</li>
					<li>
						<Link
							onClick={closeSideNAv}
							className={`flex items-center py-3 ${path == '/admin/add-new-blog' && 'bg-[#465AF7] text-white'}`}
							href="/admin/add-new-blog"
						>
							<MdEditDocument size={20} /> <span>Add New Blog</span>
						</Link>
					</li>
					<li>
						<Link
							onClick={closeSideNAv}
							className={`flex items-center py-3 ${path == '/admin/all-schedule' && 'bg-[#465AF7] text-white'}`}
							href="/admin/all-schedule"
						>
							<FaCalendarTimes size={20} /> <span>All Schedule</span>
						</Link>
					</li>
					<li>
						<Link
							onClick={closeSideNAv}
							className={`flex items-center py-3 ${path == '/admin/all-users' && 'bg-[#465AF7] text-white'}`}
							href="/admin/all-users"
						>
							<HiUserGroup size={20} /> <span>All users</span>
						</Link>
					</li>
					<li className="bottom-4 absolute w-full">
						<Link onClick={closeSideNAv} className="active:bg-red-300 flex items-center" href="/">
							<BiArrowFromRight size={20} /> <span>Back to Home</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminNavbar;
