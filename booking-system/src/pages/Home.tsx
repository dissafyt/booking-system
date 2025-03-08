import React from 'react';
import BookingForm from '../components/BookingForm';
import AvailableSlots from '../components/AvailableSlots';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Booking System</h1>
            <BookingForm />
            <AvailableSlots />
        </div>
    );
};

export default Home;