import { NextResponse } from 'next/server';
import DbConnect from '@/services/DbConnect';

export const GET = async () => {
	try {
		const db = await DbConnect();
		const featuresCollection = db.collection('features');
		const result = await featuresCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
