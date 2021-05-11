import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { DoubleSide } from "three";
import QuestionSet from "../components/stories/QuestionSet";
import { GuessData } from "./api/guessData";
import {
  generateQuestionsForDiagnostic,
  TestLength,
  Topic,
} from "./api/questionGenerator";

// Drei is a really helpful library
// It has helpers for react-three-fiber
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

// Our main React component renders a Canvas from
// react-three-fiber. The Canvas component does most
// of the hard work of setting up the scene, renderer
// and other core components of Three.js
export default function App() {
  return (
    <div>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        {/*
           A group is used for grouping, kind og like
          groups in SVGs. The positioning of elements
          inside a group is relative to the group's
          position.
        */}
        <group>
          {/* All these are in the same group */}
          <GreenSquare />
          <ToolTip1 />
          <ToolTip2 />
          <ToolTip3 />
        </group>
        {/* Let there be light! */}
        <ambientLight />
        {/*
          Use a PerspectiveCamera.
          PerspectiveCameras work like real works cameras
          and provide depth perception.
        */}
        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
        {/*
          This lets you rotate the camera.
          We've associated our React ref with it
          like we would do for any React component
        */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// This is the thing we are interested in
// The GreenSquare component renders a mesh.
// Meshes are objects that can have a shape and
// texture.
function GreenSquare() {
  return (
    // The mesh is at the origin
    // Since it is inside a group, it is at the origin
    // of that group
    // It's rotated by 90 degrees along the X-axis
    // This is because, by default, planes are rendered
    // in the X-Y plane, where Y is the up direction
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <planeBufferGeometry />
      {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
      <meshBasicMaterial color="green" side={DoubleSide} />
    </mesh>
  );
}

// The rest of the components are just tooltips
// Drei's Html component lets you render any HTML
// inside the 3d scene. It follows the same rules
// as everything else when it comes to positioning,
// but is not actually rendered inside the canvas

function ToolTip1() {
  return (
    <Html center position={[-1, 1, -1]}>
      <p className="bg-blue-400">
        Click and drag on the white part to move the camera
      </p>
    </Html>
  );
}

function ToolTip2() {
  return (
    <Html center position={[1, -1, -1]}>
      <p className="bg-blue-400">Scroll to zoom in and out</p>
    </Html>
  );
}

function ToolTip3() {
  const [index, setIndex] = useState(0);

  const testLength = TestLength.MEDIUM;
  const topics = [Topic.ADDITION];
  const questionData = generateQuestionsForDiagnostic(testLength, topics);
  const inputElement = useRef(null);
  const submitGuess = (guessData) => {
    console.log(guessData);
    setIndex(index + 1);
  };
  return (
    <Html center position={[-1, -1, 1]}>
      <div className="bg-blue-400">
        <QuestionSet
          title=""
          questionData={questionData}
          index={index}
          inputElement={inputElement}
          submitGuess={submitGuess}
        />
      </div>
    </Html>
  );
}
