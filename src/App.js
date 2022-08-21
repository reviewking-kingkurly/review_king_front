import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import ProductDetail from './ProductDetail/ProductDetail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductDetail />} />{' '}
        {/*<Route path="/products/:id" element={<ProductDetail />} /> */}
      </Routes>
    </>
  );
}

export default App;
