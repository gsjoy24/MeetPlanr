'use client';
import Loading from '@/app/loading';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import RedirectHome from '@/shareComponents/RedirectHome';

const AdminRoute = ({ children }) => {
	const userData = UseGetCurrentUser();
	if (!userData) {
		return <Loading />;
	} else if (userData && userData?.role === 'admin') {
		return <div>{children}</div>;
	} else {
		return <RedirectHome />;
	}
};

export default AdminRoute;
