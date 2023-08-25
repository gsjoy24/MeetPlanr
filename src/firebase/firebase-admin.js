// firebase-admin.js
import admin from 'firebase-admin';
import serviceAccount from '../firebase/firebase-service-account.json';

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

export default admin;

import { google } from 'googleapis';
const getGoogleApiClient = () => {
	const oauth2Client = new google.auth.OAuth2(
		'702558187439-4itijq49jflrkce79hf3mh18eggjmg1u.apps.googleusercontent.com',
		'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',
		'http://localhost:3000/api/auth/callback'
	);
	return oauth2Client;
};

export { getGoogleApiClient };
