import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import "src/ui/styles/main.scss";
import {useAppDispatch, useAppSelector} from "src/dal/Redux/store";
import {me} from "src/dal/Redux/auth-reducer";
import {My3DModel} from "src/ui/components/common/3d/My3DModel";
import Preloader from "src/ui/components/common/Preloader/Preloader";
import Registration from "src/ui/pages/Registration/Registration";
import Login from "src/ui/pages/Login/Login";
import NewPassword from "src/ui/pages/NewPassword/NewPassword";
import RecoveryPassword from "src/ui/pages/RecoveryPassword/RecoveryPassword";
import NotFound from "src/ui/pages/NotFound/NotFound";
import {NavBar} from "src/ui/components/navbar/NavBar";




function App() {
    const dispatch = useAppDispatch();
    const isInitialized = useAppSelector(state => state.app.isInitialized);

    useEffect(() => {
        dispatch(me())
    }, [dispatch])


    return (
        <div className="App">
            <NavBar/>
            <My3DModel/>
            {!isInitialized
                ? <Preloader/>
                : <div className="content">
                    <Routes>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/recovery-password" element={<RecoveryPassword/>}/>
                        <Route path="/set-new-password/:token" element={<NewPassword/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </div>
            }
        </div>
    );
}

export default App;


