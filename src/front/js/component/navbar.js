import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/cac.png"

export const Navbar = () => {
	return (
		<>
			<div className="container" 
				style={{marginTop: "25px"}}
			>
				<div className="container text-center">
  					<div className="row">
    					<div className="col">
							<Link to="/" 
								style={{textDecoration: "none", color: "white"}}>
								<img src={logo} 
									style={{
										width: "250px"
									}}/>
							</Link>
    					</div>
    					
						<div className="col"></div>

						<div className="col">
							<div className="d-flex justify-content-end">
								<Link to="/registro" 
									style={{textDecoration: "none", color: "white"}}>
									<button type="button" 
									className="btn btn-outline-light rounded-pill opacity-50"
									style={{
										background: "#2F2483",
										fontSize: "18px", 
										marginTop: "5px",
										marginBottom: "12px",
										width: "220px"
										}}>
										Registrarse
									</button>
								</Link>
							</div>
							
							<div className="d-flex justify-content-end">
								<Link to="/inicio" 
									style={{textDecoration: "none", color: "white"}}>
									
									<button type="button" 
									className="btn btn-outline-light rounded-pill opacity-50"
									style={{
										background: "#2F2483",
										fontSize: "18px",
										width: "220px"
										}}>
										Iniciar sesión
									</button>
								</Link>
							</div>
						</div>
  					</div>
				</div>
			
				<hr />
			</div>
		</>
	);
};
