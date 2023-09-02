import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const blogCollection = db.collection('blogs');
			const result = await blogCollection.insertOne(body);
			return NextResponse.json(result);
		} catch (error) {
			console.error('Error inserting new blog!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};

export const GET = async (request) => {
    try {
        const db = await DbConnect();
        const schedulingCollection = db.collection("blogs");
        const result = await schedulingCollection.find().sort({timestump: -1}).toArray();
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};