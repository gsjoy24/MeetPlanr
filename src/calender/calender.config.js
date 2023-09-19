const { google } = require('googleapis');

const OAuth2Client = new google.auth.OAuth2(
  '738858157604-g2vp4aeth17vks4oo2pbjk4tqacia598.apps.googleusercontent.com',
  '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',
  'http://localhost:3000'
);

module.exports = OAuth2Client;
