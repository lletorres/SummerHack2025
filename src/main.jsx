import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// paso el <div id="root"></div>  de HTML para renderezarlo (.render)
// renderiza APP
createRoot(document.getElementById("root")).render(<App />);
// React renderiza su componente principal dentro de la etiqueta DIV ID= ROOT
