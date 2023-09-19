import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const commentsCollection = db.collection('comments');
			const result = await commentsCollection.insertOne({...body});
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
			const id = request.nextUrl.searchParams.get('id');
			const db = await DbConnect();
			const commentsCollection = db.collection('comments');
			const result = await commentsCollection.find({blogId: id}).toArray();
			return NextResponse.json(result);
		} catch (error) {
			NextResponse.json({ error: 'Failed to insert data' });
		}
	
};