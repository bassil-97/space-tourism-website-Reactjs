import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
