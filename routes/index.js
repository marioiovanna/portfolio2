var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    service: 'hotmail',
    host: 'smtp.hotmail.com',
    auth: {
      user: 'marioiovanna_job@hotmail.com',
        pass: '34146088@bC'
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/send', function (req,res) {

  var mailOptions = {
      to: 'marioiovanna@hotmail.com',
      subject: req.query.name,
      text: 'From: ' + req.query.name + '\n\nE-mail: ' + req.query.subject + '\n\nSubject: ' + req.query.text
  };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if(error) {
          console.log(error);
            res.end('error');
        } else {
          console.log('email sent ' + response);
          res.end('sent');
        }
        smtpTransport.close();
    });
});

module.exports = router;
