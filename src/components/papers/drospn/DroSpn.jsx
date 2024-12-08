import React from 'react';
import '../Citation.css';
import './DroSpn.css';
import '../PaperHeader.css';
import AppBar from "../../atoms/AppBar";

const DroSpn = () => {
	const authors = [
		{
			name: 'Rohith Peddi',
			affiliation: '1',
			imageUrl: 'assets/authors/rohithpeddi.jpg',
			link: 'https://rohithpeddi.github.io/'
		},
		{
			name: 'Vibhav Gogate',
			affiliation: '1',
			imageUrl: 'assets/authors/vibhavgogate.jpg',
			link: 'https://personal.utdallas.edu/~vibhav.gogate/'
		}
	];
	
	const resources = [
		{ name: 'Code', url: 'https://github.com/rohithpeddi/DroTPM' },
		{ name: 'Paper', url: 'https://openreview.net/forum?id=Fbdq_aS_xR' },
		{ name: 'Slides', url: 'https://utdallas.app.box.com/file/1709991839736?s=n498b1drosc7tawk00uzi9kgnm4s44ts' },
		{ name: 'Poster', url: 'https://utdallas.app.box.com/file/1709997093412?s=odbfdm8dtvn2jija9tpmjlncp5xc863s' }
	];
	
	const copyToClipboard = () => {
		navigator.clipboard.writeText(citationText);
		alert("Citation copied to clipboard!");
	};
	
	const citationText = `@inproceedings{peddi2022distributionally,
	  title={Distributionally Robust Learning of Sum-Product Networks},
	  author={Rohith Peddi and Vibhav Giridhar Gogate},
	  booktitle={The 5th Workshop on Tractable Probabilistic Modeling},
	  year={2022},
	  url={https://openreview.net/forum?id=Fbdq_aS_xR}
	}`;
	
	return (
		<div>
			<AppBar/>
			<div className="scenesayer-container">
				<h1>Distributionally Robust Learning of Sum-Product Networks</h1>
				<div className="authors">
					{authors.map((author) => (
						<div className="author" key={author.name}>
							<a href={author.link}>
								<img src={author.imageUrl} alt={author.name} className="author-image"/>
								<p>{author.name}<sup>{author.affiliation}</sup></p>
							</a>
						</div>
					))}
				</div>
				<div className="affiliations">
					<p><sup>1</sup>The University of Texas at Dallas</p>
					<p>UAI 2022</p>
				</div>
				<div className="resources">
					{resources.map((resource) => (
						<a href={resource.url} className="resource-button" key={resource.name}>
							{resource.name}
						</a>
					))}
				</div>
				
				<div className="citation">
					<p className="citation-title"> If you use our work, please cite us as:</p>
					<pre className="citation-text">
						{citationText}
					</pre>
					<button className="copy-button" onClick={copyToClipboard}>Copy Citation</button>
				</div>
			
			</div>
		</div>
	);
};

export default DroSpn;