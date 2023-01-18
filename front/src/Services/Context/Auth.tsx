import { createContext, useState, useMemo, useEffect } from "react";

export interface IUserData {
    username: string;
    password: string;
}

export interface IContextData {
    userData: IUserData;
    setUserData: Function;
    logined: boolean;
    setLogined: Function;
}

export const AuthContext = createContext<IContextData>({} as IContextData);

/* global localStorage */

const AuthProvider = ({ children }: any) => {
    const [userData, setUserData] = useState<IUserData>({} as IUserData);
    const [logined, setLogined] = useState<boolean>(false);

    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (username !== null && password !== null) {
            setUserData({ username, password });
            setLogined(true);
        }
    }, [])

    const valueContext = useMemo(
        () => ({
            userData,
            setUserData,
            logined,
            setLogined,
        }),
        [logined, userData]
    );

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
