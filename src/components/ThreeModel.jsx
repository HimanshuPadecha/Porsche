import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Sky, useGLTF } from "@react-three/drei";
import model from "../assets/porche.glb";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Model({ url }) {
  const { scene } = useGLTF(url);

  const carRef = useRef();

  // Optional: Add rotation animation to the car
  useFrame((state, delta) => {
    if (carRef.current) {
      carRef.current.rotation.y += delta * 0.2; // Rotate the car slowly
    }
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} ref={carRef} position={[0, 0, 0]} />;
}
gsap.registerPlugin(ScrollTrigger)

function ThreeModel() {
  const mainRef = useRef(null)

  // useEffect(()=>{
  //   const main = mainRef.current

  //   gsap.fromTo(main,
  //     {
  //       width:"100%",
  //       borderRadius:"0px"
  //     },
  //     {
  //       width:"80%",
  //       borderRadius:"20px",
  //       scrollTrigger:{
  //         trigger:"main",
  //         start:"top 70%",
  //         end:"bottom top",
  //         scrub:true,
  //       }
  //     }
  //   )
  // },[])


  return (
    <>
      <h1 className="text-center text-change text-2xl mt-5 sm:text-5xl">Energetic. From every perspective.</h1>
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="h-[80%] w-[80%]  cursor-grab relative" ref={mainRef}>

          <Canvas
            shadows
            camera={{ position: [0, 20, 20], fov: 15 }} // Adjusted for better initial view
            className="rounded-2xl"
          >
            <ambientLight intensity={1} color={"#ffffff"}/>
            <directionalLight
              castShadow
              position={[10, 10, 5]}
              intensity={1}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              color={"#ffffff"}
            />
            <Sky
              distance={50000} // Distance to the sky (default is 450000)
              sunPosition={[10, 10, 0]} // Position of the sun (x, y, z)
              inclination={0} // Sun inclination (0 is noon, 1 is sunset/sunrise)
              azimuth={0.25} // Sun rotation around the horizon (0 to 1)
              turbidity={10} // Atmospheric haze (default is 10)
              rayleigh={2} // Rayleigh scattering (default is 2)
              mieCoefficient={0.005} // Mie scattering coefficient (default is 0.005)
              mieDirectionalG={0.8} // Mie directional scattering (default is 0.8)
            />
            <pointLight position={[10, 10, 10]} intensity={1.0} color={"#ffffff"} />
            <hemisphereLight intensity={0.5} color={"#ffffff"} groundColor={"#cccccc"} />
            {/* 🌆 Environment Lighting (HDRI) */}
            <Environment preset="sunset" /> {/* Realistic reflections */}
            <mesh
              receiveShadow
              position={[0, -1, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#888888"  />
            </mesh>
            {/* Car Model */}
            <Model url={model} />
            {/* OrbitControls for Interaction */}
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
              minDistance={3}
              maxDistance={15}
              // maxPolarAngle={Math.PI / 2} // Locks vertical movement
              // minPolarAngle={Math.PI / 2}
            target={[0, 1, 0]}
            />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default ThreeModel;
