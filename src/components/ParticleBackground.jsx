import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(2000), { radius: 1.2 })], []); // Reduced particles

  useFrame(useCallback((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15; // Slower rotation
      ref.current.rotation.y -= delta / 20;
    }
  }, []));

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true} {...props}>
        <PointMaterial
          transparent
          color="#4ecdc4"
          size={0.004} // Slightly smaller
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const ParticleBackground = React.memo(() => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
    }}>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        performance={{ min: 0.5 }} // Performance scaling
      >
        <Stars />
      </Canvas>
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;