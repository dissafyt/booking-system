import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { createCalendarEvent } from './calendar';
import { generateOAuthUrl, storeUserTokens } from './auth';

admin.initializeApp();

export const authRedirect = functions.https.onRequest(async (req, res) => {
    const { code } = req.query;
    // Handle OAuth token exchange and store tokens in Firestore
    const tokens = await storeUserTokens(code);
    res.send('Authentication successful! Tokens stored.');
});

export const createEvent = functions.https.onRequest(async (req, res) => {
    const eventDetails = req.body;
    const auth = req.headers.authorization; // Assume token is passed in the header
    try {
        const event = await createCalendarEvent(auth, eventDetails);
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send('Error creating event: ' + error.message);
    }
});