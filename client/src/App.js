// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-body">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
      
        {/* Main Content */}
        <Home />
      </div>

      {/* Footer (optional) */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
       Made with ❤️ by <a href="https://www.srmkzilla.net/" target='_blank' className="hover:text-orange-500">SRMKZILLA</a>
      </footer>
    </div>
  );
};

export default App;
