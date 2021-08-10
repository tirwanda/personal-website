import React from 'react';
import './projectCard.scss';

function ProjectCard({ project }) {
	return (
		<div className="project-card">
			<div className="project-info">
				<label className="project-title">{project.title}</label>
				<div className="project-links">
					{project.links.map((link) => (
						<a
							key={link.link}
							target="_blank"
							className="link-button"
							href={link.link}
							rel="noreferrer"
						>
							{link.icon}
						</a>
					))}
				</div>
				<p>{project.description}</p>
			</div>
			<img
				src={project.image}
				alt={project.title}
				className="project-photo"
			/>
		</div>
	);
}

export default ProjectCard;
