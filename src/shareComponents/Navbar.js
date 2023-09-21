'use client';
import { UserAuth } from '@/providers/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import {  useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import Container from '@/components/container';
import BlockLink from './BlockLink';
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
const Navbar = () => {
	//  this function will close the mobile navigation when a user clicks on any route!
	const closeSideNAv = () => {
		const checkbox = document.getElementById('my-drawer-3');
		if (checkbox.checked) {
			checkbox.checked = false;
		}
	};
	// user data form the sever!
	const userData = UseGetCurrentUser();
	const { user, logOutUser } = UserAuth();
	const [condition, setCondition] = useState(false);
	const currentPath = usePathname();
	const handleLogOut = () => {
		logOutUser();
		setCondition(false);
	};
	return (
		<div className="sticky top-0 z-50 bg-white border-b shadow-md">
			<Container>
				<div className="drawer">
					<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content flex flex-col">
						{/* Navbar */}
						<div className="navbar md:py-3 w-full py-1">
							<div className="flex-1 text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow">
								<Link href="/">MeetPlanr</Link>
							</div>
							<div className="lg:hidden flex-none">
								<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-[#465AF7]">
									<FaBarsStaggered size={18} />
								</label>
							</div>
							<div className="lg:block flex-none hidden">
								<ul className="menu-horizontal flex items-center gap-6 font-semibold duration-200">
									{/* Navbar menu contents */}
									<div className="text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow lg:hidden">
										<Link href="/">MeetPlanr</Link>
									</div>
									<li>
										<Link
											className={`py-1 capitalize hover:text-[#465AF7] rounded-lg duration-200 ${
												currentPath == '/' && 'text-blue-600'
											}`}
											href="/"
										>
											Home
										</Link>
									</li>
									{userData?.role === 'admin' && (
										<li>
											<BlockLink route={'dashboard'} />
										</li>
									)}
									<li>
										<BlockLink route={'product'} />
									</li>
									<li>
										<div className="dropdown dropdown-hover">
											<label tabIndex={0} className="group hover:text-[#465AF7] flex items-center justify-center gap-3">
												<BlockLink route={'solutions'} />
												<IoIosArrowForward className="group-hover:rotate-90 duration-200" />
											</label>
											<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
												<li>
													<Link href="/solutions/marketing">Marketings</Link>
												</li>
												<li>
													<Link href="/solutions/technology">Technology</Link>
												</li>
												<li>
													<Link href="/solutions/customer-success">Customer Success</Link>
												</li>
												<li>
													<Link href="/solutions/professional-services">Professional Services</Link>
												</li>
												<li>
													<Link href="/solutions/businesses">Small & Medium Businesses</Link>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<BlockLink route={'pricing'} />
									</li>
									<li>
										<BlockLink route={'blogs'} />
									</li>
									{user ? (
										<li>
											<Image
												onClick={() => setCondition(!condition)}
												className="ring-2 max-w-[40px] max-h-[40px] object-cover rounded-full cursor-pointer"
												src={
													user?.photoURL
														? user?.photoURL
														: 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'
												}
												width={40}
												height={40}
												alt={user?.displayName ? user?.displayName : 'User'}
											/>
										</li>
									) : (
										<>
											<li>
												<BlockLink route={'login'} />
											</li>
										</>
									)}
								</ul>
								{condition && (
									<div className="w-60 lg:top-16 lg:right-0 drop_shadow h-fit absolute z-50 overflow-hidden bg-white border rounded-lg">
										<Link
											href={'/my-account'}
											onClick={() => setCondition(false)}
											className={`hover:bg-slate-200 flex items-center justify-between w-full px-5 py-3 font-semibold text-left duration-200 ${
												currentPath == '/my-account' && 'text-[#465AF7]'
											}`}
										>
											<span>My Account</span>
											<FaAngleRight />
										</Link>
										<button
											onClick={handleLogOut}
											className="hover:bg-slate-200 flex items-center justify-between w-full px-5 py-3 font-semibold text-left"
										>
											<span>Log out</span>
											<FaAngleRight />
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="drawer-side">
						<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
						<ul className="w-80 min-h-full py-4 space-y-5 text-lg font-semibold text-center duration-200 bg-white">
							{/* Sidebar content here */}
							<div className="text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow lg:hidden pb-3 border-b">
								<Link className="block" href="/">
									MeetPlanr
								</Link>
							</div>
							{user && (
								<>
									<li>
										<Image
											onClick={() => setCondition(!condition)}
											className="ring-2 max-w-[90px] max-h-[90px] object-cover mx-auto rounded-full cursor-pointer"
											src={
												user?.photoURL ? user?.photoURL : 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'
											}
											width={90}
											height={90}
											alt={user?.displayName ? user?.displayName : 'User'}
										/>
									</li>
									{userData?.role === 'admin' && (
										<li>
											<BlockLink closeSideNAv={closeSideNAv} route={'dashboard'} />
										</li>
									)}
									<li>
										<Link
											onClick={closeSideNAv}
											className={`py-1 capitalize rounded-lg duration-200 ${
												currentPath == '/my-account' && 'text-[#465AF7]'
											}`}
											href="/my-account"
										>
											My Account
										</Link>
									</li>
								</>
							)}

							<li>
								<Link
									onClick={closeSideNAv}
									className={`py-1 capitalize rounded-lg duration-200 ${currentPath == '/' && 'text-[#465AF7]'}`}
									href="/"
								>
									Home
								</Link>
							</li>
							<li>
								<BlockLink closeSideNAv={closeSideNAv} route={'product'} />
							</li>

							<li className="flex items-center justify-center gap-4">
								<BlockLink closeSideNAv={closeSideNAv} route={'solutions'} />
								<details className="dropdown">
									<summary className="hover:text-[#465AF7] duration-150"></summary>
									<ul className="dropdown-content -left-16 border z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
										<li>
											<Link href="/solutions/marketing">Marketing</Link>
										</li>
										<li>
											<Link href="/solutions/technology">Technology</Link>
										</li>
										<li>
											<Link href="/solutions/customer-success">Customer Success</Link>
										</li>
										<li>
											<Link href="/solutions/professional-services">Professional Services</Link>
										</li>
										<li>
											<Link href="/solutions/businesses">Small & Medium Businesses</Link>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<BlockLink closeSideNAv={closeSideNAv} route={'pricing'} />
							</li>
							<li>
								<BlockLink closeSideNAv={closeSideNAv} route={'blogs'} />
							</li>
							{user ? (
								<li>
									<button onClick={handleLogOut}>Log out</button>
								</li>
							) : (
								<li>
									<BlockLink closeSideNAv={closeSideNAv} route={'login'} />
								</li>
							)}
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
