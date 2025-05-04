import './globals.css';
export const metadata = {
	title: 'MeetPlanr',
	description:
		'MeetPlanr: The open-source solution for effortless meeting scheduling and planning. Sync calendars, leverage smart algorithms, and boost collaboration. Join us now! 🚀 #MeetPlanr #SchedulingMadeEasy'
};
import { poppins } from '@/utils/fonts';
import { AuthProvider } from '@/providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<AuthProvider>
					<main className="min-h-[calc(100vh-200px)]">{children}</main>
					<Toaster position="top-center" reverseOrder={false} />
				</AuthProvider>
			</body>
		</html>
	);
}
