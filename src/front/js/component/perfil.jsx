import React from "react";
import { Link } from "react-router-dom";
import javier from "../../img/Javier.jpg"

export const Perfil = () => {
    return (
        <>
            <div className="container">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-3">
                            <img src={javier} 
                            className="rounded-circle"
                            style={{width: "180px", 
                            marginBottom: "35px"}}/>
                            
                            <h3 className="text-start" style={{marginLeft: "25px", marginBottom: "20px"}}>Tus datos</h3>
                            <h3 className="text-start" style={{marginLeft: "25px", marginBottom: "20px"}}>Tus carreras</h3>
                            <h3 className="text-start" style={{marginLeft: "25px"}}>Cerrar sesión</h3>
                        </div>
                        <div className="col">
                            Perfil
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
