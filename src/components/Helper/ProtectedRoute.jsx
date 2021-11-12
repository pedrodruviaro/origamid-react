import { Navigate, Route } from "react-router";
import { useUser } from "../../hooks/useUser";

export const ProtectedRoute = (props) => {
    const { login } = useUser();

    if (login === true) return <Route {...props} />;
    else if (login === false) return <Navigate to="/login" />;
    else return null;
};
