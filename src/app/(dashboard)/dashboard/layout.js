import AdminRoute from '@/components/AdminRoute';
import AdminNavbar from '@/shareComponents/AdminNavbar';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function Layout({ children }) {
	return (
		<AdminRoute>
			<AdminNavbar>{children}</AdminNavbar>
		</AdminRoute>
	);
}
