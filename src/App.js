import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journal from "./components/Journal";
import Conference from "./components/Conference";
import Certification from "./components/Certification";
import Membership from "./components/Membership";

import Contact from "./components/Contact";
import SCI from "./pages/SCI";
import Scopus from "./pages/Scopus";
import UGC from "./pages/UGC";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/membership" element={<Membership />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/sci" element={<SCI />} />
        <Route path="/scopus" element={<Scopus />} />
        <Route path="/ugc" element={<UGC />} />
      </Routes>
    </Router>
  );
}

export default App;