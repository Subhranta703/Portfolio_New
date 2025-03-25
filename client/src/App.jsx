import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Experience />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
