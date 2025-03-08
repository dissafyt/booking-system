import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookingForm from './components/BookingForm';
import AvailableSlots from './components/AvailableSlots';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/book" component={BookingForm} />
        <Route path="/slots" component={AvailableSlots} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;