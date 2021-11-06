const produtos = [
    {
        id: 1,
        nome: "Smartphone",
        preco: "R$ 2000",
        cores: ["#29d8d5", "#252a32", "#fc3766"],
    },
    {
        id: 2,
        nome: "Notebook",
        preco: "R$ 3000",
        cores: ["#365069", "#47c1c8", "#f95786"],
    },
    {
        id: 3,
        nome: "Tablet",
        preco: "R$ 1500",
        cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
];

export const App = () => {
    return (
        <>
            <h1>Produtos</h1>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <h2>{produto.nome}</h2>
                        <h3>Preço: {produto.preco}</h3>
                        {produto.cores.map((cor, index) => (
                            <p
                                key={index}
                                style={{
                                    background: cor,
                                    display: "block",
                                    color: "white",
                                    padding: ".25rem",
                                }}
                            >
                                {cor}
                            </p>
                        ))}
                    </li>
                ))}
            </ul>
        </>
    );
};
