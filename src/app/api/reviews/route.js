import DbConnect from "@/services/DbConnect"
import { NextResponse } from "next/server";

export const GET = async(request) => {
    try{
        const db = await DbConnect();
        const reviewsCollections = db.collection('reviews');
        const result = await reviewsCollections.find().sort({timestamp: -1}).toArray();
		return NextResponse.json(result);
    }catch (err) {
        console.log(err.message);
    }
}

export const POST = async(request) => {
    try{
        const db = await DbConnect();
        const reviewsCollections = db.collection('reviews');
        const body = await request.json();
        const result = await reviewsCollections.insertOne({...body});
		return NextResponse.json(result);
    }catch (err) {
        console.log(err.message);
    }
}