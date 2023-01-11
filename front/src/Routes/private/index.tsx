import React from "react";
import { Routes, Route } from "react-router";
import Home from "../../Pages/private/Home";

const PrivateRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
);

export default PrivateRoutes;
