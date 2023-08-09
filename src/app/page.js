import Featured from "@/Featured/Featured";
import PricingPlan from "@/PricingPlan/PricingPlan";
import Security from "@/security/app";

const Home = () => {
	return (
		<div className="">
			<div>
				<Featured></Featured>
        		<Security></Security>
        		<PricingPlan></PricingPlan>
			</div>
		</div>
	);
}

export default Home;
