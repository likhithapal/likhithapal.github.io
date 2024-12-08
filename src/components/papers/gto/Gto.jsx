import AppBar from "../../atoms/AppBar";
import React from "react";
import "../Iframe.css";

const Gto = () => {
	return (
		<div className="paper-container">
			<AppBar />
			<div className="iframe-container">
				<iframe
					src="https://irvlutd.github.io/GraspTrajOpt/"
					title="Grasp Trajectory Optimization Frame"
					frameBorder="0"
					className="responsive-iframe"
				/>
			</div>
		</div>
	);
};

export default Gto;