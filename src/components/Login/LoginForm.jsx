// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { useUser } from "../../hooks/useUser";
import { Error } from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Form/Button.module.css";

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
        <section className="anime-left">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <Error error={error} />
            </form>
            <Link to="/login/perdeu" className={styles.perdeu}>
                Perdeu a Senha?
            </Link>

            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link to="/login/criar" className={stylesBtn.button}>
                    Cadastro
                </Link>
            </div>
        </section>
    );
};
