import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Foreigner from "../pages/Foreigner";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/white" element={<Foreigner />} />
        </Routes>
    );
}

export default Routers;