import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    try {
        const db = await DbConnect();
        const query = {username : params.username}
        const schedulingCollection = db.collection("users");
        const result = await schedulingCollection.findOne(query);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};