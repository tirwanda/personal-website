import { Grid } from '@material-ui/core';
import React from 'react';
import './projectCard.scss';

function ProjectCard({ project }) {
	return (
		<Grid container spacing={3} className="project-card">
			<Grid item xs={12} md={6}>
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
			</Grid>
			<Grid item xs={12} md={6}>
				<div className="project-image">
					<img
						src={project.image}
						alt={project.title}
						className="project-photo"
					/>
				</div>
			</Grid>
		</Grid>
	);
}

export default ProjectCard;
