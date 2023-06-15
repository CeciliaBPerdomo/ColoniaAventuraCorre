import React from "react";
import cross from "../../img/7cross.jpg"
import elreto from "../../img/elreto.png"
import desafioScott from "../../img/desafioScott.jpg"


export const Carreras = () => {

    const pagina = () => {
        window.location.replace("https://encarrera.uy/la-carrera-cac")
    }

	return (
		<>
			<div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                    {/* Trail run */}
                    <div className="col">
                        <div className="card"
                        style={{height: "600px"}}
                        >
                            <img src={cross} className="card-img-top" alt="CrossCountry"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <b>Cross Country Trail Run</b>
                                </h5>
                            </div>
                            <div className="card">
                                <p className="card-text text-center"
                                style={{marginTop: "15px"}}>
                                    Primera fecha: <b>25 de Junio de 2023</b>
                                </p>
                                <p className="card-text text-center"
                                style={{marginBottom: "15px"}}>
                                    Distancias: <b>18km</b> y <b>8km</b>
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                    <button type="button" 
                                        className="btn btn-outline-light w-50 rounded-pill opacity-75"
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

                    {/* El reto */}
                    <div className="col">
                        <div className="card" 
                        style={{height: "600px"}}
                        >
                            <img src={elreto} className="card-img" alt="elReto"
                            style={{marginTop: "40px", marginBottom: "10px"}}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <b>Carrera de Aventura El Reto</b>
                                </h5>
                            </div>
                            <div className="card">
                                <p className="card-text text-center"
                                style={{marginTop: "15px"}}>
                                    Formato Experientes: <b>El Reto</b>
                                </p>
                                <p className="card-text text-center"
                                style={{marginBottom: "15px"}}>
                                    Formato Novatos: <b>El Desafío</b>
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                            <button type="button" 
								className="btn btn-outline-light w-50 rounded-pill opacity-25"
								style={{
									background: "#2F2483",
									fontSize: "18px"
									}}>
									Próximamente
								</button>
                            </div>
                        </div>
                    </div>

                    {/* Desafio Scott */}
                    <div className="col">
                        <div className="card"
                        style={{height: "600px"}}
                        >
                            <img src={desafioScott} 
                            className="card-img-top" 
                            alt="DesafioScott"
                            style={{marginTop: "150px",
                            marginBottom: "110px"}}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <b>Desafío Scott: Expedición MTB</b>
                                </h5>
                            </div>
                            <div className="card">
                                <p className="card-text text-center"
                                style={{marginTop: "15px"}}>
                                    Fecha: <b>a confirmar</b>
                                </p>
                                <p className="card-text text-center"
                                style={{marginBottom: "15px"}}>
                                    Distancias: <b>50km</b> y <b>25km</b>
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <button type="button" 
                                    className="btn btn-outline-light w-50 rounded-pill opacity-25"
                                    style={{
                                        background: "#2F2483",
                                        fontSize: "18px"
                                        }}>
                                        Próximamente
                                    </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
	);
};
