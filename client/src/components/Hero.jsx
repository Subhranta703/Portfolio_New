import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import Subhranta from "../assets/Pic.jpg";
import "./Hero.css";

// 3D Model Component
const Model = () => {
  const { scene } = useGLTF("/models/welcome3D.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Smooth rotation
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1.2} position={[0, -1, 0]} />;
};

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Navbar Toggle State

  return (
    <div className="hero">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">SN</h2>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <div className="hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <h1>Subhranta Nayak</h1>
          <p>Full Stack Developer | MERN | Open Source Contributor</p>
          <a href="#contact" className="btn contact-btn">Contact Me</a>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/subhranta-nayak" target="_blank">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Subhranta703" target="_blank">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://leetcode.com/Subhranta703" target="_blank">
              <i className="fas fa-code"></i> LeetCode
            </a>
            <a href="https://www.geeksforgeeks.org/user/Subhranta703" target="_blank">
              <i className="fas fa-graduation-cap"></i> GeeksforGeeks
            </a>
          </div>
        </div>

        {/* Right: Image + 3D Model */}
        <div className="hero-image-container">
          <img src={Subhranta} alt="Subhranta Nayak" className="hero-image" />
          <div className="hero-3d">
            <Canvas camera={{ position: [0, 1, 5] }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[3, 3, 3]} />
              <Model />
              <OrbitControls autoRotate autoRotateSpeed={0.3} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
