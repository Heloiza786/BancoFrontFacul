import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/user/User";
import Error from "./components/erro/Error";
import ListarUsuario from "./components/listarUsuarios/ListarUsuario";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="pi">
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/listarUsuario" element={<ListarUsuario />} /> 
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
