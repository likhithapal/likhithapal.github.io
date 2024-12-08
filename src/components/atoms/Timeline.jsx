import React from 'react';
import './Timeline.css';
import { motion } from 'framer-motion';

const AwardItem = ({ award, year }) => (
    <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="timeline-marker"></div>
        <div className="timeline-date">{year}</div>
        <div className="timeline-content">
            <div className="award-image">
                <img 
                    src={award.imageUrl} 
                    alt={award.name}
                    onError={(e) => {
                        e.target.src = '/awards/default-award.png';
                    }}
                />
            </div>
            <div className="award-details">
                <h3 className="award-title">{award.name}</h3>
            </div>
        </div>
    </motion.div>
);

const Timeline = ({ timelineData }) => {
    const awards = Object.entries(timelineData)
        .flatMap(([year, awards]) => 
            awards.map(award => ({ ...award, year }))
        )
        .sort((a, b) => b.year - a.year);

    return (
        <div className="timeline">
            {awards.map((award, index) => (
                <AwardItem key={index} award={award} year={award.year} />
            ))}
        </div>
    );
};

export default Timeline;
