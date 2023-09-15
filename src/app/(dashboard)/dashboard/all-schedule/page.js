'use client';
import Loading from '@/app/loading';
import UseSchedule from '@/hooks/UseSchedule';
import { AiFillCheckCircle, AiFillClockCircle } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { GiTabletopPlayers } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
const SchedulePage = () => {
	const schedules = UseSchedule();

	return schedules && Array.isArray(schedules) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Schedules till now!</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table-zebra table min-w-full">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Event and User</th>
							<th>Email and Method</th>
							<th>Duration and Status</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{schedules &&
							schedules.map((schedule, i) => (
								<tr key={schedule?._id}>
									<th>
										<label>{i + 1}</label>
									</th>
									<td className="min-w-[200px] ">
										<span className="flex flex-col gap-2">
											<span className="flex items-center gap-2">
												<GiTabletopPlayers className='w-8 md:w-auto' size={20} /> {schedule.eventName}
											</span>
											<span className="flex items-center gap-2">
												<BiSolidUser size={17} /> {schedule?.hostName}
											</span>
										</span>
									</td>
									<td>
										<span className="flex flex-col gap-2">
											<span className="flex items-center gap-2">
												<MdEmail size={18} /> {schedule?.hostEmail}
											</span>
											<span className="flex items-center gap-2">
												<FaLocationDot size={18} /> {schedule?.method}
											</span>
										</span>
									</td>
									<td>
										<span className="flex flex-col gap-2">
											<span className="flex items-center gap-2">
												<AiFillClockCircle size={18} /> {schedule?.duration} minutes
											</span>
											<span className="flex items-center gap-2">
												{schedule?.confirm ? (
													<>
														<AiFillCheckCircle size={18} /> Confirmed
													</>
												) : (
													<>
														<ImCross size={16} />
														Not Confirmed
													</>
												)}
											</span>
										</span>
									</td>
								</tr>
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Event and User</th>
							<th>Email and Method</th>
							<th>Duration and Status</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default SchedulePage;
