import React, { useState } from "react";
import './ImparTail.css';
import '../Citation.css';
import '../PaperHeader.css';
import AppBar from "../../atoms/AppBar";
import Slider from "../../atoms/Slider";

const ImparTail = () => {
	const authors = [
		{
			name: 'Rohith Peddi',
			affiliation: '1',
			imageUrl: 'assets/authors/rohithpeddi.jpg',
			link: 'https://rohithpeddi.github.io/'
		},
		{
			name: 'Saurabh',
			affiliation: '2',
			imageUrl: 'assets/authors/saurabh.jpg',
			link: 'https://www.linkedin.com/in/saurabh1401/'
		},
		{
			name: 'Ayush Shrivastava',
			affiliation: '2',
			imageUrl: 'assets/authors/ayushshrivastava.jpg',
			link: 'https://www.linkedin.com/in/ayush-shrivastava-264398248/'
		},
		{
			name: 'Parag Singla',
			affiliation: '2',
			imageUrl: 'assets/authors/paragsingla.png',
			link: 'https://www.cse.iitd.ac.in/~parags/'
		},
		{
			name: 'Vibhav Gogate',
			affiliation: '1',
			imageUrl: 'assets/authors/vibhavgogate.jpg',
			link: 'https://personal.utdallas.edu/~vibhav.gogate/'
		}
	];
	
	const resources = [
		{ name: 'Code (Coming Soon)', url: 'https://example.com/code' },
		{ name: 'Paper', url: 'https://arxiv.org/abs/2411.13059' },
		{ name: 'Slides (Coming Soon)', url: 'https://example.com/slides' },
		{ name: 'Poster', url: 'https://example.com/poster' }
	];
	
	const sections = [
		{
			title: 'TASK DESCRIPTION',
			images: [
				'assets/papers/impartail/taskpicture1.png',
				'assets/papers/impartail/taskpicture2.png'
			]
		},
		{
			title: 'TECHNICAL APPROACH',
			images: [
				'assets/papers/impartail/technicalapproach1.png'
			]
		},
		{
			title: 'BASELINES',
			images: [
				'assets/papers/impartail/baselines1.png',
				'assets/papers/impartail/baselines2.png',
				'assets/papers/impartail/baselines3.png',
				'assets/papers/impartail/baselines4.png',
				'assets/papers/impartail/baselines5.png'
			]
		},
		{
			title: 'RESULTS',
			images: [
				'assets/papers/impartail/results1.png',
				'assets/papers/impartail/results2.png',
				'assets/papers/impartail/results3.png',
				'assets/papers/impartail/results4.png'
			]
		}
	];
	
	const citationText = `@misc{peddi2024unbiasedrobustspatiotemporalscene,
		title={Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation},
		author={Rohith Peddi and Saurabh and Ayush Abhay Shrivastava and Parag Singla and Vibhav Gogate},
		year={2024},
		eprint={2411.13059},
		archivePrefix={arXiv},
		primaryClass={cs.CV},
		url={https://arxiv.org/abs/2411.13059},
	}`;
	
	const copyToClipboard = () => {
		navigator.clipboard.writeText(citationText);
		alert("Citation copied to clipboard!");
	};
	
	return (
		<div>
			<AppBar/>
			<div className="impartail-container">
				<h1>Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation</h1>
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
					<p><sup>1</sup>The University of Texas at Dallas <sup>2</sup>IIT Delhi</p>
					<p>Under Review</p>
				</div>
				<div className="resources">
					{resources.map((resource) => (
						<a href={resource.url} className="resource-button" key={resource.name}>
							{resource.name}
						</a>
					))}
				</div>
				{sections.map((section) => (
					<div className="section" key={section.title}>
						<p>{section.title}</p>
						<Slider images={section.images} cssOptions={{}}/>
					</div>
				))}
				
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

export default ImparTail;
