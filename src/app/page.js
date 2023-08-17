
import Banner from "@/Banner/Banner";
import Featured from "@/Featured/Featured";
import PricingPlan from "@/PricingPlan/PricingPlan";
// import Security from "@/security/app";
import Counting from "@/Counting/Information";
import Review from "@/Review/page";

const Home = () => {
	return (
		<div className="">
			<div>
				<Banner></Banner>
				<Featured></Featured>
				<Counting></Counting>
				{/* <Security></Security> */}
				<PricingPlan></PricingPlan>
				<Review></Review>
			</div>

		</div>
	);
}

export default Home;
