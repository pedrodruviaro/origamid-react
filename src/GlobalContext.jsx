import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto")
            .then((resp) => resp.json())
            .then((data) => setDados(data));
    }, []);

    function limparDados() {
        setDados([]);
    }

    return (
        <GlobalContext.Provider value={{ dados, limparDados }}>
            {children}
        </GlobalContext.Provider>
    );
};
