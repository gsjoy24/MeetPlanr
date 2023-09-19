import OAuth2Client from './oauthConfig';

// Route to initiate OAuth 2.0 authentication
export default async function handler(req, res) {
  try {
    // Generate an OAuth URL
    const authUrl = OAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/calendar'],
    });

    // Redirect the user to the OAuth URL
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error initiating OAuth 2.0:', error);
    res.status(500).send('Internal Server Error');
  }
}
