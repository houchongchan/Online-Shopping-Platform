import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import './dist/index.css';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Routes>
        <Route path = '/' element = {<Main />} />
        <Route path = '/about' element = {<About/> } />
        <Route path = '/products' element = {<Products />} />
        <Route path = '/products/:browser_id' element = {<SingleProduct />} />
        <Route path = '/cart' element = {<Cart />} />
        <Route path = '/checkout' element = {<CheckOut />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
