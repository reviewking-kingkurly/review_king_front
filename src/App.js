import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReviewWrite from './pages/Review/ReviewWrite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/review_write" element={<ReviewWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
