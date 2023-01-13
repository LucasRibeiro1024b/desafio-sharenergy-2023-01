import React from "react";
import { Routes, Route } from "react-router";
import Login from "../../Pages/public/SingIn";

const PublicRoutes: React.FC = () => (
    <Routes location="/">
        <Route path="/" element={<Login />} />
    </Routes>
);

export default PublicRoutes;
