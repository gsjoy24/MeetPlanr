import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

// Post Schedule =====================
export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const schedulingCollection = db.collection('scheduling');
			const result = await schedulingCollection.insertOne({...body});

			return NextResponse.json(result);
		} catch (error) {
			NextResponse.json({ error: 'Failed to insert data' });
		}
	} else {
		NextResponse.json({ message: 'Method not allowed' });
	}
};

// Get Scheduled ===================
export const GET = async (request) => {
	try {
		const userName = request.nextUrl.searchParams.get('username');
		const db = await DbConnect();
		const schedulingCollection = db.collection('scheduling');
//If send user name as a query parameter get this user schedule
		if (userName) {
			const result = await schedulingCollection.find({ username: userName }).sort({timeStamp: -1}).toArray();
			return NextResponse.json(result);
		}
		const result = await schedulingCollection.find().sort({timeStamp: -1}).toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};

