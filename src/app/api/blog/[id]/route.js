import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    console.log(params);
    try {
        const db = await DbConnect();
        const id = params.id;
        const schedulingCollection = db.collection("blogs");
        const query = { _id :  new ObjectId(id)}
        const result = await schedulingCollection.findOne(query);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};