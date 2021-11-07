import { useEffect, useState } from "react";

const Produto = ({ produto }) => {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        (async () => {
            if (produto) {
                const resp = await fetch(
                    `https://ranekapi.origamid.dev/json/api/produto/${produto}`
                );
                const data = await resp.json();
                setDados(data);
            }
        })();
    }, [produto, dados]);

    if (!dados) {
        return null;
    }

    return (
        <div>
            <h3>Produto: {dados.nome}</h3>
            <h3>Preco: R$ {dados.preco}</h3>
        </div>
    );
};

export const App = () => {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    function handleClick(e) {
        const texto = e.target.innerText.toLowerCase();
        setProdutoSelecionado(texto);
    }

    // efeito de busca pela troca
    useEffect(() => {
        if (produtoSelecionado) {
            localStorage.setItem("produto", produtoSelecionado);
        }
    }, [produtoSelecionado]);

    // efeito na montagem do componente
    useEffect(() => {
        const produtoLocal = localStorage.getItem("produto");
        if (produtoLocal) {
            setProdutoSelecionado(produtoLocal);
        }
    }, []);

    return (
        <>
            <h1>Desafio useEffect</h1>

            {produtoSelecionado && (
                <h2>Produto selecionado: {produtoSelecionado}</h2>
            )}

            <div>
                <button onClick={handleClick}>Notebook</button>
                <button onClick={handleClick}>Smartphone</button>
            </div>

            <Produto produto={produtoSelecionado} />
        </>
    );
};
