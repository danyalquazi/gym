import React, { useState } from 'react';

function RegisterComponent({ setIsRegistering }) {
    const [dobInputType, setDobInputType] = useState('text');

    const showDatePicker = () => {
        setDobInputType('date');
    };

    return (
        <div className="register-container">
            <h2>Create an Account</h2>
            <form>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input
                    type={dobInputType}
                    id="dob"
                    placeholder="Date of Birth"
                    onFocus={showDatePicker}
                    onClick={showDatePicker}
                    required
                />
                <input type="text" placeholder="Address Line 1" required />
                <input type="text" placeholder="Address Line 2" />
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="County" required />
                <input type="text" placeholder="Eircode" required />
                <input type="tel" placeholder="Mobile Phone" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
            </form>
            <div className="login-link">
                <p>Already have an account? <button onClick={() => setIsRegistering(false)}>Log In</button></p>
            </div>
        </div>
    );
}

export default RegisterComponent;
