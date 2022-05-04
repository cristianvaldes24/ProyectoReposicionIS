const nodemailer = require("nodemailer");

const mail ={
    user:'pruebas-IS810@hotmail.com',
    pass:'prueba1234'
};


var transporter = nodemailer.createTransport(({
    host: "smtp-mail.outlook.com",
    secureConnection: false, 
    port: 587, 
    tls: {
       ciphers:'SSLv3'
    },

    auth: {
      user: mail.user,
      pass: mail.pass
    }
  }));


    const enviarEmail= async (email,asunto,cuerpo)=>{
      try {
        await transporter.sendMail({
            from: `NTT: <${mail.user}>`, // sender address
            to: email, // list of receivers
            subject: asunto, // Subject line
            text: cuerpo
          });
          
      } catch (error) {
          console.log('error en el email ',error);
      }
  };


   module.exports ={ enviarEmail };