import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseConfig';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const bookingsRef = firestore.collection('bookings').where('userId', '==', currentUser.uid);
                const snapshot = await bookingsRef.get();
                const userBookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBookings(userBookings);
            } else {
                setUser(null);
                setBookings([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await auth.signOut();
    };

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <button onClick={handleLogout}>Logout</button>
                    <h3>Your Bookings</h3>
                    <ul>
                        {bookings.map(booking => (
                            <li key={booking.id}>
                                {booking.title} - {new Date(booking.startTime).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default UserProfile;