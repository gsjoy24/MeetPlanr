import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const schedulingCollection = db.collection('scheduling');
			const { eventName, description, duration, method, scheduleLink, hostName, hostEmail, timeRange, path } = body;
			const docs = { eventName, description, duration, method, scheduleLink, hostName, hostEmail, timeRange, path };
			const result = await schedulingCollection.insertOne(docs);

			return NextResponse.json(result);
		} catch (error) {
			NextResponse.json({ error: 'Failed to insert data' });
		}
	} else {
		NextResponse.json({ message: 'Method not allowed' });
	}
};

export const GET = async (request) => {
	try {
		const userName = request.nextUrl.searchParams.get('username');
		const db = await DbConnect();
		const schedulingCollection = db.collection('scheduling');
		console.log("userName");
		if (userName) {
			const result = await schedulingCollection.find({ username: userName }).toArray();
			return NextResponse.json(result);
		}
		const result = await schedulingCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
