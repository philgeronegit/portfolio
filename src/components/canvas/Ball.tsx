import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  Sparkles,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

interface BallProps {
  imgUrl: string;
}

const Ball: React.FC<BallProps> = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float autoInvalidate speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
        />
        <Sparkles count={100} scale={1.4} size={4} speed={0.4} />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
