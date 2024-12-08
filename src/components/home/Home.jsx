import './Home.css';
import AppBar from "../atoms/AppBar";
import { FaGithub, FaTwitter, FaLinkedin,  FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import homeData from '../../Data/jsons/latest_news.json';


const Home = () => {
	const {profile, news } = homeData
	return (
		<div className="home-container">
			<AppBar />
			<div className="content-wrapper">
				<div className="left-side">
					{/* <h2>{profile.name}</h2> */}
					<p className="abstract">
					I am a Naval Veteran with 5.5 years of diverse experience, having served in roles such as Business Analyst, Project Officer, and Training Instructor. During my tenure, I honed my leadership, project management, and analytical skills while managing high-value projects and training teams for operational excellence.
					<br/>
					<br/>
					I hold an undergraduate degree in Ocean Engineering from <b>IIT Kharagpur</b> and am currently pursuing a <b>Master’s in Computer Science with a specialization in Machine Learning at University of Texas at Dallas</b>, set to graduate in December 2024. Alongside my studies, I worked as a Research Assistant (RA) and Teaching Assistant (TA) at the University of Texas at Dallas from January 2023 to December 2024, gaining valuable experience in academic research and teaching.
					<br/>
					<br/>
					My technical journey includes a Data Science internship at American Airlines, where I gained hands-on experience in building ETL pipelines, developing machine learning models, and solving data-driven challenges. I aim to combine my military leadership background, academic foundation, and technical expertise to implement AI-driven solutions as a Data Scientist or AI/Machine Learning Engineer.
					</p>

					<div className="bottom-half" style={{width: '100%', margin: 0, padding: '20px'}}>
						<h1 style={{
							color: 'var(--text-primary)',
							fontSize: '1.8rem',
							fontWeight: '600',
							marginBottom: '-1.5rem',
							fontFamily: 'Inter, sans-serif'
						}}>Latest News</h1>
						<ul className="news-container">
							{news.map(item => (
								<li key={item.description}>
									<div className="news-item-container">
										{/* <span className={`news-category ${item.tagColor}`}>
											{item.category}
										</span> */}
										<span className={`news-date ${item.tagColor}`}>
											{item.date}
										</span>
										<div className="news-content">											
											{item.description}
											{item.link ?
												<span className="news-link">
													<a href={item.link} target="_blank" rel="noopener noreferrer">
														<FaExternalLinkAlt size={15}/>
													</a>
												</span> : <div></div>
											}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="right-side">
					<div className="top-half">
						<img src={profile.profilePic} alt="Profile" className="profile-pic" style={{width: '100%', height: '100%', objectFit: 'cover', visibility: 'visible'}}/>
						<div className="social-media-links">
							<a href={profile.cvLink} target="_blank" rel="noopener noreferrer" className="cv-icon">CV</a>
							<a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub
								size={30}/></a>
							<a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin
								size={30}/></a>
							{/* <a href={profile.socialLinks.scholar} target="_blank"
							rel="noopener noreferrer"><FaGraduationCap size={30}/></a> */}
							{/* <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter
								size={30}/></a> */}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Home;
