import { Input } from "./components/Input";
import { useForm } from "./hooks/useForm";

export const Formularios = () => {
    const cep = useForm("cep");
    const email = useForm("email");
    const nome = useForm(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cep.validate() && email.validate()) {
            console.log("enviar");
        } else {
            console.log("nao enviar");
        }
    };

    return (
        <div>
            <h1>Formularios em React</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="Nome" id="nome" {...nome} />
                <Input
                    type="text"
                    label="CEP"
                    id="cep"
                    placeholder="00000-000"
                    {...cep}
                />

                <Input
                    type="email"
                    label="Email"
                    id="email"
                    placeholder="email@something.com"
                    {...email}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
