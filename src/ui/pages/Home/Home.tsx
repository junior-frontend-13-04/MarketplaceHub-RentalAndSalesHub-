import React from 'react';
import {NavBar} from "src/ui/components/navbar/NavBar";
import {My3DModel} from "src/ui/components/common/3d/My3DModel";

export const Home = () => {
    return (
        <div>
            <NavBar/>
            <My3DModel/>
        </div>
    );
};

