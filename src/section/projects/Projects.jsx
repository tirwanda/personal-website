import React from 'react';
import './projects.scss';

import resumeData from 'util/resumeData';
import Separator from 'elements/separator/Separator';
import ProjectCard from 'parts/project-card/ProjectCard';
import { Grid } from '@material-ui/core';

function Projects() {
	return (
		<Grid container className="home-project container" id="projects">
			<Grid item xs={12} className="home-about-title">
				<Separator />
				<label className="section-title">Projects</label>
			</Grid>

			<Grid item xs={12}>
				{resumeData.portfolio.map((project) => {
					return <ProjectCard key={project.tag} project={project} />;
				})}
			</Grid>
		</Grid>
	);
}

export default Projects;
