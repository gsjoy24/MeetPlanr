import AdminRoute from '@/components/AdminRoute';
import AdminNavbar from '@/shareComponents/AdminNavbar';

export default function Layout({ children }) {
	return (
		<AdminRoute>
			<AdminNavbar>{children}</AdminNavbar>
		</AdminRoute>
	);
}
