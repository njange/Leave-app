import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

interface LoginProps {
  onToggleMode: () => void;
  isRegisterMode: boolean;
}

const Login: React.FC<LoginProps> = ({ onToggleMode, isRegisterMode }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [localError, setLocalError] = useState<string | null>(null);

  const { login, register, loading, error } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setLocalError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (isRegisterMode) {
      // Registration validation
      if (formData.password !== formData.confirmPassword) {
        setLocalError('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        setLocalError('Password must be at least 6 characters long');
        return;
      }
      if (!formData.email || !formData.username) {
        setLocalError('All fields are required');
        return;
      }

      try {
        await register(formData.username, formData.email, formData.password);
      } catch (error) {
        // Error is handled by context
      }
    } else {
      // Login validation
      if (!formData.username || !formData.password) {
        setLocalError('Username and password are required');
        return;
      }

      try {
        await login(formData.username, formData.password);
      } catch (error) {
        // Error is handled by context
      }
    }
  };

  const displayError = localError || error;

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>{isRegisterMode ? 'Create Account' : 'Welcome Back'}</h2>
          <p>
            {isRegisterMode
              ? 'Sign up to get started with your leave management'
              : 'Sign in to access your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          {isRegisterMode && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {isRegisterMode && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          {displayError && <div className="error-message">{displayError}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading
              ? 'Please wait...'
              : isRegisterMode
              ? 'Sign Up'
              : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className="toggle-mode-button"
              onClick={onToggleMode}
            >
              {isRegisterMode ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
