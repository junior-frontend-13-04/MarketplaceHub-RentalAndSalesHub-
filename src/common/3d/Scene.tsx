import {Cube} from "src/common/3d/Cube";

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
