import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Component: Three.js 3D Neural Knowledge Graph & Vector Space Lattice
// Integration: Three.js interactive high-dimensional embedding nodes with mouse parallax & subtle data pulses

interface ThreeCanvasProps {
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Earthy Palette Colors
    const getColors = () => {
      const dark = isDarkMode();
      return {
        primary: dark ? 0x7a8e6b : 0x5c6b4e, // Earthy Sage
        secondary: dark ? 0xd4a373 : 0xc4a574, // Warm Tan / Clay
        core: dark ? 0x9caa8c : 0x4a5d42,
      };
    };

    let colors = getColors();

    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // 1. Central Geodesic Core (Icosahedron Wireframe representing index structure)
    const coreGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    graphGroup.add(coreMesh);

    // 2. Inner Pulsing Core
    const innerGeo = new THREE.IcosahedronGeometry(0.75, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: colors.primary,
      roughness: 0.4,
      metalness: 0.2,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    graphGroup.add(innerMesh);

    // 3. Vector Embedding Nodes (Cluster of floating 3D points)
    const nodeCount = 52;
    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];

    const nodesGeo = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      // Distribute points in a spherical shell around the core
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 1.6 + Math.random() * 0.9;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003
        )
      );

      positionsArray[i * 3] = x;
      positionsArray[i * 3 + 1] = y;
      positionsArray[i * 3 + 2] = z;
    }

    nodesGeo.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));

    // Point Material with Custom Texture / Round Glow
    const pointsMat = new THREE.PointsMaterial({
      color: colors.primary,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
    });
    const pointsMesh = new THREE.Points(nodesGeo, pointsMat);
    graphGroup.add(pointsMesh);

    // 4. Dynamic Connecting Lines (Vector Edges)
    const maxConnections = 70;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const linesMat = new THREE.LineBasicMaterial({
      color: colors.secondary,
      transparent: true,
      opacity: 0.22,
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    graphGroup.add(linesMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(colors.secondary, 2.2);
    dirLight1.position.set(5, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(colors.primary, 1.8);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.5;
      targetRotationX = y * 0.5;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Theme Observer
    const observer = new MutationObserver(() => {
      colors = getColors();
      coreMat.color.setHex(colors.secondary);
      innerMat.color.setHex(colors.primary);
      pointsMat.color.setHex(colors.primary);
      linesMat.color.setHex(colors.secondary);
      dirLight1.color.setHex(colors.secondary);
      dirLight2.color.setHex(colors.primary);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Visibility Observer
    let isVisible = true;
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      graphGroup.rotation.y = elapsedTime * 0.18 + currentRotationY;
      graphGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.1 + currentRotationX;

      coreMesh.rotation.y = -elapsedTime * 0.1;
      coreMesh.rotation.z = elapsedTime * 0.08;

      innerMesh.rotation.y = elapsedTime * 0.25;
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.05;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Animate node positions subtly
      const posAttr = nodesGeo.getAttribute('position') as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let lineIndex = 0;
      const linePosAttr = linesGeo.getAttribute('position') as THREE.BufferAttribute;
      const lineArr = linePosAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        const node = nodePositions[i];
        const vel = nodeVelocities[i];

        node.add(vel);

        // Bound within radius
        const dist = node.length();
        if (dist > 2.6 || dist < 1.4) {
          vel.multiplyScalar(-1);
        }

        posArray[i * 3] = node.x;
        posArray[i * 3 + 1] = node.y;
        posArray[i * 3 + 2] = node.z;

        // Connect nearby nodes with edges
        for (let j = i + 1; j < nodeCount; j++) {
          const other = nodePositions[j];
          const edgeDist = node.distanceTo(other);

          if (edgeDist < 0.95 && lineIndex < maxConnections) {
            lineArr[lineIndex * 6] = node.x;
            lineArr[lineIndex * 6 + 1] = node.y;
            lineArr[lineIndex * 6 + 2] = node.z;

            lineArr[lineIndex * 6 + 3] = other.x;
            lineArr[lineIndex * 6 + 4] = other.y;
            lineArr[lineIndex * 6 + 5] = other.z;

            lineIndex++;
          }
        }
      }

      posAttr.needsUpdate = true;
      linePosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      io.disconnect();
      cancelAnimationFrame(animationFrameId);
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodesGeo.dispose();
      pointsMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[300px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};

