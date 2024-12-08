import React from 'react';
import '../Citation.css';
import './SceneSayer.css';
import '../PaperHeader.css';
import AppBar from "../../atoms/AppBar";
import Slider from '../../atoms/Slider';

const SceneSayer = () => {
	const authors = [
		{
			name: 'Rohith Peddi',
			affiliation: '1',
			imageUrl: 'assets/authors/rohithpeddi.jpg',
			link: 'https://rohithpeddi.github.io/'
		},
		{
			name: 'Saksham Singh',
			affiliation: '2',
			imageUrl: 'assets/authors/sakshamsingh.jpg',
			link: 'https://www.linkedin.com/in/saksham-singh-6b9677208/'
		},
		{
			name: 'Saurabh',
			affiliation: '2',
			imageUrl: 'assets/authors/saurabh.jpg',
			link: 'https://www.linkedin.com/in/saurabh1401/'
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
		{ name: 'Code', url: 'https://github.com/rohithpeddi/SceneSayer' },
		{ name: 'Paper', url: 'https://arxiv.org/abs/2403.04899' },
		{ name: 'Slides', url: 'https://utdallas.app.box.com/file/1709997981470?s=gwdi0yuodpexb07g29n6ws3trnz5r6tz' },
		{ name: 'Poster', url: 'https://utdallas.app.box.com/file/1710004667310?s=wjr6cs8ox3et81f1xsf7vr9ie47lu4p8' }
	];
	
	const sections = [
		{
			title: 'TASK DESCRIPTION',
			images: [
				'assets/papers/scenesayer/taskpicture1.png'
			]
		},
		{
			title: 'TECHNICAL APPROACH',
			images: [
				'assets/papers/scenesayer/technicalapproach1.png'
			]
		},
		{
			title: 'BASELINES',
			images: [
				'assets/papers/scenesayer/baselines1.png'
			]
		},
		{
			title: 'RESULTS',
			images: [
				'assets/papers/scenesayer/results1.png',
				'assets/papers/scenesayer/results2.png',
				'assets/papers/scenesayer/results3.png'
			]
		},
		{
			title: 'QUALITATIVE RESULTS',
			images: [
				'assets/papers/scenesayer/qualitativeresults1.png',
				'assets/papers/scenesayer/qualitativeresults2.png'
			]
		}
	];
	
	const copyToClipboard = () => {
		navigator.clipboard.writeText(citationText);
		alert("Citation copied to clipboard!");
	};
	
	const citationText = `@InProceedings{peddi_et_al_scene_sayer_2024,
	    author="Peddi, Rohith
	    and Singh, Saksham
	    and Saurabh
	    and Singla, Parag
	    and Gogate, Vibhav",
	    editor="Leonardis, Ale{\\v{s}}
	    and Ricci, Elisa
	    and Roth, Stefan
	    and Russakovsky, Olga
	    and Sattler, Torsten
	    and Varol, G{\\"u}l",
	    title="Towards Scene Graph Anticipation",
	    booktitle="Computer Vision -- ECCV 2024",
	    year="2025",
	    publisher="Springer Nature Switzerland",
	    address="Cham",
	    pages="159--175",
	    isbn="978-3-031-73223-2"
	}`;
	
	return (
		<div>
			<AppBar/>
			<div className="scenesayer-container">
				<h1>Towards Scene Graph Anticipation</h1>
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
					<p>ECCV 2024</p>
					<p className="award"><strong>Oral Presentation (Acceptance ~2%)</strong></p>
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

export default SceneSayer;
