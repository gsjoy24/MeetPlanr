import { NextResponse } from 'next/server';

// javascript
const api_key = process.env.SEND_GRID_KEY;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(api_key)

// Send Mail the invite about Schedule confirmation message
export const POST = async(request)=>  {
    if (request.method === "POST") {
      const body =await request.json();
      const {inviteeName,inviteeEmail,eventName,hostEmail,scheduleDate,method,detailsLink,methodInfo} = body || {};
      
  // Email massage==================
      const msg = {
        to: `${inviteeEmail}`, // Change to your recipient
        from: 'meetplanr@gmail.com', // Change to your verified sender
        subject: `${inviteeName} a new event has been scheduled in MeetPlanr`,
        text: 'and easy to do anywhere, even with Node.js',
        html: `<div style="max-width: 500px; width: 96%; border: 1px solid #777; padding: 20px; background: rgba(0, 0, 255, 0.1); font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; border-radius: 10px;">
        <p>Hi ${inviteeName},</p>
        <p  style=" margin: 0;">A new event has been scheduled.</p>
        <h4 style="margin-bottom: 5px;">Event Name:</h4>
        <p style=" margin: 0;">${eventName}</p>
        <h4 style="margin-bottom: 5px;">Host Email:</h4>
        <p style=" margin: 0;">${hostEmail}</p>
        <h4 style="margin-bottom: 5px;">Event Date/Time:</h4>
        <p style=" margin: 0;">${new Date(scheduleDate)}</p>
        <h4 style="margin-bottom: 5px;">Event Location:</h4>
        <p>${method}: ${methodInfo}</p>
        <a href="${detailsLink}" style="margin-top: 30px; display: inline-block;">More Information in <b>MeetPlanr</b></a>
        </div>`,
      }
      try {
        sgMail.send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error.message)
        })
        return NextResponse.json({result: "send mail"});
      } catch (error) {
        // NextResponse.json({ error: "Failed to insert data" });
        console.log(error);
      }
    } else {
      console.log({ message: "Method not allowed" });
    }
  }