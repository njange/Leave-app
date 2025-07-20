import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Leave Management System</h1>
          <div className="user-info">
            <span>Welcome, {user?.username}!</span>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-card">
            <h2>Welcome to Your Dashboard</h2>
            <p>You have successfully logged in to the Leave Management System.</p>
            
            <div className="user-details">
              <h3>Your Profile</h3>
              <div className="detail-item">
                <label>Username:</label>
                <span>{user?.username}</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{user?.email}</span>
              </div>
              <div className="detail-item">
                <label>User ID:</label>
                <span>{user?.id}</span>
              </div>
            </div>

            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="action-button primary">
                  Request Leave
                </button>
                <button className="action-button secondary">
                  View Leave History
                </button>
                <button className="action-button secondary">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
