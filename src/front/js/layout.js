import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

// Carreras
import { Carreras } from "./component/carreras.jsx";
import { Suscripciones } from "./component/suscripciones.jsx";
import { Registrarse } from "./component/registrarse.jsx"
import { InicioSesion } from "./component/inicio.jsx";
import { Perfil } from "./component/perfil.jsx";
import { Historial } from "./component/historial.jsx";
import { Personal } from "./component/personales.jsx"

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Suscripciones />} path="/suscripcion" />
                        <Route element={<Registrarse />} path="/registro" />
                        <Route element={<InicioSesion />} path="/inicio" />
                        <Route element={<Perfil />} path="/perfil" />
                        <Route element={<Historial />} path="/historial" />
                        <Route element={<Personal />} path="/personal" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
