import React, { useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { ThemeContext } from "../contexts/ThemeContext";

function ThreeBackground({ children }) {
  const containerRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let scene, camera, renderer;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.z = 1000;

    // Lighter fog color based on theme
    scene.fog = new THREE.FogExp2(
      theme === "dark" ? 0x222222 : 0xffffff,
      theme === "dark" ? 0.001 : 0.0005 // Reduced fog density for bright mode
    );

    // Geometry setup
    const geometry = new THREE.BufferGeometry();
    const particleCount = 60000;
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 2000 - 1000;
      positions[i * 3 + 1] = Math.random() * 2000 - 1000;
      positions[i * 3 + 2] = Math.random() * 2000 - 1000;
      speeds[i] = Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Materials and particles sizes with consistent highlight color
    const parameters = [
      [[1, 1, 0.5], theme === "dark" ? 5 : 7], // Increased sizes for bright mode
      [[0.95, 1, 0.5], theme === "dark" ? 4 : 6],
      [[0.9, 1, 0.5], theme === "dark" ? 3 : 5],
      [[0.85, 1, 0.5], theme === "dark" ? 2 : 4],
      [[0.8, 1, 0.5], theme === "dark" ? 1 : 3],
    ];

    const particleColor = new THREE.Color("#e1c16e");

    const materials = parameters.map(([, size]) => {
      return new THREE.PointsMaterial({
        size,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: true,
        opacity: theme === "dark" ? 0.4 : 0.8, // Increased opacity for bright mode
        color: particleColor,
      });
    });

    const particleSystems = materials.map((material) => {
      const particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
      return particles;
    });

    // Renderer setup with proper alpha
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    // Mouse interaction
    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) * 2;
      mouseY = (event.clientY - windowHalfY) * 2;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    document.addEventListener("mousemove", onDocumentMouseMove, false);
    window.addEventListener("resize", onWindowResize, false);

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.015;
      camera.position.y += (-mouseY - camera.position.y) * 0.015;
      camera.lookAt(scene.position);

      // Update particle rotations
      particleSystems.forEach((particles, i) => {
        particles.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      });

      // Update particles
      const positions = geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Add wave motion
        positions[i3 + 1] +=
          Math.sin((positions[i3] + time) * 0.5) * speeds[i] * 2;

        // Add mouse interaction
        const dx = mouseX - positions[i3];
        const dy = -mouseY - positions[i3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          positions[i3] += dx * 0.01;
          positions[i3 + 1] += dy * 0.01;
        }

        // Reset particles that go too far
        if (positions[i3 + 1] > 1000) positions[i3 + 1] = -1000;
        if (positions[i3 + 1] < -1000) positions[i3 + 1] = 1000;
      }

      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      container?.removeChild(renderer.domElement);
      scene.clear();
      geometry.dispose();
      materials.forEach((m) => m.dispose());
    };
  }, [theme]); // Add theme as dependency

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -10,
          background: theme === "dark" ? "#0a0a0a" : "#f8f9fa",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </>
  );
}

export default ThreeBackground;
