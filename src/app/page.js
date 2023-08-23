import Featured from '@/Featured/Featured';
import Counting from '@/Counting/Information';
import Banner from '@/Banner/Banner';
import Review from '@/Review/Review';
import VerifyEmailMessage from '@/components/VerifyEmailMessage';

const Home = () => {
	return (
		<div>
			<VerifyEmailMessage />
			<Banner />
			<Featured></Featured>
			<Counting></Counting>
			<Review></Review>
		</div>
	);
};

export default Home;
