export const GET = async (request) => {
	try {
		const db = await DbConnect();
		const userCollection = db.collection('users');
		const result = await userCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
