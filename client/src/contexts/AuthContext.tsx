import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '../services/api';

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in on app start
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          setLoading(true);
          const userData = await authAPI.getProfile();
          setUser(userData);
          setToken(storedToken);
        } catch (error) {
          // Token is invalid, remove it
          localStorage.removeItem('token');
          setToken(null);
        } finally {
          setLoading(false);
        }
      }
    };

    initializeAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authAPI.login(username, password);
      
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem('token', response.token);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authAPI.register(username, email, password);
      
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem('token', response.token);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Registration failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    setError(null);
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
