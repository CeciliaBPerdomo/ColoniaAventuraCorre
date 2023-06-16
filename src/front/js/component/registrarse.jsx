import React from "react";
import { Link } from "react-router-dom";

export const Registrarse = () => {
    return (
        <>
            <div className="container">
                <div className="card border-primary mb-3" style={{marginTop: "35px"}}>
                    <h3 style={{marginTop: "20px", marginLeft: "5px"}}>Complete con sus datos: </h3>
                   
                    {/* Nombre */}
                    <div className="row g-3 align-items-center" style={{marginTop: "5px", marginLeft: "15px"}}>
                        <div className="col-2">
                            <label htmlFor="inputPassword6" className="col-form-label"
                                style={{ fontSize: "18px" }}>Nombre:</label>
                        </div>
                        <div className="col-6">
                            <input type="text" id="inputPassword6" className="form-control"
                            placeholder="Javier"
                            style={{ fontSize: "18px" }} />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Debe ingresar su nombre.
                            </span>
                        </div>
                    </div>

                    {/* Apellido */}
                    <div className="row g-3 align-items-center" style={{marginTop: "20px", marginLeft: "15px"}}>
                        <div className="col-2">
                            <label htmlFor="inputPassword6" className="col-form-label"
                                style={{ fontSize: "18px" }}>Apellido:</label>
                        </div>
                        <div className="col-6">
                            <input type="text" id="inputPassword6" className="form-control" 
                            placeholder="Martínez"
                            style={{ fontSize: "18px" }} />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Debe ingresar su apellido.
                            </span>
                        </div>
                    </div>

                    {/* Fecha de Nacimiento */}
                    <div className="row g-3 align-items-center" style={{marginTop: "20px", marginLeft: "15px"}}>
                        <div className="col-2">
                            <label htmlFor="inputPassword6" className="col-form-label"
                                style={{ fontSize: "18px" }}>Cumpleaños:</label>
                        </div>
                        <div className="col-6">
                            <input type="date" id="inputPassword6" 
                            className="form-control" 
                            placeholder="20/06/1985"
                            style={{ fontSize: "18px" }} />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Seleccione su fecha de nacimiento.
                            </span>
                        </div>
                    </div>

                     {/* Email */}
                     <div className="row g-3 align-items-center" style={{marginTop: "20px", marginLeft: "15px"}}>
                        <div className="col-2">
                            <label htmlFor="inputPassword6" className="col-form-label"
                                style={{ fontSize: "18px" }}>Email:</label>
                        </div>
                        <div className="col-6">
                            <input type="text" id="inputPassword6" 
                            className="form-control"
                            placeholder="javiermartinez@gmail.com"
                            style={{ fontSize: "18px" }} />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Debe ingresar su correo electrónico.
                            </span>
                        </div>
                    </div>

                     {/* Password */}
                     <div className="row g-3 align-items-center" style={{marginTop: "20px", marginLeft: "15px"}}>
                        <div className="col-2">
                            <label htmlFor="inputPassword6" className="col-form-label"
                                style={{ fontSize: "18px" }}>Contraseña:</label>
                        </div>
                        <div className="col-6">
                            <input type="password" id="inputPassword6"
                            className="form-control" 
                            placeholder="*******"
                            style={{ fontSize: "18px" }} />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Debe ingresar su contraseña.
                            </span>
                        </div>
                    </div>

                    <div className="row g-3 align-items-center" style={{marginTop: "20px", marginLeft: "15px"}}>
                        <div className="d-flex justify-content-end">
                            <Link to="/perfil" 
							style={{textDecoration: "none", color: "white"}}>
							<button type="button" 
							    className="btn btn-outline-light rounded-pill"
								style={{
								    background: "#2F2483",
									fontSize: "18px", 
									marginTop: "5px",
									marginBottom: "12px",
                                       marginRight: "25px",
									width: "220px"
								}}>
								Registrarse
							</button>
                            </Link>
						</div>
                    </div>

                </div>
            </div>
        </>
    );
};
