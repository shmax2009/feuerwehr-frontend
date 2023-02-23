import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import LoginPage from "./pages/login-page/login-page";

const App = () => {
    return (
        <Routes>
            <Route path="/anmelden" element={<LoginPage/>}></Route>
            <Route path='*' element={<Navigate to="/anmelden"/>}/>
        </Routes>
    )
        ;
}

export default App;
