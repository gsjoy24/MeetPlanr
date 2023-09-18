import DbConnect from '@/services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
	try {
		const db = await DbConnect();
		const id = params?.id;
		const blogCollection = db.collection('blogs');
		const query = { _id: new ObjectId(id) };
		const result = await blogCollection.findOne(query);
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};