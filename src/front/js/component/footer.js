import React, { Component } from "react";
import whatsApp from "../../img/whatsapp.jpg"
import instagram from "../../img/instagram.png"
import facebook from "../../img/facebook.jpg"

export const Footer = () => (
	<div className="container">
		<footer className="footer mt-auto py-3 text-center">
			<hr />
			
			<div className="container text-center" 
			style={{background: "black", color: "white"}}>
				<div className="row">
					<div className="col d-flex justify-content-start"
					style={{marginTop: "15px",
					marginBottom: "20px"}}>
						{/* WhatsApp */}
						<img src={whatsApp}
						style={{height: "50px", marginLeft: "20px"}} />
						{/* Instagram */}
						<img src={instagram}
						style={{height: "50px", marginLeft: "20px"}} />
						{/* Facebook */}
						<img src={facebook}
						style={{height: "50px", marginLeft: "20px"}} />
					</div>

					<div className="col text-center">
						<p style={{marginTop: "30px", fontSize: "18px"}}>
						Desarrollado con ❤️ por Cecilia Perdomo
						</p>
					</div>
				</div>
			</div>
			
		</footer>
	</div>
);
