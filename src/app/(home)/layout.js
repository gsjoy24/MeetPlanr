import '../globals.css';
export const metadata = {
	title: 'MeetPlanr',
	description:
		'MeetPlanr: The open-source solution for effortless meeting scheduling and planning. Sync calendars, leverage smart algorithms, and boost collaboration. Join us now! 🚀 #MeetPlanr #SchedulingMadeEasy'
};
import { Toaster } from 'react-hot-toast';
import Navbar from '@/shareComponents/Navbar';
import Footer from '@/shareComponents/Footer';

export default function RootLayout({ children }) {
	return (
		<div>
			<Navbar />
			<div>
				<main className="min-h-[calc(100vh-200px)]">{children}</main>
			</div>
			<Footer></Footer>
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
}
