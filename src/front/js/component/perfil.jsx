import React from "react";
import { Link } from "react-router-dom";
import javier from "../../img/Javier.jpg"
import cross from "../../img/7cross.jpg"
import { Menu } from "../component/menuPerfil.jsx"

export const Perfil = () => {
    
    const pagina = () => {
        window.location.replace("https://encarrera.uy/la-carrera-cac")
    }

    return (
        <>
            <div className="container">
                <div className="container text-center">
                    <div className="row">

                        {/* Perfil */}
                        <Menu />

                        {/* Separacion */}
                        <div className="col-1"></div>

                        {/* Body */}
                        <div className="col">
                            <h6 className="text-end">                                
                                Hola de nuevo, <b>Javier Martínez</b>!
                            </h6>
                            <br />
                            <h2 className="text-start">Ya te puedes inscribir:</h2>
                            
                            <div class="card mb-3 border-danger rounded-5" 
                            style={{maxWidth: "720px", padding: "10px", marginTop: "25px", marginLeft: "25px"}}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src={cross} class="img-fluid rounded-start" alt="ColoniaAventuraCorre" />
                                    </div>
                                   
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">
                                            <b style={{color: "red"}}>
                                                7ma Cross Country - Trail Run
                                            </b>
                                        </h5>
                                        <hr />
                                        <p class="card-text text-start">
                                           <b>Fecha:</b>
                                            <br/> 25 de junio de 2023 
                                            <br/>30 de Julio de 2023
                                        </p>
                                        <p class="card-text text-start">
                                            <b>Distancias: </b>
                                            <br />8km
                                            <br/>18km
                                        </p>
                                        <p class="card-text text-start">
                                           <b>Precios:</b><br />
                                            <b>$900</b> hasta el 30/05, con remera incluida.
                                            <br /><b>$1000</b> hasta el 16/06, con remera incluida.
                                            <br /><b>$800</b> hasta el 25/05, sin remera. 
                                            <br /><b>$1500</b> ambas fechas, usando la misma remera.
                                        </p>
                                        <hr />
                                        <p class="card-text text-end">
                                            <small class="text-muted">
                                            última actualización 16/06/2023
                                            </small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end" 
                            style={{marginTop: "35px"}}>
                                <button type="button" 
                                    className="btn btn-outline-light w-25 rounded-pill opacity-75"
                                    onClick={pagina}
                                    style={{
                                        background: "#2F2483",
                                        fontSize: "18px"
                                    }}>
                                    Inscribirse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
