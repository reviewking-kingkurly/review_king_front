import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReviewWrite from './pages/Review/ReviewWrite';
import ReviewPost from './pages/Review/ReviewPost';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/review_write" element={<ReviewWrite />} />
        <Route path="/review_post" element={<ReviewPost />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
