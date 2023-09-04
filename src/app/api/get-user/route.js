import DbConnect from '@/services/DbConnect';
export const GET = async (request) => {
	try {
		const { email } = request.query;
		const db = await DbConnect();
		const userCollection = db.collection('users');
		const result = await userCollection.findOne({ email });

		if (!email) {
			// Handling the case when 'email' query parameter is missing
			return new NextResponse({
				status: 400, // Bad Request
				body: JSON.stringify({ error: 'Email is missing in the query parameters' }),
				headers: { 'Content-Type': 'application/json' }
			});
		}
		return new NextResponse({
			status: 200, // HTTP status code for success
			body: JSON.stringify(result),
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error for getting data', error);

		// Sending an error response
		return new NextResponse({
			status: 500, // Internal Server Error
			body: JSON.stringify({ error: 'Error for getting data' }),
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
