import AppBar from "../../atoms/AppBar";
import React from "react";
import "../Iframe.css";

const CaptainCook = () => {
	return (
		<div className="paper-container">
			<AppBar />
			<div className="iframe-container">
				<iframe
					src="https://captaincook4d.github.io/captain-cook/"
					title="Captain Cook Frame"
					frameBorder="0"
					className="responsive-iframe"
				/>
			</div>
		</div>
	);
};

export default CaptainCook;