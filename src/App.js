import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Clients from './components/pages/Clients';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import ProductDetails from './components/pages/ProductDetails'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
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
