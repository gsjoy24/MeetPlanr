import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    try {
        const db = await DbConnect();
        const {path} = params;
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

export const PUT = async (request,{params}) => {
    try {
        const db = await DbConnect();
        const {path} = params;
        const body =await request.json();
        const {inviteeName,inviteeEmail,scheduleDate} = body || {};
        const filter = {path : path}
        const updateDoc = {
            $set: {
                inviteeName,
                inviteeEmail,
                scheduleDate,
                confirm: true
            },
        }
        const option = {upsert : true}
        const schedulingCollection = db.collection("scheduling");
        const result = await schedulingCollection.updateOne(filter,updateDoc,option);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};