import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services"
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    {/* <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about"> About</Link>
    </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
