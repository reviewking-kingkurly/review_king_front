import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Router from './Router';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/*" element={<Router />} />
    </Routes>
  );
}

export default App;
