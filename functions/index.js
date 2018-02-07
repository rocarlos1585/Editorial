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
       let mail=snapshot.val().userReplaced;
       let nombrePedido=snapshot.val().nombre;
       let mensajePedido= 'Tu '+nombrePedido+' ha cambiado de status';
       envio(mail.split('-').join('.'),'se actualizó el status de tu pedido',mensajePedido);

     }

   });

   exports.sendNotification = functions.database.ref("/Editorial/Devoluciones/{anio}/{mes}/{dia}").onCreate(event => {
        const snapshot = event.data;
        const tituloSnapshot = snapshot.child('status');
        if(tituloSnapshot.changed()){
          let mail=snapshot.val().userReplaced;
          let nombrePedido=snapshot.val().nombre;
          let mensajePedido= 'nueva devolucion de : '+mail;
          envio('einalem.vr@gmail.com','nueva devolucion',mensajePedido);

        }

      });


   exports.sendNotification2 = functions.database.ref("/Editorial/Pedidos/{anio}/{mes}/{dia}/{key}").onCreate(event => {
        const snapshot = event.data;
        const tituloSnapshot = snapshot.val().nombre;
        const user=snapshot.val().userReplaced;
        let mensajePedido= 'Se acaba de agregar un nuevo pedido de :'+user;
        envio('einalem.vr@gmail.com','nuevo pedido',mensajePedido);

      });



envio=(correo,titulo,mensaje)=> {
   const output = `
    <p>${titulo}</p>
    <h3>${titulo}</h3>
    <img src='https://firebasestorage.googleapis.com/v0/b/prueba-login-edbcc.appspot.com/o/hola%2F2017-09-13-PHOTO-00003545.jpg?alt=media&token=ab833cf0-fa7d-4680-ba32-73e0a1d71513'/>
    <h3>${mensaje}</h3>
    <p>https://prueba-login-edbcc.firebaseapp.com/</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    auth: {
        user: 'roberto.karlos.lopez@gmail.com', // generated ethereal user
        pass: 'gekox1585'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"EasyBook Contact" <roberto.karlos.lopez@gmail.com', // sender address
      to: 'adan1995a@gmail.com', // list of receivers   poner correo
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
