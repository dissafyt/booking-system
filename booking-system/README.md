# Booking System

This project is a booking system that allows users to book appointments and sync them with Google Calendar. It utilizes Firebase for authentication and data storage, and integrates with the Google Calendar API for managing events.

## Features

- User authentication via Firebase (Google Sign-In and Email/Password).
- Booking appointments with available time slots fetched from Google Calendar.
- Syncing appointments with Google Calendar and storing details in Firestore.
- User profile management for viewing booking history and account settings.

## Project Structure

```
booking-system
├── functions                # Firebase Functions for backend logic
│   ├── src
│   │   ├── index.ts        # Entry point for Firebase Functions
│   │   ├── calendar.ts     # Functions for Google Calendar operations
│   │   └── auth.ts         # User authentication functions
│   ├── package.json        # Dependencies for Firebase Functions
│   └── tsconfig.json       # TypeScript configuration for Firebase Functions
├── public                  # Front-end assets
│   ├── index.html          # Main HTML file for the web app
│   └── styles.css          # Styles for the front-end application
├── src                     # Front-end source code
│   ├── components          # React components
│   │   ├── BookingForm.tsx # Component for booking form
│   │   ├── AvailableSlots.tsx # Component for displaying available slots
│   │   └── UserProfile.tsx # Component for user profile management
│   ├── pages               # React pages
│   │   ├── Home.tsx       # Home page component
│   │   ├── Login.tsx      # Login page component
│   │   └── Dashboard.tsx   # User dashboard component
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for the React application
│   └── firebaseConfig.ts   # Firebase configuration settings
├── .firebaserc            # Firebase project settings
├── firebase.json           # Firebase Hosting configuration
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration for the front-end
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd booking-system
   ```

2. **Install dependencies:**
   - For Firebase Functions:
     ```
     cd functions
     npm install
     ```
   - For the front-end:
     ```
     cd ..
     npm install
     ```

3. **Firebase Configuration:**
   - Create a Firebase project in the Firebase Console.
   - Enable Firestore and Authentication (Google Sign-In and Email/Password).
   - Set up Firebase Hosting if deploying the web app.

4. **Google Calendar API Setup:**
   - Create a Google Cloud project and enable the Google Calendar API.
   - Set up OAuth 2.0 credentials and configure the redirect URI.

5. **Deploying the Application:**
   - Deploy Firebase Functions:
     ```
     cd functions
     firebase deploy --only functions
     ```
   - Deploy the front-end:
     ```
     cd ..
     firebase deploy --only hosting
     ```

## Usage

- Users can log in using their Google account or email/password.
- After logging in, users can view available time slots and book appointments.
- Bookings are synced with Google Calendar, and users can manage their profiles and view booking history.

## License

This project is licensed under the MIT License.