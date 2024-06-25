// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FindDoctors from './Pages/FindDoctors';
import Booking from './Components/Booking';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findDoctors" element={<FindDoctors />} />
          <Route path="/bookings" element={<Booking />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
