'use client';
import Loading from '@/app/loading';
import UseAllUsers from '@/hooks/UseAllUsers';
import TimeZoneConverter from '@/shareComponents/TimeZoneConverter';
import Image from 'next/image';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const AllUser = () => {
	const allUsers = UseAllUsers();

	return allUsers && Array.isArray(allUsers) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All registered users</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[800px]">
				<table className="table-pin-rows table min-w-full">
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
									<th>{user?.role}</th>
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
							<th>Regi. time & Date</th>
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
