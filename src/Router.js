import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import ProductDetail from './ProductDetail/ProductDetail';

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default Router;
