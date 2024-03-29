import { Navigate, Route, Routes } from "react-router";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { useUser } from "../../hooks/useUser";
import styles from "./Login.module.css";

export const Login = () => {
    const { login } = useUser();

    if (login === true) {
        return <Navigate to="/conta" />;
    }

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="criar" element={<LoginCreate />} />
                    <Route path="perdeu" element={<LoginPasswordLost />} />
                    <Route path="resetar" element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    );
};
