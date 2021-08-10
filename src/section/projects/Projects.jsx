import React from 'react';
import './projects.scss';

import resumeData from 'util/resumeData';
import Separator from 'elements/separator/Separator';
import ProjectCard from 'parts/project-card/ProjectCard';

function Projects() {
	return (
		<div className="home-project">
			<div className="container container-px container-py">
				<Separator />
				<label className="section-title">Projects</label>
				<div>
					{resumeData.portfolio.map((project) => {
						return (
							<ProjectCard key={project.tag} project={project} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Projects;
