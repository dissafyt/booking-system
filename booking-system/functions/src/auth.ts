import { firestore } from 'firebase-admin';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

export const generateAuthUrl = () => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/calendar'],
  });
  return url;
};

export const storeUserTokens = async (userId, tokens) => {
  const userRef = firestore().collection('users').doc(userId);
  await userRef.set({ tokens }, { merge: true });
};