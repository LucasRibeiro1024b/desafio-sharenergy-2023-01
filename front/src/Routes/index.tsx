import React, { useContext, useMemo } from "react";

import PublicRoutes from "./public";
import PrivateRoutes from "./private";
import { AuthContext } from "../Services/Context/Auth";

const SharenergyRoutes: React.FC = () => {
    const { logined } = useContext(AuthContext);

    const Routes = useMemo(
        () => (logined ? <PrivateRoutes /> : <PublicRoutes />),
        [logined]
    );

    return Routes;
};

export default SharenergyRoutes;
