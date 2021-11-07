const produtos = [
    {
        nome: "Notebook",
        propriedades: ["16gb RAM", "512gb"],
    },
    {
        nome: "Smartphone",
        propriedades: ["2gb RAM", "128gb"],
    },
];

const Titulo = ({ texto }) => {
    return <h1 style={{ color: "green" }}>{texto}</h1>;
};

const Produto = ({ produto }) => {
    return (
        <li>
            <h3>{produto.nome}</h3>
            <ul>
                {produto.propriedades.map((propriedade) => (
                    <li key={propriedade}>{propriedade}</li>
                ))}
            </ul>
        </li>
    );
};

const ListaProdutos = ({ produtos }) => {
    return (
        <>
            <Titulo texto="Produtos" />
            <ul>
                {produtos.map((produto, index) => (
                    <Produto produto={produto} key={produto.nome} />
                ))}
            </ul>
        </>
    );
};

const Home = () => {
    return (
        <div>
            <Titulo texto="Home" />
            <p>Essa é a home do site</p>
        </div>
    );
};

const Link = ({ label, ...rest }) => {
    return (
        <a href="/" style={{ display: "block", color: "blue" }} {...rest}>
            {label}
        </a>
    );
};

export const App = () => {
    const { pathname } = window.location;

    return (
        <>
            <h1>Desafio de components</h1>

            <Link label="Home" />
            <Link label="Produtos" href="/produtos" />

            <main>
                {pathname === "/produtos" ? (
                    <ListaProdutos produtos={produtos} />
                ) : (
                    <Home />
                )}
            </main>
        </>
    );
};
