import { useState } from "react";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Radio } from "./components/Radio";
import { Checkbox } from "./components/Checkbox";

export const Formularios = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [produto, setProduto] = useState("");
    const [cor, setCor] = useState("");
    const [linguagens, setLinguagens] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nome, email, produto, cor, linguagens });
    };

    return (
        <div>
            <h1>Formularios em React</h1>
            <form onSubmit={handleSubmit}>
                <Checkbox
                    options={["JS", "Python", "Ruby"]}
                    value={linguagens}
                    setValue={setLinguagens}
                />

                <Radio
                    options={["Azul", "Vermelho"]}
                    value={cor}
                    setValue={setCor}
                />

                <Select
                    options={["notebook", "smatphone", "tablet"]}
                    value={produto}
                    setValue={setProduto}
                    required
                />

                <Input
                    label="Nome"
                    id="nome"
                    value={nome}
                    setValue={setNome}
                    required
                />
                <Input
                    label="Email"
                    id="email"
                    value={email}
                    setValue={setEmail}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
