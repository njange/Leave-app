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
          <div className="user-section">
            <span className="welcome-text">Welcome, {user?.username}!</span>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏖️</div>
              <div className="stat-info">
                <h3>Available Leave Days</h3>
                <p className="stat-number">25</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-info">
                <h3>Used Leave Days</h3>
                <p className="stat-number">5</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⏳</div>
              <div className="stat-info">
                <h3>Pending Requests</h3>
                <p className="stat-number">2</p>
              </div>
            </div>
          </div>

          <div className="dashboard-actions">
            <div className="action-card">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="action-button primary">
                  📝 Request Leave
                </button>
                <button className="action-button secondary">
                  📊 View History
                </button>
                <button className="action-button secondary">
                  👤 Profile Settings
                </button>
              </div>
            </div>
          </div>

          <div className="user-info-card">
            <h3>Your Profile</h3>
            <div className="user-details">
              <div className="detail-row">
                <span className="detail-label">Username:</span>
                <span className="detail-value">{user?.username}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{user?.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">User ID:</span>
                <span className="detail-value">{user?.id}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
