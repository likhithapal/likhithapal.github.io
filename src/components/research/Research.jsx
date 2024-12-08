import React, { useState } from 'react';
import './Research.css';
import AppBar from "../atoms/AppBar";
import Publication from "./Publication";
import publications from '../../Data/jsons/publications_data.json';

const Research = () => {
	const [activeTab, setActiveTab] = useState('All');
	const { research, publicationsData } = publications;

	const handleTabChange = (area) => {
		setActiveTab(area);
	};

	const visiblePublications = publicationsData
		.filter(publication => activeTab === 'All' || publication.area === activeTab)
		.sort((a, b) => b.year - a.year); // Sort descending

	const renderPublications = () => {
		let lastYear = null;
		return visiblePublications.map((publication, index) => {
			const showYear = publication.year !== lastYear;
			lastYear = publication.year;
			return (
				<React.Fragment key={index}>
					{/*{showYear && <div className="timeline-year-marker">{publication.year}</div>}*/}
					<Publication
						title={publication.title}
						authors={publication.authors}
						conference={publication.conference}
						year={publication.year}
						imageUrl={publication.imageUrl}
						bibtex={publication.bibtex}
						acceptanceRate={publication.acceptanceRate}
						awards={publication.awards}
						video={publication.video}
						slides={publication.slides}
						poster={publication.poster}
						arxivLink={publication.arxivLink}
						projectLink={publication.projectLink}
						otherVersions={publication.otherVersions}
					/>
				</React.Fragment>
			);
		});
	};

	return (
		<div className="home-container">
			<AppBar />
			<div className="publications">

				<div className="publications-list">
					{renderPublications()}
				</div>
			</div>
		</div>
	);
}

export default Research;
