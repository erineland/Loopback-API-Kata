var config = require('../../server/config.json');
var path = require('path');

module.exports = function(user) {
  //send verification email after registration
  user.afterRemote('create', function(context, user, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@loopback.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    //uncomment below code if want to verify user email and accounts

    //user.verify(options, function(err, response) {
    //  if (err) return next(err);
    //
    //  console.log('> verification email sent:', response);
    //
    //  context.res.status(200).jsonp({
    //    message: "User " + user.email + " create with User ID " + user.id
    //  });
    //});

    //below code runs when not verifying users

    //todo: create proper html welcome email template

    user.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Welcome to Grey Matter - Memory loss and dementia companion app.',
      html: '<h1> Welcome! </h1>'
    }, function(err) {
      if (err) return console.log('> error sending welcome email');
      console.log('> sending welcome email to:', info.email);
    });

  });

  ////custom method to handle password reset
  //user.resetPasswordRequest = function(email, cb) {
  //
  //  //verify valid user email (does user exist?)
  //
  //  //verify passwords match and are valid
  //
  //  //if all ok hash password
  //
  //  //store hashed password against user
  //
  //  //send password reset email
  //  //user makes a request to reset their account password
  //  User.resetPassword({
  //    email: req.body.email
  //  }, function(err) {
  //    if (err) return cb(err);
  //
  //    cb(null, 'Password reset successfully requested for email: ' + email);
  //
  //  });
  //};
  //
  //user.remoteMethod(
  //  'resetPasswordRequest',
  //  {
  //    accepts: [
  //      {arg: 'email', type: 'string'},
  //      {arg: 'password', type: 'string'},
  //      {arg: 'confrimPassword', type: 'string'}
  //    ],
  //    returns: {arg: 'message', type: 'string'}
  //  }
  //);

  //send password reset link when requested
  user.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

    user.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });
};
