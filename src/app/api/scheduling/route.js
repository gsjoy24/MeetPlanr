import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const POST= async(request)=>  {
    if (request.method === "POST") {
  
      try {
        const body =await request.json();
        const db = await DbConnect();
        const schedulingCollection = db.collection("scheduling");
        const {eventName,method,description,duration,eventDate,eventTime,scheduleLink}=body;
        const docs={eventName,method,description,duration,eventDate,eventTime,scheduleLink};
      const result=await schedulingCollection.insertOne(docs);
        return NextResponse.json(result);
      } catch (error) {
        NextResponse.json({ error: "Failed to insert data" });
      }
    } else {
      NextResponse.json({ message: "Method not allowed" });
    }
  }