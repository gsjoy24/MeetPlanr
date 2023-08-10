
import Featured from "@/Featured/Featured";
import PricingPlan from "@/PricingPlan/PricingPlan";
import Security from "@/security/app";
import Counting from "@/Counting/Information";
import Banner from "@/Banner/Banner";
import Review from "@/Review";



const Home = () => {
	return (
		<div className="">
			<div>
				<Banner />
				<Featured></Featured>
				
        		<Security></Security>
				<Counting></Counting>
				<Counting></Counting>
				<Security></Security>
				<PricingPlan></PricingPlan>
				<Review />
			</div>

		</div>
	);
}

export default Home;
