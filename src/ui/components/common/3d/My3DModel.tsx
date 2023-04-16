import {Canvas} from "react-three-fiber";
import {OrbitControls, Stats} from "@react-three/drei";
import React, {Suspense} from "react";
import 'src/ui/components/common/3d/My3DModel.scss';
import {Scene} from "src/ui/components/common/3d/Scene";



export const My3DModel = () => {
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
                onCreated={({gl}) => {
                    gl.setClearColor("#252934");
                }}
            >
                <Stats/>
                <OrbitControls/>
                <Suspense fallback={null}>
                    <Scene/>
                </Suspense>
            </Canvas>
        </div>
    );
};

