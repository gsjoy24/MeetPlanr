import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const GET = async (request,{params}) => {
    try {
        const db = await DbConnect();
        const query = {username : params.username}
        const usersCollection = db.collection("users");
        const result = await usersCollection.findOne(query);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for getting data", error);
        NextResponse.json({ error: "error for getting data" });
    }
};
export const PUT = async(request,{params}) => {

    try {
        const db = await DbConnect();
        const usersCollection = db.collection("users");
        const body = await request.json();
        const filter = {username: params.username}
        const updateDoc = {
            $set: {
                ...body
            }
        }
        const option = {upsert: true}
        const result = await usersCollection.updateOne(filter,updateDoc,option)
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for getting updating user", error);
        NextResponse.json({ error: "error for updating user" });
    }
}
