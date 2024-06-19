import './Dashboard.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import DraggableRadioHead from './DraggableRadioHead';
import DraggableWidget from './DraggableWidget';
import React from 'react';

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard">
        <Routes>
          <Route path="/radiohead/:id" element={<DraggableRadioHead id="1" />} />
          <Route path="/widget/:id" element={<DraggableWidget id="1" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;
