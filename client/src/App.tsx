import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function AppContent() {
  const { user } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  if (user) {
    return <Dashboard />;
  }

  return (
    <Login onToggleMode={toggleMode} isRegisterMode={isRegisterMode} />
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;
