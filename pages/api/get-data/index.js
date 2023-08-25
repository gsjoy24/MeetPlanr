export default function handler(req, res) {
	if (req.method === 'GET') {
		// Handle the GET request
		res.status(200).json({ message: 'Success' });
	} else {
		// Handle other HTTP methods
		res.status(405).end(); // Method Not Allowed
	}
}
