import {useRef} from "react";
import {useFrame} from "react-three-fiber";
import {Mesh} from "three";
import "./styles.css";

export const Cube = () => {
    const cube = useRef<Mesh>(null);

    useFrame(() => {
        cube.current!.rotation.x += 0.01;
        cube.current!.rotation.y += 0.01;
    });

    return (
        <mesh ref={cube}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0391BA" />
        </mesh>
    );
};

export const Scene = () => {
    return (
        <>
            <gridHelper />
            <axesHelper />
            <pointLight intensity={1.0} position={[5, 3, 5]} />
            <Cube />
        </>
    );
};

