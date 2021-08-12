import React from 'react';
import Typed from 'react-typed';
import './about.scss';

import elforza18 from 'assets/images/elforza18.jpg';
import { Grid } from '@material-ui/core';
import Separator from 'elements/separator/Separator';

import resumeData from 'util/resumeData';

function About() {
	return (
		<Grid container className="home-about container" id="about">
			<Grid item xs={12} className="home-about-title">
				<Separator />
				<label className="section-title">About Me</label>
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing={3}>
					<Grid item sm={12} md={6}>
						<div className="about-image">
							<img src={elforza18} alt="El-Forza-18" />
						</div>
					</Grid>

					<Grid item sm={12} md={6}>
						<div className="about-right">
							<div className="about-text">
								I'am Edho Dwi Tirwanda and I'm a{' '}
								<Typed
									className="typed-text"
									strings={[
										'Web Developer',
										'Android Developer',
										'IoT Developer',
										'Automation Engineer',
									]}
									typeSpeed={40}
									backSpeed={60}
									loop
								></Typed>
							</div>
							<p>{resumeData.about}</p>
							<a href="/">Download CV</a>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default About;
