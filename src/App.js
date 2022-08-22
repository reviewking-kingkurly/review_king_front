import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Search from './pages/Search/Search';
import ReviewPost from './pages/Review/ReviewPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/review_post" element={<ReviewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
