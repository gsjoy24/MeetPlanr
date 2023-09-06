import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
	try {
		const db = await DbConnect();
		const query = { username: params.username };
		const userCollection = db.collection('users');
		const result = await userCollection.findOne(query);
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
