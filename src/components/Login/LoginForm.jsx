// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { useUser } from "../../hooks/useUser";

export const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = useUser();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username.validate() && !password.validate()) {
            return;
        }

        userLogin(username.value, password.value);
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

                {loading ? (
                    <Button disabled>Carregando</Button>
                ) : (
                    <Button type="submit">Entrar</Button>
                )}
                {error && <p>{error}</p>}
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};
