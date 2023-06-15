import React from "react";
import { Link } from "react-router-dom";
import carrera from "../../img/lacarrera-delcac.jpg"

export const Novedades = () => {
	return (
		<>
			<div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={carrera}
                        alt="CarreraCac"
                        style={{
                            width: "300px",
                            marginLeft: "50px"
                        }}
                         />
                    </div>

                    <div className="col-7">
                        <h3>Novedades</h3>
                        <p>Ya están abiertas las inscripciones para la primera fecha, <b>25 de 
                        Junio de 2023</b>, de la carrera de Trail Run de Colonia Aventura 
                        Corre. <b>¿Te la vas a perder?</b></p>
                        <p>¿Estas preparado para recibir todas las novedades de las carreras en
                            nuestro boletín de novedades? ¡¡No lo dudes más, <b>Suscribite!!</b>
                        </p>

                        <br />
                        
                        <button type="button" 
                            className="btn btn-outline-light w-50 rounded-pill opacity-75 float-end"
                            style={{
                                background: "#2F2483",
                                fontSize: "18px"
                            }}>
                            Suscribite
                        </button>
                    </div>
                </div>
            </div>
        </>
	);
};
