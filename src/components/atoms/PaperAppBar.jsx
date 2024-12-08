import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PaperAppBar.css";

const PaperAppBar = () => {
	const navigate = useNavigate();
	
	return (
		<div className="paper-app-bar">
			<div className="center-content">
				<img
					src="assets/pictures/OtherResearch.png"
					alt="Description of other projects"
					className="other-research-logo"
				/>
				<div
					className="other-research-text"
					onClick={() => navigate('/research')}
				>
					Other Relevant Research
				</div>
			</div>
		</div>
	);
};

export default PaperAppBar;
