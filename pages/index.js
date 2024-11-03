import { Jetbus } from "@/components/Jerbus";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";

const index = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Canvas camera={{ zoom: 10, position: [0, 0, -50]  }}>
        <color attach="background" args={["#141414"]} />
        <Environment preset="forest"/>
        <OrbitControls 
        />
        <Jetbus />
      </Canvas>
    </div>
  )
}

export default index;