import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import {About, Contact, Footer, Home, Navbar, Services } from "./components";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
