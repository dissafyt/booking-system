import React, { useEffect, useState } from 'react';
import { getAvailableSlots } from '../api/calendarApi'; // Assume this API function fetches available slots

const AvailableSlots = () => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSlots = async () => {
            try {
                const availableSlots = await getAvailableSlots();
                setSlots(availableSlots);
            } catch (err) {
                setError('Failed to fetch available slots');
            } finally {
                setLoading(false);
            }
        };

        fetchSlots();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Available Time Slots</h2>
            <ul>
                {slots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                ))}
            </ul>
        </div>
    );
};

export default AvailableSlots;