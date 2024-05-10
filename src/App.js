import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Clients from './components/pages/Clients';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import ProductDetails from './components/pages/ProductDetails'; 

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<ProductDetails />} /> 
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
