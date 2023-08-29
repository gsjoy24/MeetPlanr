import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const POST= async(request)=>  {
    if (request.method === "POST") {
  
      try {
        const body =await request.json();
        const db = await DbConnect();
        const schedulingCollection = db.collection("scheduling");
        const {eventName,description,duration,method,scheduleLink,email,name,timeRange,path}=body;
        const docs={eventName,description,duration,method,scheduleLink,email,name,timeRange,path};
      const result=await schedulingCollection.insertOne(docs);
      
        return NextResponse.json(result);
      } catch (error) {
        NextResponse.json({ error: "Failed to insert data" });
      }
    } else {
      NextResponse.json({ message: "Method not allowed" });
    }
  }

export const GET = async (request) => {
    try {
        const db = await DbConnect();
        const schedulingCollection = db.collection("scheduling");
        const result = await schedulingCollection.find().toArray();
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};
