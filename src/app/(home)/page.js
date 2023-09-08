import Featured from '@/Featured/Featured';
import Counting from '@/Counting/Information';
import Banner from '@/Banner/Banner';
import Review from '@/Review/Review';
import VerifyEmailMessage from '@/components/VerifyEmailMessage';
import TimeSaving from '@/TimeSaving/TimeSaving';

const Home = () => {
	return (
		<div>
			<VerifyEmailMessage />
			<Banner />
			<Featured />
      		<Counting />
      		<TimeSaving />
			<Review />
		</div>
	);
};

export default Home;
