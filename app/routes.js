var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/confirmation-page', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '153117de-1f08-4e80-b12d-891f111c6bed',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress //'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/confirmation-page');

});

module.exports = router
