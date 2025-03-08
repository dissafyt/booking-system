import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Import Firestore configuration
import firebase from 'firebase/app';
import 'firebase/firestore';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);

    useEffect(() => {
        // Fetch available slots from Firestore or Google Calendar
        const fetchAvailableSlots = async () => {
            // Logic to fetch available slots
            // Example: const slots = await getAvailableSlotsFromCalendar();
            // setAvailableSlots(slots);
        };
        fetchAvailableSlots();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingDetails = {
            date,
            time,
            description,
            userId: firebase.auth().currentUser.uid,
        };

        // Store booking in Firestore
        await db.collection('bookings').add(bookingDetails);
        
        // Logic to create event in Google Calendar
        // Example: await createCalendarEvent(auth, bookingDetails);
        
        // Reset form
        setDate('');
        setTime('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book an Appointment</h2>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <label>
                Time:
                <select value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">Select a time</option>
                    {availableSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                    ))}
                </select>
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default BookingForm;