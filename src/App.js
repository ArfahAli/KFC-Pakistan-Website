import Footer from './Pages/Footer';
import {Routes, Route, BrowserRouter,Link} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Details from './Pages/ProductDetails';
import Product from './Pages/Product';
import NewPage from './Pages/Q1Page';
import PassProduct from './Pages/passingData';
function App() {
  return (

    <div>
              {/* < Home /> */}
              <Product/> 
              {/* <PassProduct/> */}
              {/* <NewPage/> */}


    </div>
  );
}

export default App;
