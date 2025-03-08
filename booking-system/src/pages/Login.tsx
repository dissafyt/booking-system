import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const history = useHistory();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            history.push('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;