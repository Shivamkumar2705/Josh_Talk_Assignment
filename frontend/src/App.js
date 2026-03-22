import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import VidyaDashboard from './pages/VidyaDashboard';

function App() {
  return (
    <Router>
      {/* Add Toaster here so it works everywhere */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3200,
          className: '!bg-slate-900 !text-slate-100 !border !border-white/10 !shadow-xl',
          style: { fontSize: '14px' },
        }}
      />
      
      <Routes>
        <Route path="/" element={<VidyaDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;