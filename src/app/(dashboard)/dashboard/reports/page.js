'use client';
import Loading from '@/app/loading';
import ReportRow from '@/components/ReportRow';
import UseReports from '@/hooks/UseReports';

const Reports = () => {
	const [allReports, refetch, setRefetch] = UseReports();

	return allReports && Array.isArray(allReports) ? (
		<>
			{allReports.length ? (
				<>
					<h1 className="md:text-2xl mb-5 text-xl font-bold">All Reports</h1>
					<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px] overflow-hidden">
						<table className="table min-w-full border table-zebra">
							{/* head */}
							<thead>
								<tr>
									<th>
										<label>#</label>
									</th>
									<th>User Details</th>
									<th>Subject</th>
									<th>Reported Date</th>
									<th>Issue</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allReports &&
									allReports.map((report, i) => (
										<ReportRow key={report?._id} report={report} i={i} refetch={refetch} setRefetch={setRefetch} />
									))}
							</tbody>
							{/* foot */}
							<tfoot>
								<tr>
									<th>
										<label>#</label>
									</th>
									<th>User Details</th>
									<th>Subject</th>
									<th>Reported Date</th>
									<th>Issue</th>
									<th>Action</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</>
			) : (
				// this div will show if there will no issue submitted by the users!
				<div className="flex justify-center items-center flex-col w-full h-[90vh] font-semibold">
					<h1 className="text-2xl text-[#465AF7]">
						Congratulations!
						<br />
						No issue found!
					</h1>
				</div>
			)}
		</>
	) : (
		<Loading />
	);
};

export default Reports;
