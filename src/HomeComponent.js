import React from 'react';

function HomeComponent() {
    return (
        <div className="home-container">
            <h2>Welcome back, Mr Muscle!</h2>
            <div className="user-info">
                <p>Email: mr.muscle@example.com</p>
                <p>Membership Type: Premium</p>
            </div>
            <div className="navigation">
                <button onClick={() => console.log("Navigate to Schedule")}>Schedule</button>
                <button onClick={() => console.log("Navigate to Classes")}>Classes</button>
                <button onClick={() => console.log("Navigate to Trainers")}>Trainers</button>
                <button onClick={() => console.log("Navigate to Progress")}>Progress</button>
            </div>
            <div className="logout">
                <button type="button">Log Out</button>
            </div>
            <div className="feature-section">
                <h3>Featured Classes</h3>
                <p>Join our high-intensity interval training (HIIT) class every Monday and Wednesday at 6 PM!</p>
                <p>Explore our yoga sessions for a peaceful mind and a flexible body.</p>
            </div>
        </div>
    );
}

export default HomeComponent;
