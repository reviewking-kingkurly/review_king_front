import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import ProductDetail from './ProductDetail/ProductDetail';
import ReviewWrite from './pages/Review/ReviewWrite';
import ReviewPost from './pages/Review/ReviewPost';
import Search from './pages/Search/Search';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/review_write" element={<ReviewWrite />} />
        <Route path="/review_post" element={<ReviewPost />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
