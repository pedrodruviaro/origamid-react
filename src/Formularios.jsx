import { useState } from "react";

const formFields = [
    {
        id: "nome",
        label: "Nome",
        type: "text",
    },
    {
        id: "email",
        label: "Email",
        type: "email",
    },
    {
        id: "senha",
        label: "Senha",
        type: "password",
    },
    {
        id: "cep",
        label: "CEP",
        type: "text",
    },
    {
        id: "rua",
        label: "Rua",
        type: "text",
    },
    {
        id: "numero",
        label: "Numero",
        type: "text",
    },
    {
        id: "cidade",
        label: "Cidade",
        type: "text",
    },
    {
        id: "bairro",
        label: "Bairro",
        type: "text",
    },
    {
        id: "estado",
        label: "Estado",
        type: "text",
    },
];

export const Formularios = () => {
    const [form, setForm] = useState(
        formFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
    );
    const [response, setResponse] = useState(null);

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://ranekapi.origamid.dev/json/api/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).then((resp) => console.log(resp));
    };

    return (
        <div>
            <h1>Exercicio Form 01</h1>

            <form onSubmit={handleSubmit}>
                {formFields.map((field) => (
                    <div key={field.id}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            value={form[field.id]}
                            onChange={handleChange}
                        />
                    </div>
                ))}

                <button type="submit">Enviar</button>
            </form>
            {response && response.ok && <p>Formulario Enviado</p>}
        </div>
    );
};
