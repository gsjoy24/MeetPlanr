import Featured from '@/Featured/Featured';
import Counting from '@/Counting/Information';
import Banner from '@/Banner/Banner';
import Review from '@/Review/Review';
import VerifyEmailMessage from '@/components/VerifyEmailMessage';
import TimeSaving from '@/TimeSaving/TimeSaving';
import WorldWideUsers from '@/WorldWideUsers/WorldWideUsers';

const Home = () => {
	return (
		<div>
			<VerifyEmailMessage />
			<Banner />
			<Featured />
			<WorldWideUsers />
			<Counting />
			<TimeSaving />
			<Review />
		</div>
	);
};

export default Home;
