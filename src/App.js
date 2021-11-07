import { useState } from "react";

const Produto = ({ produto }) => {
    return (
        <article>
            <h4>Produto: {produto.nome}</h4>
            <h4>Preço: R$ {produto.preco}</h4>
            <h4>Descrição: {produto.descricao}</h4>
            <h4>Vendido: {produto.vendido ? "Não" : "Sim"}</h4>
        </article>
    );
};

export const App = () => {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(null);

    const buscaProduto = async (e) => {
        setLoading(true);
        const busca = e.target.innerText.toLowerCase();
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${busca}`
        );
        const data = await response.json();
        setProduto(data);
        setLoading(false);
    };

    return (
        <>
            <h1>React Hooks</h1>
            <div>
                <button onClick={buscaProduto}>Tablet</button>
                <button onClick={buscaProduto}>Smartphone</button>
                <button onClick={buscaProduto}>Notebook</button>
            </div>

            {loading && <h3>Buscando produto...</h3>}
            {produto && !loading && <Produto produto={produto} />}
        </>
    );
};
