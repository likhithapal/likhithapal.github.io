import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ images, autoPlay = true, autoPlayTime = 5000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	
	useEffect(() => {
		let interval = null;
		if (autoPlay && !isPaused) {
			interval = setInterval(() => {
				nextSlide();
			}, autoPlayTime);
		}
		return () => clearInterval(interval);
	}, [currentIndex, autoPlay, autoPlayTime, isPaused]);
	
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};
	
	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? images.length - 1 : prev - 1
		);
	};
	
	const goToSlide = (index) => {
		setCurrentIndex(index);
	};
	
	return (
		<div
			className="slider"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div
				className="slider-track"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div className="slide" key={index}>
						<img src={image} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</div>
			<button className="prev" onClick={prevSlide}>
				<span>&#10094;</span>
			</button>
			<button className="next" onClick={nextSlide}>
				<span>&#10095;</span>
			</button>
			<div className="dots">
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${
							currentIndex === index ? 'active' : ''
						}`}
						onClick={() => goToSlide(index)}
					></span>
				))}
			</div>
		</div>
	);
};

export default Slider;
