import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Exercicio = () => {
    const global = useContext(GlobalContext);

    if (global.dados === null) {
        return null;
    }
    return (
        <div>
            <>
                <h2>Quantidade de dados: {global.dados.length}</h2>

                <button onClick={global.limparDados}>Limpar dados</button>
            </>
        </div>
    );
};

export default Exercicio;
