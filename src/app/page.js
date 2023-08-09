import Featured from "@/Featured/Featured";
import Security from "@/security/app";
import Counting from "@/Counting/Information";

const Home = () => {
	return (
		<div className="">
			<div>
				<Featured></Featured>
				
        		<Security></Security>
				<Counting></Counting>
			</div>
		</div>
	);
}

export default Home;
