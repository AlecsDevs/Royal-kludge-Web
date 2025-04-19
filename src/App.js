// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Product from './pages/Product';
import About from './pages/About';
import Footer from './components/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="product">
        <Product />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

