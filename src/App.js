import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import ProductDetail from './ProductDetail/ProductDetail';
=======
import ReviewWrite from './pages/Review/ReviewWrite';
import ReviewPost from './pages/Review/ReviewPost';
import Search from './pages/Search/Search';
>>>>>>> origin

function App() {
  return (
    <>
      <NavBar />
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductDetail />} />{' '}
        {/*<Route path="/products/:id" element={<ProductDetail />} /> */}
=======
        <Route path="/review_write" element={<ReviewWrite />} />
        <Route path="/review_post" element={<ReviewPost />} />
        <Route path="/search" element={<Search />} />
>>>>>>> origin
      </Routes>
    </>
  );
}

export default App;
