const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.sendNotification = functions.database.ref("/Editorial/Pedidos/{anio}/{mes}/{dia}/{idPedido}").onUpdate(event => {
     const snapshot = event.data;
     const tituloSnapshot = snapshot.child('status');
     if(tituloSnapshot.changed()){
      // let mail=snapshot.val().userReplaced;
       envio('adan1995a@gmail.com');

     }

   });



envio=(correo)=> {
   const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: nombre</li>
      <li>Company: bebat</li>
      <li>Email: ${correo}</li>
      <li>Phone: 3318282443</li>
    </ul>
    <h3>Message</h3>
    <p>mensaje</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    auth: {
        user: 'emmanuelskapple@gmail.com', // generated ethereal user
        pass: 'diosmeamara?'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"EasyBook Contact" <{emmanuelskapple@gmail.com}', // sender address
      to: correo, // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
  }
