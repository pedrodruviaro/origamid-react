import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../Form/Input";
import { Button } from "../Form/Button";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(
            "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, password }),
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                    label="Senha"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};
