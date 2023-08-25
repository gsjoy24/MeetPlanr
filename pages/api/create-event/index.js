// pages/api/create-event.js
import { getGoogleApiClient } from '../../../src/firebase/firebase-admin';
import admin from '../../../src/firebase/firebase-admin';

export default async (req, res) => {
	try {
		const { uid, eventDetails } = req.body;

		const user = await admin.auth().getUser(uid);
		const accessToken = user.tokens.access_token;

		const oAuth2Client = getGoogleApiClient();
		oAuth2Client.setCredentials({ access_token: accessToken });

		const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
		await calendar.events.insert({
			calendarId: 'primary',
			resource: eventDetails
		});

		res.status(201).json({ message: 'Event created successfully' });
	} catch (error) {
		console.error('Error creating event:', error);
		res.status(500).json({ error: 'Something went wrong' });
	}
};
