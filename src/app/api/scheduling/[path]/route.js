import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

// Get the specific Schedule by unic path 
export const GET = async (request, { params }) => {
	try {
		const db = await DbConnect();
		const { path } = params;
		const query = { path: path };
		const schedulingCollection = db.collection('scheduling');
		const result = await schedulingCollection.findOne(query);
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};

// Update the Schedule ===============
export const PUT = async (request, { params }) => {
	try {
		const db = await DbConnect();
		const { path } = params;
		const body = await request.json();
		const filter = { path: path };
		const updateDoc = {
			$set: { ...body }
		};
		const option = { upsert: true };
		const schedulingCollection = db.collection('scheduling');
		const result = await schedulingCollection.updateOne(filter, updateDoc, option);
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
