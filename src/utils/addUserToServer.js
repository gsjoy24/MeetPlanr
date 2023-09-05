import axios from 'axios';
const addUserToServer = async (name, email, photoURL) => {
	try {
      const response = await axios.post('/api/users', { name, email, photoURL });
	} catch (error) {
		console.log(error.message);
	}
};
export default addUserToServer;
