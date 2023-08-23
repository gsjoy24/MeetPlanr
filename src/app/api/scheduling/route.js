import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
const mg = require('nodemailer-mailgun-transport');

require('dotenv').config();
const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   host: 'smtp.sendgrid.net',
//   port: 587,
//   auth: {
//       user: "apikey",
//       pass: process.env.SENDGRID_API_KEY
//   }
// })

const auth = {
  auth: {
    api_key: process.env.Email_Private_Key,
    domain: sandbox633853c5fa8e4293b20fe8e6cbc3bc41.mailgun.org
  }
}

const transporter = nodemailer.createTransport(mg(auth));

const eventEmailSend=(event)=>{
  transporter.sendMail({
    from: "robynthompson641@gmail.com", // verified sender email
    to: 'robynthompson641@gmail.com', // recipient email
    subject: "Test message subject", // Subject line
    text: "Hello world!", // plain text body
    html: `<b>Hello world!</b>`, // html body
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
} 

export const POST= async(request)=>  {
    if (request.method === "POST") {
  
      try {
        const body =await request.json();
        const db = await DbConnect();
        const schedulingCollection = db.collection("scheduling");
        const {eventName,method,description,duration,eventDate,eventTime,scheduleLink}=body;
        const docs={eventName,method,description,duration,eventDate,eventTime,scheduleLink};
      const result=await schedulingCollection.insertOne(docs);
      //send email confirming
      eventEmailSend(docs)
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