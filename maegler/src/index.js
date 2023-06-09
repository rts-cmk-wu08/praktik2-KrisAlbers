import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Main from "./Components/Main";
import Kontakt from "./Templates/Kontakt";
import TilSalg from "./Templates/BoligerTilSalg";
import Maeglere from "./Templates/Maeglere";
import Farvoritter from "./Templates/MineFarvoritter";
import Ejendom from "./Templates/Bolig";
import LogIn from "./Templates/LogIn";
import Opret from "./Templates/Opret";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Kontakt" element={<Kontakt />} />
            <Route path="/TilSalg" element={<TilSalg />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Opret" element={<Opret />} />
            <Route path="/Bolig/:id" element={<Ejendom />} />
            <Route path="/Maeglere" element={<Maeglere />} />
            <Route path="/Farvoritter" element={<Farvoritter />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
