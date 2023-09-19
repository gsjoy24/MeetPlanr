import DbConnect from '@/services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const PUT = async (request) => {
	if (request.method === 'PUT') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const userCollection = db.collection('users');
			const filter = { _id: new ObjectId(body.id) };
			const option = { upsert: true };

			// Toggle the "role" field between "admin" and "user"
			const update = {
				$set: { role: body.role === 'admin' ? 'user' : 'admin' }
			};

			// Perform the update
			const result = await userCollection.updateOne(filter, update, option);
			return NextResponse.json(result);
		} catch (error) {
			return NextResponse.json({ error: 'Failed to update role' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' });
	}
};
