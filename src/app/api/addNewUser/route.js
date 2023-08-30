import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const userCollection = db.collection('users');
			const findUser = await userCollection.findOne({ email: body.email });

			if (!findUser) {
				const result = await userCollection.insertOne({ ...body, role: 'user' });
				return NextResponse.json(result);
			} else {
				return;
			}
		} catch (error) {
			console.error('Error inserting new user!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};
