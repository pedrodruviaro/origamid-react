import { useCallback, useEffect, useState } from "react";

// const useLocalStorage = (key, inicial) => {
//     const [state, setstate] = useState(() => {
//         const localItem = localStorage.getItem(key);
//         return localItem ? localItem : inicial;
//     });

//     useEffect(() => {
//         localStorage.setItem(key, state);
//     }, [key, state]);

//     return [state, setstate];
// };

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    /* useCallback => no effect do app, nao tenho multiplas 
    chamadas a essa funcao, uma vez que ela eh criada somente 
    uma vez
    */
    const request = useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
        } catch (err) {
            json = null;
            setError("Error");
        } finally {
            // sempre vai ocorrer, independente ou nao de erro
            setData(json);
            setLoading(false);
            return { response, json };
        }
    }, []);

    return { data, error, loading, request };
};

export const App = () => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchData() {
            const { response, json } = await request(
                "https://ranekapi.origamid.dev/json/api/produto"
            );
        }
        fetchData();
    }, [request]);

    if (error) return <div>{error}</div>;

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <h1>React Hooks</h1>
            {data &&
                data.map((produto) => (
                    <div key={produto.id}>
                        <h3>{produto.nome}</h3>
                    </div>
                ))}
        </>
    );
};
