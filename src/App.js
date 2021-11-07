import Exercicio from "./Exercicio";
import { GlobalProvider } from "./GlobalContext";

export const App = () => {
    return (
        <GlobalProvider>
            <h1>React Hooks</h1>
            <Exercicio />
        </GlobalProvider>
    );
};
