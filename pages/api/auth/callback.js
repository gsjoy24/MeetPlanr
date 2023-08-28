import { getGoogleApiClient } from '@/firebase/firebase-admin';
import admin from '@/firebase/firebase-admin';

const oAuth2Client = getGoogleApiClient();

export default async (req, res) => {
	try {
		const { code } = req.query;
		const { tokens } = await oAuth2Client.getToken(code);
		const decodedToken = await admin.auth().verifyIdToken(tokens.id_token);

		// Update the user's Firebase record with the Google access token
		await admin.auth().updateUser(decodedToken.uid, { tokens });

		res.redirect('/'); // Redirect to a logged-in page
	} catch (error) {
		console.error('OAuth Callback Error:', error);
		res.status(500).send('Error occurred during OAuth callback.');
	}
};
