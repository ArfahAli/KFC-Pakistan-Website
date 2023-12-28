import {Routes, Route, } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Details from './Pages/ProductDetails';
import Product from './Pages/Product';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<Details />} />

              {/* <PassProduct/> */}
              {/* <NewPage/> */}
</Routes>

    </div>
  );
}

export default App;
