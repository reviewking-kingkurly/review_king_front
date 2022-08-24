import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';
import Main from './pages/Main/Main';
import NavBar from './pages/NavBar/NavBar';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ReviewWrite from './pages/Review/ReviewWrite';
import ReviewPost from './pages/Review/ReviewPost';
import Search from './pages/Search/Search';

function App() {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <>
      {!(currentURL === '/login') && <NavBar />}
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/review_write/:id" element={<ReviewWrite />} />
        <Route path="/review/:id" element={<ReviewPost />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
