// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Home />
      </div>

      {/* Footer (optional) */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Notes App. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
