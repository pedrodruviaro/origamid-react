import { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";

import "./styles/reset.css";
import "./styles/global.css";

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
