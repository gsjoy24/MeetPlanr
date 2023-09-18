'use client';
import Loading from '@/app/loading';
import BlogRow from '@/components/BlogRow';
import UseReports from '@/hooks/UseReports';

const Reports = () => {
	const [allReports, refetch, setRefetch] = UseReports();

	return allReports && Array.isArray(allReports) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Reports</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full border">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Name and email</th>
							<th>Reported Date</th>
							<th>Issue</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{allReports &&
							allReports.map((blog, i) => (
								<BlogRow blog={blog} i={i} key={blog._id} setRefetch={setRefetch} refetch={refetch} />
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Name and email</th>
							<th>Reported Date</th>
							<th>Issue</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default Reports;
