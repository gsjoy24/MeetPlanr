import axios from 'axios';
import { UserAuth } from '@/providers/AuthProvider';
const getCurrentUserInfo = async () => {
	const { user } = UserAuth();
	try {
		const response = await axios.get(`/api/users?email=${user.email}`);
		if (response.status === 200) {
			const userData = response.data;
			return userData;
		} else {
			console.error('Failed to fetch user data:', response.statusText);
			return null;
		}
	} catch (error) {
		console.error('An error occurred while fetching user data:', error);
		return null;
	}
};
export default getCurrentUserInfo;
