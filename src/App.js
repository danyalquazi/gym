import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import HomeComponent from './HomeComponent';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleRegister = () => {
        setIsRegistering(true);
    };

    return (
        <div>
            {!isLoggedIn && !isRegistering && <LoginComponent onLogin={handleLogin} onRegister={handleRegister} />}
            {isRegistering && <RegisterComponent setIsRegistering={setIsRegistering} />}
            {isLoggedIn && <HomeComponent />}
        </div>
    );
}

export default App;
