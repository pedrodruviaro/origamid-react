import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useUser } from "../hooks/useUser";

// img
import { ReactComponent as Dogs } from "../assets/dogs.svg";

export const Header = () => {
    const { data, userLogout } = useUser();

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                {data ? (
                    <Link className={styles.login} to="/conta">
                        {data.nome}
                    </Link>
                ) : (
                    <Link className={styles.login} to="/login">
                        Login / Criar
                    </Link>
                )}
            </nav>
            <button onClick={userLogout}>userLogout</button>
        </header>
    );
};
