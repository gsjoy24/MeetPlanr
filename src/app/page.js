import Review from "./Components/Review/page";

export default function Home() {
	return (
		<div className="">
			<div>
				<h1 className="text-4xl">Developing MeetPlanr</h1>
				<p className="text-right text-sm mt-2">web coders</p>
			</div>

			<Review />
		</div>
	);
}
