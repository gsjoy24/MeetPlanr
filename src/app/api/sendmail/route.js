


import { NextResponse } from 'next/server';

// javascript
const api_key = process.env.SEND_GRID_KEY;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(api_key)


export const POST = async(request)=>  {
    if (request.method === "POST") {
      // const body =await request.json();
      // console.log(body);
      const msg = {
        to: 'meetplanr@gmail.com', // Change to your recipient
        from: 'meetplanr@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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
        NextResponse.json({ error: "Failed to insert data" });
        console.log(error);
      }
    } else {
      console.log({ message: "Method not allowed" });
    }
  }
