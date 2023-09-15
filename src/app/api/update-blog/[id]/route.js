import DbConnect from '@/services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const PUT = async (request, { params }) => {
	try {
		const db = await DbConnect();
		const { _id } = params;
		console.log(_id);
		const body = await request.json();
		const query = { _id: new ObjectId(_id) };
		const updateDoc = {
			$set: { ...body }
		};
		const option = { upsert: true };
		const blogCollection = db.collection('blogs');
		const result = await blogCollection.updateOne(query, updateDoc, option);
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
