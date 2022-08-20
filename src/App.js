import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Main from './Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
