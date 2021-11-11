import React, { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
UserContext.displayName = "User Context";

export const UserContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const userLogout = useCallback(
        async function () {
            setData(null);
            setError(null);
            setLoading(false);
            setLogin(null);
            localStorage.removeItem("token");
            navigate("/login");
        },
        [navigate]
    );

    useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error("Token Inválido");
                    }
                    await getUser(token);
                    // console.log(data);
                } catch (err) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            }
        }

        autoLogin();
    }, [userLogout]);

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setLogin(true);
        console.log(data);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: Usuário Inválido`);
            }
            const { token } = await response.json();

            localStorage.setItem("token", token);
            await getUser(token);
            navigate("/conta");
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider
            value={{ userLogin, userLogout, data, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    );
};
