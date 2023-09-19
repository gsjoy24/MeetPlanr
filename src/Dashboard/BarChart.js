import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import UseAllUsers from '@/hooks/UseAllUsers';
import UseBlogs from '@/hooks/UseBlogs';
import UseSchedule from '@/hooks/UseSchedule';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartPage = () => {
	const [allUsers] = UseAllUsers();
	const [allBlogs] = UseBlogs();

	const allSchedule = UseSchedule();
	const today = new Date();
	const SecondDay = new Date(today);
	SecondDay.setDate(today.getDate() - 1);
	const thirdDay = new Date(today);
	thirdDay.setDate(today.getDate() - 2);
	const forthDay = new Date(today);
	forthDay.setDate(today.getDate() - 3);
	const fifthDay = new Date(today);
	fifthDay.setDate(today.getDate() - 4);
	const sixthDay = new Date(today);
	sixthDay.setDate(today.getDate() - 5);
	const seventhDay = new Date(today);
	seventhDay.setDate(today.getDate() - 6);
	const labels = [
		new Date(seventhDay).getDate(),
		new Date(sixthDay).getDate(),
		new Date(fifthDay).getDate(),
		new Date(forthDay).getDate(),
		new Date(thirdDay).getDate(),
		new Date(SecondDay).getDate(),
		new Date().getDate(today)
	];
	const dateArray = [seventhDay, sixthDay, fifthDay, forthDay, thirdDay, SecondDay, today];

	const data = {
		labels,
		datasets: [
			{
				label: 'Schedule',
				data: dateArray.map((date) => {
					const quantity = allSchedule?.filter(
						(scheduled) => new Date(scheduled.timeStamp).getDate() == new Date(date).getDate()
					);
					return quantity?.length;
				}),
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: 'Users',
				data: dateArray.map((date) => {
					const quantity = allUsers?.filter((user) => new Date(user.timestamp).getDate() == new Date(date).getDate());
					return quantity?.length;
				}),
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			},
			{
				label: 'Blogs',
				data: dateArray.map((date) => {
					const quantity = allBlogs?.filter((blog) => new Date(blog.timestamp).getDate() == new Date(date).getDate());
					return quantity?.length;
				}),
				backgroundColor: 'rgba(45, 120, 185, 0.5)'
			}
		]
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top'
			},
			title: {
				display: true,
				text: ''
			}
		}
	};

	return (
		<>
			{allBlogs && (
				<div className="w-[94%] mx-auto" data-aos="zoom-out" data-aos-duration="300">
					<Bar options={options} data={data} />
				</div>
			)}
		</>
	);
};

export default BarChartPage;
