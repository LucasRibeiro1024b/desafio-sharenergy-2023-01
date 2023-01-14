import React from "react";
import { Routes, Route } from "react-router";

import Home from "../../Pages/private/Home";
import StatusCode from "../../Pages/private/StatusCode";
import PictureDog from "../../Pages/private/PictureDog";
import CRUDUser from "../../Pages/private/CRUDUser";

const PrivateRoutes: React.FC = () => (
    <Routes>
        <Route path="/users" element={<CRUDUser />} />
        <Route path="/picture" element={<PictureDog />} />
        <Route path="/status" element={<StatusCode />} />
        <Route path="/" element={<Home />} />
    </Routes>
);

export default PrivateRoutes;
