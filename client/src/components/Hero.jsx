import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Subhranta from "../assets/Pic.jpg";
import "./Hero.css";

const Model = () => {
  const { scene } = useGLTF("/models/welcome3D.glb"); // Load 3D model
  const modelRef = useRef();

  // Auto-rotation for model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return <primitive object={scene} ref={modelRef} scale={2.5} position={[0, -1, 0]} />;
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Background 3D Model (Centered) */}
      <div className="hero-3d">
        <Canvas camera={{ position: [0, 1, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} />
          <Model />
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Canvas>
      </div>

      {/* Hero Content (Text & Image) */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Subhranta Nayak</h1>
          <p>Full Stack Developer | MERN | Open Source Contributor</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
        <div className="hero-image">
          <img src={Subhranta} alt="Subhranta Nayak" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
