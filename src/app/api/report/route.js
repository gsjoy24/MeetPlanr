import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const reportsCollection = db.collection('scheduling');
			const result = await reportsCollection.insertOne({...body});
			return NextResponse.json(result);
		} catch (error) {
			NextResponse.json({ error: 'Failed to insert data' });
		}
	} else {
		NextResponse.json({ message: 'Method not allowed' });
	}
};