import Swal from 'sweetalert2';

const EventCard = ({ schedule }) => {
	const { eventName, description, duration, scheduleLink } = schedule || {};

	const copyLink = () => {
		navigator.clipboard.writeText(scheduleLink).then(() => {
			Swal.fire({
				icon: 'success',
				title: 'Link coped',
				showConfirmButton: false,
				timer: 1500
			});
		});
	};
	return (
		<div className="rounded-ss-2xl rounded-br-2xl grid p-5 border-2 shadow-md">
			<h2 className="text-lg font-medium">{eventName}</h2>
			<p className="my-1">{duration}mins, One-on-One</p>
			<h3 className="mt-2 font-semibold">Description:</h3>
			<p className="my-1">{description}</p>
			<div className="self-end mt-2 text-right">
				<button onClick={copyLink} className="px-4 rounded-3xl py-2 border border-[#465AF7]">
					Copy Link
				</button>
			</div>
		</div>
	);
};

export default EventCard;
