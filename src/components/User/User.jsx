import React from "react";
import { useUser } from "../../hooks/useUser";

export const User = () => {
    const { login } = useUser();
    console.log(login);
    return (
        <div>
            <h1>Usuario</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quod nostrum, excepturi commodi officiis harum provident
                molestiae delectus, quia temporibus blanditiis mollitia sed
                facilis nemo totam sapiente, voluptatum incidunt. Eaque!
            </p>
        </div>
    );
};
