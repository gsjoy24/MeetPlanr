import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request,{params}) => {
	try {
        console.log(params);
		const db = await DbConnect();
		const schedulingCollection = db.collection('scheduling');
        const filter = {_id: new ObjectId(params?.id)}
		const result = await schedulingCollection.deleteOne(filter);
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};