import React from "react";
import { Input } from "../Form/Input";
import { useForm } from "../../hooks/useForm";
import { Button } from "../Form/Button";
import { Error } from "../Helper/Error";
import { USER_POST } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useFetch } from "../../hooks/useFetch";

export const LoginCreate = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm();

    const { userLogin } = useUser();
    const { loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!username.validate() || !email.validate() || !password.validate()) {
            return;
        }

        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok === true) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="anime-left">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />

                <Input label="Email" type="email" name="email" {...email} />

                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />

                {loading ? (
                    <Button disabled>Cdadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}
                <Error error={error} />
            </form>
        </section>
    );
};
