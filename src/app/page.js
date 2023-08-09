
import Featured from "@/Featured/Featured";
import PricingPlan from "@/PricingPlan/PricingPlan";
import Security from "@/security/app";
import Counting from "@/Counting/Information";
import Review from "@/Components/Review";


const Home = () => {
	return (
		<div className="">
			<div>
				<Featured></Featured>
				<Counting></Counting>
				<Security></Security>
				<PricingPlan></PricingPlan>
				<Review />
			</div>


		</div>
	);
}

export default Home;
