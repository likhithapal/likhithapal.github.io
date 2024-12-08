import React from 'react';
import '../Citation.css';
import './RoTpm.css';
import '../PaperHeader.css';
import AppBar from "../../atoms/AppBar";

const RoTpm = () => {
	const authors = [
		{
			name: 'Rohith Peddi',
			affiliation: '1',
			imageUrl: 'assets/authors/rohithpeddi.jpg',
			link: 'https://rohithpeddi.github.io/'
		},
		{
			name: 'Tahrima Rahman',
			affiliation: '1',
			imageUrl: 'assets/authors/tahrimarahman.jpg',
			link: 'https://personal.utdallas.edu/~txr110830/index.html'
		},
		{
			name: 'Vibhav Gogate',
			affiliation: '1',
			imageUrl: 'assets/authors/vibhavgogate.jpg',
			link: 'https://personal.utdallas.edu/~vibhav.gogate/'
		}
	];
	
	const resources = [
		{ name: 'Code', url: 'https://github.com/rohithpeddi/RobustTPMs' },
		{ name: 'Paper', url: 'https://proceedings.mlr.press/v180/peddi22a.html' },
		{ name: 'Slides', url: 'https://utdallas.app.box.com/file/1709987831657?s=pdsqh8ta2gw8vgr3dpx8vzljmt9stwl5' }
	];
	
	const copyToClipboard = () => {
		navigator.clipboard.writeText(citationText);
		alert("Citation copied to clipboard!");
	};
	
	const citationText = `@InProceedings{peddi_et_al_uai_2022,
	  title = \t {Robust learning of tractable probabilistic models},
	  author =       {Peddi, Rohith and Rahman, Tahrima and Gogate, Vibhav},
	  booktitle = \t {Proceedings of the Thirty-Eighth Conference on Uncertainty in Artificial Intelligence},
	  pages = \t {1572--1581},
	  year = \t {2022},
	  editor = \t {Cussens, James and Zhang, Kun},
	  volume = \t {180},
	  series = \t {Proceedings of Machine Learning Research},
	  month = \t {01--05 Aug},
	  publisher =    {PMLR},
	  pdf = \t {https://proceedings.mlr.press/v180/peddi22a/peddi22a.pdf},
	  url = \t {https://proceedings.mlr.press/v180/peddi22a.html}
	}`;
	
	return (
		<div>
			<AppBar/>
			<div className="scenesayer-container">
				<h1>Robust learning of tractable probabilistic models</h1>
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

export default RoTpm;