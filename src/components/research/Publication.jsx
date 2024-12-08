import React from 'react';
import './Publication.css'; // Ensure this CSS file is updated accordingly

const Publication = ({ 
	title, 
	authors, 
	conference, 
	year, 
	imageUrl, 
	arxivLink, 
	projectLink, 
	bibtex,
	slides,
	poster,
	video,
	awards,
	acceptanceRate,
	otherVersions 
}) => {
	const [showBibtex, setShowBibtex] = React.useState(false);
	const [showStats, setShowStats] = React.useState(false);

	return (
		<div className="publication">
			<div className="publication-image-container">
				<img src={imageUrl} alt={title} className="publication-image" />
			</div>
			<div className="publication-content-container">
				<div className="publication-content">
					<h3 className="publication-title">{title}</h3>
					<div className="publication-authors">{authors.join(', ')}</div>
					<div className="publication-info">
						In {conference}, {year}
					</div>
					
					<div className="publication-stats">
						{awards && (
							<div className="awards">
								🏆 {Array.isArray(awards) ? awards.join(', ') : awards}
							</div>
						)}
						{acceptanceRate && (
							<div className="acceptance-rate">
								📊 Acceptance Rate: {acceptanceRate}
							</div>
						)}
					</div>

					<div className="publication-links">
						<a 
							href={arxivLink} 
							target="_blank" 
							rel="noopener noreferrer" 
							className={`pub-button link-arxiv ${!arxivLink ? 'disabled' : ''}`}
						>
							📄 Paper
						</a>
						<a 
							href={projectLink} 
							target="_blank" 
							rel="noopener noreferrer" 
							className={`pub-button link-project ${!projectLink ? 'disabled' : ''}`}
						>
							🔗 Website
						</a>
						<button 
							className={`pub-button link-bibtex ${!bibtex ? 'disabled' : ''}`} 
							onClick={() => bibtex && setShowBibtex(!showBibtex)}
						>
							📚 Cite
						</button>
						<a 
							href={slides} 
							target="_blank" 
							rel="noopener noreferrer" 
							className={`pub-button link-slides ${!slides ? 'disabled' : ''}`}
						>
							📊 Slides
						</a>
						<a 
							href={poster} 
							target="_blank" 
							rel="noopener noreferrer" 
							className={`pub-button link-poster ${!poster ? 'disabled' : ''}`}
						>
							🖼️ Poster
						</a>
						<a 
							href={video} 
							target="_blank" 
							rel="noopener noreferrer" 
							className={`pub-button link-video ${!video ? 'disabled' : ''}`}
						>
							🎥 Video
						</a>
					</div>

					{showBibtex && (
						<div className="bibtex-container">
							<div className="bibtex-header">
								<button 
									className="copy-button"
									onClick={() => navigator.clipboard.writeText(bibtex)}
								>
									📋 Copy
								</button>
							</div>
							<pre className="bibtex-content">
								{bibtex}
							</pre>
						</div>
					)}

					{otherVersions  && (
						<div className="other-versions">
							<h4>Other Versions:</h4>
							{otherVersions.map((version, index) => (
								<div key={index} className="version">
									<div className="version-title">{version.title}</div>
									<div className="version-conference">{version.conference}</div>
									{
										version.projectLink && 
										<a 
										href={version.projectLink} 
										target="_blank" 
										rel="noopener noreferrer" 
										className="pub-button link-arxiv">
											Paper
										</a>
									}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Publication;
