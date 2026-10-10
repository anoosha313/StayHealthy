import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Navbar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
