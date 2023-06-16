import React from "react";
import { Link } from "react-router-dom";
import javier from "../../img/Javier.jpg"

export const Menu = () => {
    return (
        <>
            {/* Perfil */}
            <div className="col-3">
                <img src={javier}
                    className="rounded-circle"
                    style={{
                        width: "180px",
                        marginBottom: "35px"
                    }} />

                {/* Datos personales */}
                <h3 className="text-start" style={{ marginLeft: "25px", marginBottom: "20px" }}>
                <Link to="/personal"
                        style={{ textDecoration: "none", color: "black" }}>
                        Tus datos personales
                    </Link>
                </h3>

                {/* Historial */}
                <h3 className="text-start" style={{ marginLeft: "25px", marginBottom: "20px" }}>
                    <Link to="/historial"
                        style={{ textDecoration: "none", color: "black" }}>
                        Historial de carreras
                    </Link>
                </h3>

                {/* Cerrar sesion */}
                <h3 className="text-start" style={{ marginLeft: "25px" }}>
                    <Link to="/"
                        style={{ textDecoration: "none", color: "black" }}>
                        Cerrar sesión
                    </Link>
                </h3>
            </div>

        </>
    )
}