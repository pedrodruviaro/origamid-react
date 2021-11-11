import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// img
import { ReactComponent as Dogs } from "../assets/dogs.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                <Link className={styles.login} to="/login">
                    Login / Criar
                </Link>
            </nav>
        </header>
    );
};
