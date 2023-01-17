import React, { useContext, useMemo } from "react";

import PublicRoutes from "./public";
import PrivateRoutes from "./private";
import { AuthContext } from "../Services/Context/Auth";

/* global localStorage */

const SharenergyRoutes: React.FC = () => {
    const { logined, setLogined, setUserData } = useContext(AuthContext);

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (username !== null && password !== null) {
        setUserData({ username, password });
        setLogined(true);
    }

    const Routes = useMemo(
        () => (logined ? <PrivateRoutes /> : <PublicRoutes />),
        [logined]
    );

    return Routes;
};

export default SharenergyRoutes;
