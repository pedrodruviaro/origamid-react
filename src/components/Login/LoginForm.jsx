// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import { Input } from "../Form/Input";
import { Button } from "../Form/Button";

export const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username.validate() && !password.validate()) {
            return;
        }

        const response = await fetch(
            "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
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
