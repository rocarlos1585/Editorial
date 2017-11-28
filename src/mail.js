var nodemailer = require('nodemailer');

var sender = nodemailer.createTranspore({
    service: 'hotmail',
    auth:{
        user:'emgarcia24@hotmail.com',
        pass:'EmmanuelSkapple',
    }
});

var mailoptions={
      from:'emgarcia24@hotmail.com',
      to:'emmanuelskapple@gmail.com',
      subject:'que onda ',
      text:'asdasdasdasdasdasd'
};

sender.sendmail(mailoptions,function(error,info){
    if(error){
        console.log(error);
    }
    else {
      console.log('Email sent');
    }


});
