import AdminNavbar from '@/shareComponents/AdminNavbar';

export default function Layout({ children }) {
	return (
		<div>
			<AdminNavbar>{children}</AdminNavbar>
		</div>
	);
}
