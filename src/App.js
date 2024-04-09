import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Clients from "./components/pages/Clients"
import Contact from "./components/pages/Contact"
import Gallery from "./components/pages/Gallery"
import Products from "./components/pages/Products"
import "./App.css";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <div className="banner"></div>
      <Routes>
        <Route path= "/about" element = {<About />} />
        <Route path= "/home" element = {<Home />} />
        <Route path= "/clients" element = {<Clients />} />
        <Route path= "/contact" element = {<Contact />} />
        <Route path= "/gallery" element = {<Gallery />} />
        <Route path= "/products" element = {<Products />} />
      </Routes>
    </div>
  );
}

export default App;
