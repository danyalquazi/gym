import React from 'react';

function LoginComponent({ onLogin, onRegister }) {
    return (
        <div className="login-container">
            <h2>Welcome!</h2>
            <p>Please sign in to continue.</p>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" onClick={onLogin}>Log In</button>
            </form>
            <div className="create-account">
                <p>Don't have an account? <button onClick={onRegister}>Create Account</button></p>
            </div>
        </div>
    );
}

export default LoginComponent;
