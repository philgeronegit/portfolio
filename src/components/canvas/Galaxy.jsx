import { Float, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import CanvasLoader from "../Loader";

const Galaxy = ({ isMobile }) => {
  const computer = useGLTF("./galaxy/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 3 : 7}
        position={isMobile ? [-27, -16, -5] : [-4, -7, -5]}
        rotation={[0.3, -0.2, -0.4]}
      />
    </mesh>
  );
};

const GalaxyCanvas = () => {
  const isMobile = useIsMobile();

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Float
          autoInvalidate
          speed={0.4}
          rotationIntensity={0.5}
          floatIntensity={0.8}
          floatingRange={[-0.01, 0.01]}
        >
          <Galaxy isMobile={isMobile} />
        </Float>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GalaxyCanvas;
