import { google } from 'googleapis';
import { Firestore } from '@google-cloud/firestore';

const firestore = new Firestore();

export async function createCalendarEvent(auth: any, eventDetails: { title: string; location: string; description: string; startTime: string; endTime: string; }) {
    const calendar = google.calendar({ version: 'v3', auth });
    const event = {
        summary: eventDetails.title,
        location: eventDetails.location,
        description: eventDetails.description,
        start: {
            dateTime: eventDetails.startTime,
            timeZone: 'America/Los_Angeles',
        },
        end: {
            dateTime: eventDetails.endTime,
            timeZone: 'America/Los_Angeles',
        },
    };
    return calendar.events.insert({
        calendarId: 'primary',
        resource: event,
    });
}

export async function updateCalendarEvent(auth: any, eventId: string, eventDetails: { title: string; location: string; description: string; startTime: string; endTime: string; }) {
    const calendar = google.calendar({ version: 'v3', auth });
    const event = {
        summary: eventDetails.title,
        location: eventDetails.location,
        description: eventDetails.description,
        start: {
            dateTime: eventDetails.startTime,
            timeZone: 'America/Los_Angeles',
        },
        end: {
            dateTime: eventDetails.endTime,
            timeZone: 'America/Los_Angeles',
        },
    };
    return calendar.events.update({
        calendarId: 'primary',
        eventId: eventId,
        resource: event,
    });
}