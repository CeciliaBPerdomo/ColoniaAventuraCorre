import React from "react";
import { Menu } from "../component/menuPerfil.jsx"

export const Historial = () => {
    return (
        <>
            <div className="container">
                <div className="container text-center">
                    <div className="row">
                        < Menu />

                        {/* Separacion */}
                        <div className="col-1"></div>

                        {/* Body */}
                        <div className="col">
                            <h6 className="text-end">
                                Hola de nuevo, <b>Javier Martínez</b>!
                            </h6>
                            <br />
                            <h2 className="text-start">Estas son las carreras en las que participaste:</h2>

                            <div className="card mb-3 border-danger rounded-5"
                                style={{ maxWidth: "720px", padding: "10px", marginTop: "25px", marginLeft: "25px" }}>

                                <div className="container text-center bg-secondary p-2 text-dark bg-opacity-25">
                                    <div className="row">
                                        <div className="col fw-bold">Fecha</div>
                                        <div className="col fw-bold">Evento</div>
                                        <div className="col fw-bold">Posición</div>
                                        <div className="col fw-bold">Tiempo</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">10/03/2022</div>
                                        <div className="col fw-bold">6ta Cross Country</div>
                                        <div className="col">13</div>
                                        <div className="col">1hr 15mins</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">07/03/2021</div>
                                        <div className="col fw-bold">5ta Cross Country</div>
                                        <div className="col">18</div>
                                        <div className="col">1hr 38mins</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">27/03/2020</div>
                                        <div className="col fw-bold">4ta Cross Country</div>
                                        <div className="col">37</div>
                                        <div className="col">1hr 57mins</div>
                                    </div>
                                    <hr />

                                    <div className="row">
                                        <div className="col">15/03/2019</div>
                                        <div className="col fw-bold">3era Cross Country</div>
                                        <div className="col">8</div>
                                        <div className="col">1hr 01mins</div>
                                    </div>
                                    <hr />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}