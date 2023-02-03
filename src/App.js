import "./App.css";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./components/projects/projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <About />
        {/* <Projects /> */}
      </Router>
    </>
  );
}

export default App;
