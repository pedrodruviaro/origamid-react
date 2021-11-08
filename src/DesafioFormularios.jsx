import { useState } from "react";

const perguntas = [
    {
        pergunta: "Qual método é utilizado para criar componentes?",
        options: [
            "React.makeComponent()",
            "React.createComponent()",
            "React.createElement()",
        ],
        resposta: "React.createElement()",
        id: "p1",
    },
    {
        pergunta: "Como importamos um componente externo?",
        options: [
            'import Component from "./Component"',
            'require("./Componet")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: "p2",
    },
    {
        pergunta: "Qual hook não é nativo?",
        options: ["useEffect()", "useFetch()", "useCallback()"],
        resposta: "useFetch()",
        id: "p3",
    },
    {
        pergunta: "Qual palavra deve ser utilizada para criamos um hook?",
        options: ["set", "get", "use"],
        resposta: "use",
        id: "p4",
    },
];

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
    if (!active) {
        return null;
    }

    return (
        <fieldset>
            <legend>{pergunta}</legend>

            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={onChange}
                        id={id}
                    />
                    {option}
                </label>
            ))}
        </fieldset>
    );
};

export const DesafioFormularios = () => {
    const [respostas, setRespostas] = useState(
        perguntas.reduce((acc, pergunta) => {
            return { ...acc, [pergunta.id]: "" };
        }, 0)
    );

    const [slide, setSlide] = useState(0);
    const [resultado, setResultado] = useState(null);

    function handleChange({ target }) {
        setRespostas({ ...respostas, [target.id]: target.value });
    }

    function resultadoFinal() {
        const corretas = perguntas.filter(
            ({ id, resposta }) => respostas[id] === resposta
        );

        setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
    }

    function handleClick(e) {
        e.preventDefault();

        if (slide < perguntas.length - 1) {
            setSlide((prev) => prev + 1);
        } else {
            // ativando uma ultima vez, o retorno eh null, entao nada eh renderizado
            setSlide((prev) => prev + 1);
            resultadoFinal();
        }
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                {perguntas.map((pergunta, index) => (
                    <Radio
                        active={slide === index}
                        key={pergunta.id}
                        onChange={handleChange}
                        value={respostas[pergunta.id]}
                        {...pergunta}
                    />
                ))}
            </form>

            {resultado ? (
                <p>{resultado}</p>
            ) : (
                <button onClick={handleClick}>Proxima</button>
            )}
        </>
    );
};
