import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/cac.png"

export const Suscripciones = () => {
	return (
		<>
			<div className="container" 
				style={{marginTop: "25px"}}
			>
                <div className="card border-primary mb-3">
                    <img src={logo} className="card-img-top" alt="ColoniaAventuraCorre" 
                    style={{width: "450px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <b>
                            Gracias por su suscripción
                            </b>
                        </h5>
                            <p className="card-text">
                                A la brevedad estará recibiendo novedades sobre Colonia Corre Aventura y todas sus carreras.
                            </p>
                    </div>
                </div>

			</div>
		</>
	);
};
