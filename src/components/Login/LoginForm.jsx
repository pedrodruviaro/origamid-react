// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { TOKEN_POST, USER_GET } from "../../api";
import { useEffect } from "react";

async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

export const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUser(token);
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username.validate() && !password.validate()) {
            return;
        }

        const { url, options } = TOKEN_POST({
            username: username.value,
            password: password.value,
        });

        const response = await fetch(url, options);
        const data = await response.json();

        localStorage.setItem("token", data.token);
        getUser(data.token);
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    name="username"
                    type="text"
                    {...username}
                />

                <Input
                    label="Senha"
                    name="password"
                    type="password"
                    {...password}
                />

                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};
