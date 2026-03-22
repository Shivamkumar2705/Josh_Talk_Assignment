import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import VidyaDashboard from './pages/VidyaDashboard';

function App() {
  return (
    <Router>
      {/* Add Toaster here so it works everywhere */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      
      <Routes>
        <Route path="/" element={<VidyaDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;