/* eslint-disable react/no-unescaped-entities */
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/container';
import FeatureCard from '@/components/FeatureCard';

const Featured = () => {
	const features = [
		{
			_id: '65030cb51904f409ea8b1fda',
			name: 'Embedding Options',
			icon: 'https://i.ibb.co/d7CwfGm/link.png',
			description:
				'Enhance accessibility and convenience with embedded scheduling forms and links. Users seamlessly integrate them into websites and emails for interviewee convenience without leaving their web or email interface.'
		},

		{
			_id: '65030cb51904f409ea8b1fd8',
			name: 'Reminder Emails',
			icon: 'https://i.ibb.co/598Qg07/email.jpg',
			description:
				'Our platform sends automated interview reminder emails to reduce no-shows, improve communication, and enhance the scheduling experience for both interviewers and interviewees.'
		},

		{
			_id: '65030cb51904f409ea8b1fd9',
			name: 'Scheduling',
			icon: 'https://i.ibb.co/g3nCkB1/schedule.png',
			description:
				'Our platform streamlines scheduling: Interviewees effortlessly see interviewer availability, select convenient slots, and prevent conflicts with real-time calendar updates, ensuring efficiency and ease in the process.'
		},

		{
			_id: '65030cb51904f409ea8b1fd7',
			name: 'Calendar',
			icon: 'https://i.ibb.co/CtLrH2D/calender.png',
			description:
				'Our calendar feature is essential for managing availability and syncing with Google Calendar, ensuring users stay organized and never miss crucial interview appointments'
		},

		{
			_id: '65030cb51904f409ea8b1fdb',
			name: 'Database support',
			icon: 'https://i.ibb.co/n7BLXPS/database.png',
			description:
				'Seamless integration with external databases and ATS enhances collaboration. Interviewers access candidate data and details directly, streamlining the interview process on our platform.'
		},

		{
			_id: '65030cb51904f409ea8b1fdc',
			name: 'Payment',
			icon: 'https://i.ibb.co/HNfyr6t/payment.png',
			description:
				'Opt for premium services with payment integration on our platform. Users charge for specialized sessions, consultations, or exclusive features, ensuring secure and seamless transactions.'
		}
	];

	return (
		<section className="" style={{ marginTop: '64px', marginBottom: '64px' }}>
			<Container>
				<SectionTitle title={'Features'}></SectionTitle>
				<div className="md:grid-cols-2 lg:grid-cols-3 grid gap-8">
					{features.map((feature) => (
						<FeatureCard feature={feature} key={feature?._id}></FeatureCard>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Featured;
