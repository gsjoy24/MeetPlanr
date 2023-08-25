
const api_key = "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";

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(api_key)
const msg = {
  to: 'mdjubaerm16247@gmail.com', // Change to your recipient
  from: 'jmjubaer3927@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}


export const POST = async(request)=>  {
    if (request.method === "POST") {
  
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
        // NextResponse.json({ error: "Failed to insert data" });
        console.log(error);
      }
    } else {
      console.log({ message: "Method not allowed" });
    }
  }
