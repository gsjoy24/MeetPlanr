import { NextResponse } from 'next/server';

// javascript
const api_key = process.env.SEND_GRID_KEY;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(api_key)

export const POST = async(request)=>  {
    if (request.method === "POST") {
      const body =await request.json();
      console.log(body);
      const msg = {
        to: `${body?.email}`, // Change to your recipient
        from: 'jmjubaer3927@gmail.com', // Change to your verified sender
        subject: `Your Schedule information from Meetplanr`, // Change to your
        text: `${body?.name}, You make a new schedule in Meetplanr. Your schedule link is ${body?.scheduleLink}.`,
        html: `<b>${body?.name}</b>, You make a new schedule in <b>Meetplanr</b>. Your schedule link is <b>${body?.scheduleLink}</b>.`,
      }
      try {
        sgMail.send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
        return NextResponse.json({result: "send mail"});
      } catch (error) {
        NextResponse.json({ error: "Failed to insert data" });
        console.log(error);
      }
    } else {
      console.log({ message: "Method not allowed" });
    }
  }
