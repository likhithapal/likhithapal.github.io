import React, { useState } from 'react';
import './Experience.css';
import AppBar from "../atoms/AppBar";
import ExperienceItem from "./ExperienceItem";
import experiences from '../../Data/jsons/experiences.json';

const Experience = () => {
	const [activeTab, setActiveTab] = useState('Professional Experience');

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	// Map tab names to JSON keys
	const tabToDataMap = {
		'Professional Experience': 'experience',
		'Education': 'education',
	};

	// Get the correct data based on active tab
	const visibleExperiences = experiences[tabToDataMap[activeTab]] || [];

	return (
		<div className="home-container">
			<AppBar />
			<div className="experience-container">
				<div className="tabs">
					{['Professional Experience', 'Education'].map(tab => (
						<button
							key={tab}
							className={`tab-button ${activeTab === tab ? 'active' : ''}`}
							onClick={() => handleTabChange(tab)}
						>
							{tab}
						</button>
					))}
				</div>
				<div className="experience-list">
					{visibleExperiences.map((experience, index) => (
						<ExperienceItem 
							key={index}
							{...experience}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Experience;
