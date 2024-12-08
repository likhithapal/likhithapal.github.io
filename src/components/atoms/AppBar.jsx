import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./AppBar.css";

const AppBar = ({ showTitle = true }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeTab, setActiveTab] = useState(0);
	
	// Update active tab based on current path
	useEffect(() => {
		const currentTab = tabs.findIndex(tab => tab.path === location.pathname);
		if (currentTab !== -1) {
			setActiveTab(currentTab);
		}
	}, [location.pathname]);
	
	const handleTabClick = (index, path) => {
		setActiveTab(index);
		navigate(path);
	};
	
	return (
		<div className="app-bar">

			<div className="right">
				{tabs.map((tab, index) => (
					<div
						key={tab.label}
						className={`tab ${index === activeTab ? 'active' : ''}`}
						onClick={() => handleTabClick(index, tab.path)}
					>
						{tab.label}
					</div>
				))}
			</div>
			<div className={`left ${!showTitle ? 'hidden-title' : ''}`}>
				Likhitha Pallapothula
			</div>
		</div>
	);
};

const tabs = [
	{ label: 'Home', path: '/' },
	{ label: 'Publications', path: '/research' },
	{ label: 'Experience', path: '/experience' },
	{ label: 'Awards', path: '/awards' },
	{ label: 'Projects', path: '/service' }
];

export default AppBar;
