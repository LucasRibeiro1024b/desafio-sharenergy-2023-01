import React from "react";
import { Routes, Route } from "react-router";

import Home from "../../Pages/private/Home";
import StatusCode from "../../Pages/private/StatusCode";

const PrivateRoutes: React.FC = () => (
    <Routes>
        <Route path="/status" element={<StatusCode />} />
        <Route path="/" element={<Home />} />
    </Routes>
);

export default PrivateRoutes;
