import React from 'react';
import './skills.scss';

import { Grid } from '@material-ui/core';
import { SkillsData } from 'data/skills';
import HomeTitle from 'elements/home-title/HomeTitle';

function Skills() {
	return (
		<Grid id="skills" container className="home-skills container section">
			<HomeTitle title="My Skills" />

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
