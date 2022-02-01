import "./App.css";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { About } from "./components/about/about";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <About />
        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
