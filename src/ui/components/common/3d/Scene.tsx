import {Cube} from "src/ui/components/common/3d/Cube";
import React from "react";

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

