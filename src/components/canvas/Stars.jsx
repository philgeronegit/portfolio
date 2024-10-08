import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useContext, useRef, useState } from "react";
import * as THREE from "three";
import { DarkModeContext } from "../DarkModeContext";
import CanvasLoader from "../Loader";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 }),
  );
  const { scene } = useThree();
  const isDarkMode = useContext(DarkModeContext);
  const color = isDarkMode ? "black" : "#50515d";
  const starsColor = isDarkMode ? "#b9181e" : "#e5d650";

  scene.background = new THREE.Color(color);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={starsColor}
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ clearColor: "black" }}>
        <Suspense fallback={CanvasLoader}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
