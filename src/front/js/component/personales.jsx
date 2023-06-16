import React from "react";
import { Menu } from "../component/menuPerfil.jsx"

export const Personal = () => {
    return (
        <>
            <div className="container">
                <div className="container text-center">
                    <div className="row">
                        < Menu />

                        {/* Separacion */}
                        <div className="col-1"></div>

                        {/* Datos personales */}
                        <div className="col">
                            <h6 className="text-end">
                                Hola de nuevo, <b>Javier Martínez</b>!
                            </h6>
                            <br />
                            <h2 className="text-start">Esta es tu información personal:</h2>
                            <br />


                            <div className="card mb-3 border-danger rounded-5 text-start"
                                style={{ maxWidth: "720px", 
                                paddingTop: "20px",  
                                paddingLeft: "35px",
                                fontSize: "20px" }}>
                                
                                <p>Nombre:
                                    <br />
                                    <b style={{paddingLeft: "15px"}}>Javier</b>
                                </p>

                                <p>Apellido:
                                    <br />
                                    <b style={{paddingLeft: "15px"}}>Martínez</b>
                                </p>

                                <p>Fecha de nacimiento:
                                    <br />
                                    <b style={{paddingLeft: "15px"}}>20 de Julio de 1985</b>
                                </p>

                                <p>E-mail:
                                    <br />
                                    <b style={{paddingLeft: "15px"}}>javiermartinez@gmail.com</b>
                                </p>

                                <p>Última carrera corrida:
                                    <br />
                                    <b style={{paddingLeft: "15px"}}>6ta Cross Country</b>
                                </p>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 