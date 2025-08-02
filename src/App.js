import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
        {/* Add other pages here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
