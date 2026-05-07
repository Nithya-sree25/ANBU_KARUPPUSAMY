import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journal from "./components/Journal";
import Achievements from "./components/Achievements";
import Membership from "./components/Membership";
import Patent from "./components/Patent";
import Contact from "./components/Contact";
import SCI from "./pages/SCI";
import Scopus from "./pages/Scopus";
import UGC from "./pages/UGC";
import ResearchGuidance from "./components/ResearchGuidance";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/patent" element={<Patent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sci" element={<SCI />} />
        <Route path="/scopus" element={<Scopus />} />
        <Route path="/ugc" element={<UGC />} />
        <Route path="/research-guidance" element={<ResearchGuidance />} />
      </Routes>
    </Router>
  );
}

export default App;