import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carreras } from "../component/carreras.jsx";
import { Novedades } from "../component/novedades.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="container">
			< Novedades />
			<hr />
			<Carreras />
		</div>
		</>
	);
};
