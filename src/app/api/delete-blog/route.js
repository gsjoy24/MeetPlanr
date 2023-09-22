import DbConnect from '@/services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const DELETE = async (request) => {
	try {
		const body = await request.json();
		const query = { _id: new ObjectId(body.id) };
		const db = await DbConnect();
		const blogCollection = db.collection('blogs');
		const result = await blogCollection.deleteOne(query);
		return NextResponse.json(result);
	} catch (error) {
		console.error('Error deleting a blog!', error);
		return NextResponse.json({ error: error.message || 'Failed to insert data' });
	}
};
