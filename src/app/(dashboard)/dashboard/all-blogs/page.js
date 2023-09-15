'use client';
import Loading from '@/app/loading';
import UseBlogs from '@/hooks/UseBlogs';
import TimeZoneConverter from '@/shareComponents/TimeZoneConverter';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaSquarePen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllBlogs = () => {
	const [allBlogs, refetch, setRefetch] = UseBlogs();

	const deleteBlog = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: '#465AF7',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				const res = await axios.delete('/api/delete-blog', { data: { id } });
				const data = res.data;
				if (data.deletedCount === 1) {
					Swal.fire({
						title: 'Deleted!',
						text: 'Your blog has been deleted!',
						timer: 2000,
						showConfirmButton: false
					});
					setRefetch(!refetch);
				} else {
					toast.error('Something went wrong! Please try again!');
				}
			}
		});
	};

	return allBlogs && Array.isArray(allBlogs) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Blogs</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Title</th>
							<th>Subtitle</th>
							<th>Posted Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{allBlogs &&
							allBlogs.map((blog, i) => (
								<tr key={blog?._id}>
									<th>
										<label>{i + 1}</label>
									</th>
									<td className="min-w-[200px]">
										<Link target="_blank" href={`/blogs/${blog?._id}`} className="font-bold hover:underline">
											{blog?.title}
										</Link>
									</td>
									<td className="flex flex-col gap-2">{blog?.subtitle}</td>
									<td>
										<TimeZoneConverter inputDate={blog?.timestamp} />
									</td>
									<th>
										<span className="flex justify-center items-center gap-3">
											<button
												onClick={() => deleteBlog(blog?._id)}
												title="delete"
												className="hover:text-red-500 duration-200"
											>
												<MdDelete size={25} />
											</button>
											<button title="update" className="hover:text-[#465AF7] duration-200">
												<FaSquarePen size={25} />
											</button>
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
							<th>Title</th>
							<th>Subtitle</th>
							<th>Posted Date</th>
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

export default AllBlogs;
