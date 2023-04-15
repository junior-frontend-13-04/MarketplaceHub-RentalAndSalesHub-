import {Canvas} from "react-three-fiber";
import {OrbitControls, Stats} from "@react-three/drei";
import {Suspense} from "react";
import {Scene} from "src/common/Cube";
import './App.css';

export const App = () => {
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
            }}
        >
            <Canvas
                camera={{
                    near: 0.1,
                    far: 1000,
                    zoom: 1,
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor("#252934");
                }}
            >
                <Stats />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

