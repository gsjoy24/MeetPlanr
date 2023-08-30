import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    try {
        const db = await DbConnect();
        const {path} = params;
        console.log(path);
        const query = {path : path}
        const schedulingCollection = db.collection("scheduling");
        const result = await schedulingCollection.findOne(query);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};