'use client';
import TimeZoneConverter from '@/shareComponents/TimeZoneConverter';
import { MdCall, MdDelete, MdEmail } from 'react-icons/md';
import { BiSolidUser } from 'react-icons/bi';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Link from 'next/link';
import IssueModal from './IssueModal';

const ReportRow = ({ report, i, refetch, setRefetch }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteReport = (id) => {
		Swal.fire({
			title: 'Did you fixed the issue?',
			showCancelButton: true,
			confirmButtonColor: '#465AF7',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsDeleting(true);
				const res = await axios.delete('/api/report', { data: { id } });
				const data = res.data;
				if (data.deletedCount === 1) {
					Swal.fire({
						title: 'Deleted!',
						text: 'You did a good job!',
						timer: 2000,
						showConfirmButton: false
					});
					setRefetch(!refetch);
				} else {
					toast.error('Something went wrong! Please try again!');
				}
				setIsDeleting(false);
			}
		});
	};

	return (
		<tr>
			<th>
				<label>{i + 1}</label>
			</th>
			<td className="flex flex-col gap-2">
				<span className="flex items-center gap-2">
					<BiSolidUser size={18} />
					{report?.name}
				</span>

				<span className="flex items-center gap-2">
					<MdEmail size={18} />
					<Link href={`mailto:${report?.email}`}>{report?.email}</Link>
				</span>
				{report?.phone && (
					<span className="flex items-center gap-2">
						<MdCall size={18} />
						{report?.phone}
					</span>
				)}
			</td>
			<td>{report?.subject}</td>
			<td>
				<TimeZoneConverter inputDate={report?.timestamp} />
			</td>
			<td>
				<button
					className="bg-[#465AF7] text-white px-4 py-2 rounded-lg  cursor-pointer"
					onClick={() => document.getElementById(`des${i}`).showModal()}
				>
					See
				</button>

				<IssueModal description={report?.description} i={i} />
			</td>
			<th>
				<button
					disabled={isDeleting}
					onClick={() => deleteReport(report?._id)}
					title="if the issue is solved, you can delete it!"
					className="hover:text-red-500 duration-200"
				>
					{isDeleting ? <span className="loading loading-spinner loading-sm"></span> : <MdDelete size={25} />}
				</button>
			</th>
		</tr>
	);
};

export default ReportRow;
