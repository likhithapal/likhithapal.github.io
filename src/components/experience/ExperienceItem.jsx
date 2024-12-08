import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ title, duration, description, papers }) => {
	return (
		<div className="experience-item">
			<div className="header">
				<h3 className="title">{title}</h3>
				<h4 className="duration">{duration}</h4>
			</div>
			<ul className="description">
				{description.map((point, index) => (
					<li key={`desc-${index}`}>{point}</li>
				))}
			</ul>
			{papers && papers.length > 0 && (
				<div className="papers">
					<h5>Key Papers:</h5>
					<div className="papers-list">
						{papers.map((paper, index) => (
							<div key={`paper-${index}`} className="paper">
								<img src={paper.imageUrl} alt={paper.title} className="paper-image" />
								<div className="paper-content">
									<p className="paper-title">{paper.title}</p>
									<div className="paper-details">
										<p className="paper-conference">{paper.conference}, {paper.year}</p>
										<div className="paper-links">
											{paper.arxivLink && <a href={paper.arxivLink} target="_blank" rel="noopener noreferrer" className="paper-link arxiv-link">View Paper</a>}
											{paper.projectLink && <a href={paper.projectLink} target="_blank" rel="noopener noreferrer" className="paper-link project-link">Project Page</a>}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default ExperienceItem;
