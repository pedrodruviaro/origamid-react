const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
        { nome: "Notebook", preco: "R$ 2500" },
        { nome: "Geladeira", preco: "R$ 3000" },
        { nome: "Smatphone", preco: "R$ 1500" },
    ],
    ativa: true,
};

const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
        { nome: "Notebook", preco: "R$ 2500" },
        { nome: "Geladeira", preco: "R$ 3000" },
        { nome: "Smatphone", preco: "R$ 1500" },
        { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
};

const estiloAtivo = {
    color: "green",
};

const estiloInativo = {
    color: "red",
};

export const App = () => {
    const cliente = luana;

    const gastos = cliente.compras.reduce((acc, compra) => {
        return acc + Number(compra.preco.split(" ")[1]);
    }, 0);

    return (
        <>
            <h1>Cliente: </h1>
            <h3>Nome: {cliente.cliente}</h3>
            <h3>Idade: {cliente.idade}</h3>
            <h3>
                Situação:{" "}
                <span style={cliente.ativa ? estiloAtivo : estiloInativo}>
                    {cliente.ativa ? "Ativa" : "Inativa"}
                </span>
            </h3>
            <h3>Total Gasto: R$ {gastos}</h3>
            <h3 style={{ marginTop: "2rem", fontSize: "2rem" }}>
                {gastos >= 10000 && "Você está gastanto muito"}
            </h3>
        </>
    );
};
