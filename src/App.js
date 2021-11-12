import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login/Login";
import { UserContextProvider } from "./contexts/UserContext";
import { User } from "./components/User/User";

import "./App.css";
import { ProtectedRoute } from "./components/Helper/ProtectedRoute";

export const App = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login/*" element={<Login />} />
                    <ProtectedRoute path="conta/*" element={<User />} />
                </Routes>
                <Footer />
            </UserContextProvider>
        </BrowserRouter>
    );
};
