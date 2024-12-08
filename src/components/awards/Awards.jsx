import React from 'react';
import AwardsGrid from '../atoms/Timeline';
import AppBar from "../atoms/AppBar";
import './Awards.css';
import awards from '../../Data/jsons/awards.json';

function Awards() {
	return (	
		<div className='home-container'>
			<AppBar/>
		
			<div className="awards-container">
				
				{/* <div className="awards-header">
					<h1>Achievements & Recognition</h1>
					<p>A collection of milestones throughout my academic journey</p>
				</div> */}
				<AwardsGrid timelineData={awards} />
			</div>
		</div>
	);
}

export default Awards;