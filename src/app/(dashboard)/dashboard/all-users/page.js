'use client';
import Loading from '@/app/loading';
import UseAllUsers from '@/hooks/UseAllUsers';
import TimeZoneConverter from '@/shareComponents/TimeZoneConverter';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const AllUser = () => {
	const [loading, setLoading] = useState(false);
	const [allUsers, refetch, setRefetch] = UseAllUsers();

	// this function will change the user role on the database. the the role is user, it will make it admin, if it is user, he/she will be an admin.
	const changeUserRole = async (role, id) => {
		setLoading(true);
		const res = await axios.put('/api/changeRole', { role, id });
		const data = res.data;
		setLoading(false);
		if (data && data?.modifiedCount) {
			setRefetch(!refetch);
			toast.success(`The ${role} is ${role === 'admin' ? 'a user' : 'an admin'} now!`);
		} else {
			toast.error('Something went wrong! Please try again!');
		}
	};

	return allUsers && Array.isArray(allUsers) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All registered users</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>User</th>
							<th>Email and Plan</th>
							<th>Regi. time & Date</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{allUsers &&
							allUsers.map((user, i) => (
								<tr key={user?._id}>
									<th>
										<label>{i + 1}</label>
									</th>
									<td>
										<div className="flex items-center space-x-3">
											<div className="avatar">
												<div className="mask w-12 h-12 rounded-full">
													<Image
														height={48}
														width={48}
														alt={user?.name}
														src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/P65jpcD/duumy-user.png'}
													/>
												</div>
											</div>
											<div>
												<div className="font-bold">{user?.name}</div>
												<div className="text-sm opacity-50">{user?.username}</div>
											</div>
										</div>
									</td>
									<td className="flex flex-col gap-2">
										<span className="flex items-center gap-2">
											<MdEmail size={18} />
											{user.email}
										</span>
										<span className="flex items-center gap-2">
											<AiFillDollarCircle size={18} />
											{user?.plan}
										</span>
									</td>
									<td>
										<TimeZoneConverter inputDate={user?.timestamp} />
									</td>
									<th>
										<span className="relative">
											{user?.role}
											<div className="dropdown dropdown-end -top-2 -right-4 absolute">
												<label tabIndex={0}>
													<BsFillInfoCircleFill size={13} />
												</label>
												<ul
													onClick={() => changeUserRole(user.role, user._id)}
													tabIndex={0}
													className="dropdown-content z-[1] menu shadow rounded-box bg-[#465AF7] hover:bg-[#2d42e3] text-[#f3f3f3] hover:text-white w-28"
												>
													<li className="flex items-center justify-center">
														{loading ? 'loading' : <>Make {user?.role === 'admin' ? 'User' : 'Admin'}</>}
													</li>
												</ul>
											</div>
										</span>
									</th>
								</tr>
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>User</th>
							<th>Email and Plan</th>
							<th>Regi. Time & Date</th>
							<th>Role</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default AllUser;
