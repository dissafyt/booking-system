import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Import Firestore configuration
import { useAuth } from '../hooks/useAuth'; // Custom hook for authentication
import UserProfile from '../components/UserProfile';
import AvailableSlots from '../components/AvailableSlots';

const Dashboard: React.FC = () => {
    const { user } = useAuth(); // Get the authenticated user
    const [bookings, setBookings] = useState<any[]>([]); // State to hold user bookings

    useEffect(() => {
        if (user) {
            const fetchBookings = async () => {
                const bookingsRef = db.collection('bookings').where('userId', '==', user.uid);
                const snapshot = await bookingsRef.get();
                const userBookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBookings(userBookings);
            };

            fetchBookings();
        }
    }, [user]);

    return (
        <div>
            <h1>Dashboard</h1>
            {user && <UserProfile user={user} />}
            <h2>Your Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.title} - {booking.date} at {booking.time}
                    </li>
                ))}
            </ul>
            <AvailableSlots />
        </div>
    );
};

export default Dashboard;