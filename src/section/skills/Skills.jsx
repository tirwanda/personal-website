import React from 'react';
import './skills.scss';

import { Grid } from '@material-ui/core';
import Separator from 'elements/separator/Separator';
import { SkillsData } from 'data/skills';

function Skills() {
	return (
		<Grid id="skills" container className="home-skills container section">
			<Grid item xs={12} className="home-about-title">
				<Separator />
				<label className="section-title">My Skills</label>
			</Grid>

			<Grid container className="home-skills-content">
				{SkillsData.map((item, index) => {
					return (
						<div key={index} className="skill-icon-div">
							<img
								src={item.icon}
								className="skill-icon"
								alt={item.platform}
							/>
						</div>
					);
				})}
			</Grid>
		</Grid>
	);
}

export default Skills;
