import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const userCollection = db.collection('users');
			const findUser = await userCollection.findOne({ email: body.email });
			const random = Math.round(Math.random() * 100000);
			const usernameWithoutSpaces = body?.name?.replace(/\s+/g, '');
			const username = usernameWithoutSpaces + random;

			if (!findUser) {
				const result = await userCollection.insertOne({
					...body,
					timestamp: new Date(),
					username,
					role: 'user'
				});
				return NextResponse.json(result);
			} else {
				return;
			}
		} catch (error) {
			console.error('Error inserting new user!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};

export const GET = async (request) => {
    try {
        const db = await DbConnect();
        const schedulingCollection = db.collection("users");
        const result = await schedulingCollection.find().toArray();
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};