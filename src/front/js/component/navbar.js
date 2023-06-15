import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/cac.png"

export const Navbar = () => {
	return (
		<>
			<div className="container" 
				style={{marginTop: "25px"}}
			>
				<div class="container text-center">
  					<div class="row">
    					<div class="col">
							<img src={logo} 
								style={{
									width: "250px"
								}}/>
    					</div>
    					
						<div class="col"></div>

						<div class="col">
							<div className="d-flex justify-content-end">
								<button type="button" 
								className="btn btn-outline-light w-50 rounded-pill opacity-50"
								style={{
									background: "#2F2483",
									fontSize: "18px", 
									marginTop: "5px",
									marginBottom: "12px"
									}}>
									Registrarse
								</button>
							</div>
							
							<div className="d-flex justify-content-end">
								<button type="button" 
								className="btn btn-outline-light w-50 rounded-pill opacity-50"
								style={{
									background: "#2F2483",
									fontSize: "18px"
									}}>
									Iniciar sesión
								</button>
							</div>
						</div>
  					</div>
				</div>
			
				<hr />
			</div>
		</>
	);
};
